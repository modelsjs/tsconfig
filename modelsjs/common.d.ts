type Nullable<T> = T | null | undefined;

type OneOf<R extends Record<string, any>> = {
    [P in keyof R]: (Record<P, R[P]> & Partial<Record<Exclude<keyof R, P>, never>>) extends infer O
        ? { [Q in keyof O]: O[Q] }
        : never
}[keyof R];

type Action<R = void> = () => R;

type Hash<T extends any = unknown> = Record<string, T>;

type Primitive = string | number | boolean | null;

interface OJSON {
    [prop: string]: Primitive | OJSON | (Primitive | OJSON)[]
}
