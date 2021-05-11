export function omit<T, K extends Array<keyof T>>(object: T, ...props: K): Omit<T, K[number]> {
    const newObject: T = Object.assign({}, object);
    for (const prop of props) {
        delete newObject[prop];
    }
    return newObject as Omit<T, K[number]>;
}
