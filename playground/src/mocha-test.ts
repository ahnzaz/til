import mocha from 'mocha';
import {use, expect} from 'chai';
import chaiSpies from 'chai-spies';
import chaiAsPromised from 'chai-as-promised';

use(chaiSpies);
use(chaiAsPromised);

describe('Mocha framework test', ()=>{
    it('Simple resolved promise test', async ()=>{
        return Promise.resolve();
    });

    it('Simple failed promise test', async ()=>{
        return Promise.reject();
    });
})