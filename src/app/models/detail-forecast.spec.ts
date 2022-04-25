import { DetailForecast } from './detail-forecast';
import { TemperatureInfo } from './temperature-info';

describe('DailyForecast', () => {
  it('should create an instance', () => {
    expect(new DetailForecast(0,0,0,0,new TemperatureInfo(0,0,0,0,0,0),[])).toBeTruthy();
  });
});
