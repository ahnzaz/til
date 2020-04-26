export function stringifyBuffered(buffered: TimeRanges | undefined): string {
    const result = []
    if (buffered) {

        for (let i = 0; i < buffered.length; i++) {
            result.push([buffered.start(i), buffered.end(i)]);
        }
    }
    return JSON.stringify(result);
}