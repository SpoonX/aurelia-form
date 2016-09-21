import {normalizedAttributes} from 'src/attributes';

describe('attributes', function() {
  it('normalize a string', function(done) {
    expect(normalizedAttributes('name')).toEqual({name: true});
    expect(normalizedAttributes(['name', 'this'])).toEqual({name: true, this: true});
    expect(normalizedAttributes({name: true, this: true})).toEqual({name: true, this: true});
    done();
  });
});
