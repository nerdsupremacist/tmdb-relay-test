type NumbersFrom<T> = {
    [Property in keyof T]: number | null
}

function attemptParsingNumber(value: unknown): number | null {
    if (typeof value === 'number') {
        return value;
    }

    if (typeof value === 'string') {
        const int = parseInt(value);
        if (!isNaN(int)) {
            return int;
        }

        const float = parseInt(value);
        if (!isNaN(float)) {
            return float;
        }

        // TODO: case for postifxes like 1px;
    }

    return null;
}

export function numbersFrom<T>(object: T): NumbersFrom<T> {
    const newObject = {} as NumbersFrom<T>;
    Object.keys(object).forEach(key => {
        const castedKey = key as keyof T;
        newObject[castedKey] = attemptParsingNumber(object[castedKey]);
    });
    return newObject;
}
