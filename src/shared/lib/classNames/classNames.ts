type Mods = Record<string, boolean | string | undefined>



export function classNames(cls: string, mods: Mods = {}, additional: Array<string | undefined> = []): string {
    return [
        cls, 
        ...additional.filter(Boolean), 
        ...Object.entries(mods)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars  , no-unused-vars
        .filter(([key, value]) => {
            return Boolean(value)
        })
        .map(([key]) => {
            return key
        })
    ].join(' ')
}


