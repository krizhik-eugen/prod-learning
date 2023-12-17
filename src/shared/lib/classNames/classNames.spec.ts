import { classNames } from './classNames';

describe('classNames', () => {
    test('only first param', () => {
        expect(classNames('test_class_1')).toBe('test_class_1');
    });

    test('with additional params', () => {
        const expectedClassName = 'test_class_1 test_class_2 test_class_3';

        expect(classNames('test_class_1', {}, ['test_class_2', 'test_class_3'])).toBe(expectedClassName);
    });

    test('with additional object params', () => {
        const expectedClassName = 'test_class_1 test_class_2 test_class_4';

        expect(classNames('test_class_1', { test_class_2: true, test_class_3: false }, ['test_class_4'])).toBe(expectedClassName);
    });
});
