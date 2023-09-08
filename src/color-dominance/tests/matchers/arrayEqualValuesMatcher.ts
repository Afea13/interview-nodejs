declare global {
    namespace jest {
      interface Matchers<R> {
        toHaveEqualValues(expected: any[]): R;
      }
    }
  }
  
  export {};

expect.extend({
  toHaveEqualValues(received: any[], expected: any[]) {
    const pass =
      received.length === expected.length &&
      received.every((value, index) => value === expected[index]);

    if (pass) {
      return {
        message: () =>
          `Expected arrays to not have equal values, but they do.`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Expected arrays to have equal values, but they do not.`,
        pass: false,
      };
    }
  },
});
