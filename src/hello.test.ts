import { Hello } from './hello'

describe('jest sample', () => {
    test('Hello', () => {
        expect(Hello()).toBeTruthy();
    })
})