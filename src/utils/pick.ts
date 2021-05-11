export function pick<T, K extends keyof T>(object: T, ...keys: K[]): Pick<T, K> {
    const newObject = {} as Pick<T, K>;
    keys.forEach(key => {
        newObject[key] = object[key];
    });
    return newObject;
}
