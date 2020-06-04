import Vue from 'vue';

(function () {

    Vue.component('todo-item', {
        props:['todo'],
        template : `<li> {{todo.text}} </li>`,
    });

    const app7 = new Vue({
        el:"#app7",
        data:{
            groceryList:[
                {
                    id:0, text:'Vegetables'
                },
                {
                    id:1, text:"Chees",
                },
                {
                    id:2, text:"Whatever"
                }
            ]
        }
    })
    // const app = new Vue({
    //     el: "#app",
    //     data: {
    //         message: "Hello, Vue!",
    //     }
    // });

    // const app2 = new Vue({
    //     el: "#app2",
    //     data: {
    //         message: `이 페이지는 ${new Date()} 에 로드되었습니다.`,
    //     },
    // });

    // const app4 = new Vue({
    //     el: "#app4",
    //     data: {
    //         todos: [
    //             { text: `javascript 배우기` },
    //             { text: `vue 배우기` },
    //             { text: `무언가 배우기` },
    //         ]
    //     }
    // });

    // const app5 = new Vue({
    //     el: "#app5",
    //     data: {
    //         message: `hello, Vue!`,
    //     },
    //     methods: {
    //         reverseMessage: function () {
    //             this.message = this.message.split('').reverse().join('');
    //         }
    //     }
    // })

    // window.app = app;

    // window.app2 = app2;
})();