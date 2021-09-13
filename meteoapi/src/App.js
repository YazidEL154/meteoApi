import logo from './logo.svg';
import './App.css';

import { Meteo } from './components/meteo.component';
import { render } from '@testing-library/react';
import { Component } from 'react';
import { IconText } from './components/icon-texte.component';
import { Temperature } from './components/temperature.component';
import { Vent } from './components/vent.component';

const KEY = "8dcaf456a33627bdf3a6e96f200d9146";

class App extends Component{
  constructor(){
    super();
    this.state = {
      ville: undefined,
      pays: undefined,
      temp_max: undefined,
      temp_min: undefined,
      ressenti: undefined,
      text: undefined,
      vent: undefined,
      sens: undefined,
      icon: undefined
    };
    this.meteroParVille();
  }

  meteroParVille = async() => {
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${KEY}&lang=fr&units=metric`);
    const resp = await api.json();

    console.log(resp);

    this.setState({
      ville: resp.name,
      pays: resp.sys.country,
      temp_max: resp.main.temp_max,
      temp_min: resp.main.temp_min,
      ressenti: resp.main.feels_like,
      text: resp.weather[0].description,
      vent: resp.wind.speed,
      sens: resp.wind.deg,
      icon: "http://openweathermap.org/img/wn/"+resp.weather[0].icon+"@2x.png"
    })
  };

  render() {
    return (
      <div className="App">
        <Meteo ville={this.state.ville} pays={this.state.pays}/>
        <IconText icon={this.state.icon} text={this.state.text} />
        <Temperature temp_max={this.state.temp_max} temp_min={this.state.temp_min} />
        <Vent vent={this.state.vent} sens={this.state.sens} />
      </div>
    );
  }
}



export default App;
