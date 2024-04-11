import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expected = 'someClass pdg someClass2';
        expect(classNames('someClass', {}, ['pdg', 'someClass2'])).toBe(expected);
    });
    test('with mods', () => {
        const expected = 'someClass pdg someClass2 hovered scrolled';
        expect(classNames('someClass',
            { hovered: true, selectable: false, scrolled: true },
            ['pdg', 'someClass2']))
            .toBe(expected);
    })
})