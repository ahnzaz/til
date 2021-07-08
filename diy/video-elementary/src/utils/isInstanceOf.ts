export default function isInstanceOf<T extends Object>(instance: T, prototype: new () => T): instance is T {
    return instance.constructor === prototype;
}
