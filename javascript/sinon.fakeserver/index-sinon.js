const sinon = require('sinon');
const { ajax } = require('rxjs/ajax');
const { map } = require('rxjs/operators');

describe('Fakeserver', () => {
    it('Fake server auto respond', () => {
        const xhr = sinon.useFakeXMLHttpRequest();
        xhr.onCreate = () => console.log('XHR created');
        const fakeServer = sinon.fakeServer.create();
        fakeServer.autoRespond = true;
        fakeServer.autoRespondAfter = 50;
        fakeServer.respondWith(
            "example.com/test",
            (req) => {
                req.respond(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" }, JSON.stringify({ msg: 'hello, world!' }).trim());
            }
        );

        ajax({
            createXHR: () => new sinon.FakeXMLHttpRequest(),
            url: 'example.com/test',
            crossDomain: true,
            withCredentials: false,
            method: 'GET',
        })
            .pipe(map(ajax => ajax.response))
            .subscribe((responseText) => {
                console.log(responseText);
                fakeServer.restore();
            });
    });

    xit('Real server auto respond', done => {
        ajax({
            createXHR: () => new sinon.FakeXMLHttpRequest(),
            url: 'https://api.github.com/users?per_page=5',
            crossDomain: true,
            withCredentials: false,
            method: 'GET',
        })
            .subscribe(value => {
                console.log(value);
                done();
            });
    })
});