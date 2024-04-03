type Mods = Record<string, boolean | string>



export function classNames(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls, 
        ...additional, 
        ...Object.entries(mods)
        .filter(([key, value]) => {
            return Boolean(value)
        })
        .map(([key]) => {
            return key
        })
    ].join(' ')
}


classNames('someClass', { hovered: true, selectable: false }, ['pdg']); // 'someClass hovered pdg'