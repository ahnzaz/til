import Vue from 'vue';

export default class CorePlayer {
    private component: any;
    constructor() {

    }

    public render(query: string): this {
        Vue.component('core-player', {
            template: '<div class="core-player"></div>'
        }); 

        const playerVue = new Vue({
            el: query,
        });

        this.component = playerVue;

        return this;
    }
}