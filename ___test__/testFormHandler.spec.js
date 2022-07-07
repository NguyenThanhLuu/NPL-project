import { handleSubmit } from "../src/client/js/formHandler"

describe('handle submit function', () => {
   //  test('process async code', () => {
   //      expect(handleSubmit(1)).toBe(1);
   //  });
   test('the data is peanut butter', () => {
      return handleSubmit().then(data => {
        expect(data).toBe('peanut butter');
      });
    });
});

