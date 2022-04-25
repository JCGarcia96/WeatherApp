import { CurrentWeather } from './current-weather';
import { Forecast } from './forecast';

describe('Forecast', () => {
  it('should create an instance', () => {
    expect(new Forecast(new CurrentWeather(0,0,0,0),[],[])).toBeTruthy();
  });
});
