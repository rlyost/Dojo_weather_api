import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getWeather(city){
    var weather_call = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=1a4029c2a69f93016e67a7faba869202";
    return this._http.get(weather_call);
  }

}
