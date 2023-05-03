const getPercents = require('./index.js');

describe('test', ()=> {
it('number / 100 * percent', () => {
  expect(getPercents(30, 200)).toBe(60);
})
it('number / 100 * percent', () => {
  expect(getPercents(40, 200)).toBe(60);
})
it('number / 100 * percent', () => {
  expect(getPercents(20, 300)).toBe(60);
})
});

