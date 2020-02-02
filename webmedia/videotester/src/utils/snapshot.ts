
export const defaultVideoElementProps: (keyof HTMLVideoElement)[] = [...Object.keys(HTMLVideoElement.prototype) ?? [], ...Object.keys(HTMLMediaElement.prototype) ?? []] as (keyof HTMLVideoElement)[];
export const defaultEventProps: (keyof Event)[] = [
    "type",
    "timeStamp",
] as (keyof Event)[];

export default function snapshot<T extends object>(target: T, props: (keyof T)[]): Partial<T> {
    const clonned = props.reduce((acc, prop): Partial<T> => {
        return {
            ...acc,
            [prop]: target[prop],
        }
    }, {})
    return clonned;
}