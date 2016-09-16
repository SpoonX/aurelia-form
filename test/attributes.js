import {attributes} from '../src/attributes';

describe('attributes', () => {
  it('normalize a string', () => {
    expect(attributes('name')).toEqual({name: true});
  });

  it('normalize a list of strings', () => {
    expect(attributes(['name', 'this'])).toEqual({name: true, this: true});
  });

  it('noralize an object', () => {
    expect(attributes({name: true, this: true})).toEqual({name: true, this: true});
  });
});
