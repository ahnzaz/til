(function (): void {
    const canvas: HTMLCanvasElement = document.querySelector('canvas')!;

    const context = canvas.getContext('2d');

    context!.font = '20px serif';
    context?.fillText('asdfasdf', 10, 50);

    canvas.addEventListener('resize', () => {
        context?.fillText('asdfasdf', 10, canvas.height - 10);
    });

    (window as any).canvas = canvas;
})();