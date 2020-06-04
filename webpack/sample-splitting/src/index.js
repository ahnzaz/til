function getComponent() {
    return import(/* webpackPrefetch: true */ './ChartingLibrary').then(({ default: _ }) => {
        const element = document.createElement('div');

        element.innerHTML = ['hello', 'webpack', ''].join();

        return element;
    })
};

getComponent().then(component => {
    document.body.appendChild(component);
})