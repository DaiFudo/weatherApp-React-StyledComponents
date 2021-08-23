import React, { Component }  from 'react';
import styled from 'styled-components';

import AppInput from '../app-input';
import AppCard from '../app-card'

 const Wrapper  = styled.div`
  font-size: 2rem;
  border: 2px solid grey;
  border-radius: 10px;
  padding: 10px;
  margin: 50px auto;
  display: flex;
  width: 350px;
  height: 410px;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  background-color: #87ccf5;
` 
export default class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      name: null,
      temp: null,
      clouds: null
    }
  }
  
   gettingWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value
    
    if(city){
    const response = await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3aab9e2a8830ffe6084e4ff30dbfc86d`)
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Please username maybe you will normal city name?`)
       
    } 
    console.log(data.clouds,'in gettingWeather')
    this.setState({
     name: data.name,
     temp: data.main.temp,
     clouds: data.clouds.all
    });
  }
}



  render(){
    if(this.state != null){
      return(
        <Wrapper>
          <AppInput 
          weatherMethood={this.gettingWeather}
          />
          <AppCard 
          nameCity={this.state} />
        </Wrapper>
      )
      
    }else{
      <>
      Houston we have a problem.
      </>
    }
    }
}
