import { TemperatureInfo } from './temperature-info';

describe('TemperatureInfo', () => {
  it('should create an instance', () => {
    expect(new TemperatureInfo(0,0,0,0,0,0)).toBeTruthy();
  });
});
