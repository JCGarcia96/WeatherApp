import { Zipcode } from './zipcode';

describe('Zipcode', () => {
  it('should create an instance', () => {
    expect(new Zipcode('','',0,0,'')).toBeTruthy();
  });
});
