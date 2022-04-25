import { City } from './city';

describe('City', () => {
  it('should create an instance', () => {
    expect(new City('',0,0,'','')).toBeTruthy();
  });
});
