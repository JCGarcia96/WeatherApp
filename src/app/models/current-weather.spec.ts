import { CurrentWeather } from './current-weather';

describe('CurrentWeather', () => {
  it('should create an instance', () => {
    expect(new CurrentWeather(0,0,0,0)).toBeTruthy();
  });
});
