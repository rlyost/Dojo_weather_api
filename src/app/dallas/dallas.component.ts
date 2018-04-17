import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather = {};
  humid = 0;
  min = 0;
  max = 0;
  avg = 0;
  status = '';
  desc = '';

  constructor(private _httpService: HttpService){
  }

  ngOnInit() {
    this.getweatherFromService();
  }
  getweatherFromService(){
    let observable = this._httpService.getWeather('Dallas')
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.weather = data;
      this.humid = this.weather.main.humidity;
      this.min = temperatureConverter(this.weather.main.temp_min);
      this.max = temperatureConverter(this.weather.main.temp_max);
      this.avg = (this.max-this.min)/2 + this.min;
      this.status = this.weather.weather[0].main;
      this.desc = this.weather.weather[0].description
    });
    function temperatureConverter(valNum) {
      return Math.round(((valNum-273.15)*1.8)+32);
    }
  }
}
