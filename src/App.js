import React, { Component } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import HeroList from './components/heroList/heroList.jsx';
import AddHero from './components/addHero/addHero.jsx';
import Settings from './components/settings/settings.jsx';
import HeroPics from './components/heroPics/heroPics.jsx';
import { Route } from 'react-router-dom';


class App extends Component {

  constructor() {
    super();

    this.state = {
      appName: 'Hero Book',
        heroList:  [
        {
        name: 'BUZIPOOP',
        desc: 'Warrior from hell'
      },
      {
        name: 'Damir',
        desc: 'Warrior from Jorlandia'
      },
       {
        name: 'Kudgyt',
        desc: 'Warrior from Beer'
      }, 
      {
        name: 'Prorab',
        desc: 'Warrior from Stroyka'
      }

        ]
    }
  }

  render() {
    return (
      <>
        <Navbar appName={this.state.appName}/> 
        <HeroList heroes={this.state.heroList}/>

        <Route path="/settings" component={Settings}/>
       
      </>  
    );
  }
}

export default App;
