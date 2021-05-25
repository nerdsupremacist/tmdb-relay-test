import type { Rect } from './types';

declare global {
    interface Array<T> {
        compactMap<O>(transform: (element: T) => O | null | undefined): Array<O>;
    }

    interface ReadonlyArray<T> {
        compactMap<O>(transform: (element: T) => O | null | undefined): Array<O>;
    }

    interface HTMLElement {
        getRect(): Rect
    }
}

HTMLElement.prototype.getRect = function<T extends HTMLElement>(this: T): Rect {
    return {
        height: this.clientHeight,
        offsetLeft: this.offsetLeft,
        offsetTop: this.offsetTop,
        parent: this.parentElement?.getRect() ?? null,
        width: this.clientWidth,
    };
};

Array.prototype.compactMap = function<T, O>(this: T[], transform: (element: T) => O | null | undefined): O[] {
    return this.map(transform).filter((x): x is O => x != null);
};

export {};
