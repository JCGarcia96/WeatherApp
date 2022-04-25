import { Weather } from './weather';

describe('Weather', () => {
  it('should create an instance', () => {
    expect(new Weather(0,'','','')).toBeTruthy();
  });
});
