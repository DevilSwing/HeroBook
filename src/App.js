import React, {Component} from 'react';
import Navbar from './components/navbar/navbar.jsx';
import HeroList from './components/heroList/heroList.jsx';
import AddHero from './components/addHero/addHero.jsx';
import Settings from './components/settings/settings.jsx';
import HeroPics from './components/heroPics/heroPics.jsx';
import Astral from './components/astral/astral.jsx';
import {Route} from 'react-router-dom';


class App extends Component {

    constructor() {
        super();

        this.state = {
            appName: 'Hero Book',
            heroList: [
                {
                    name: 'BUZIPOOP',
                    desc: 'Warrior from Hell',
                    img: URl:"https://pravlife.org/sites/default/files/field/image/12351264_895057263934869_1317736920_n.jpg"
                },
                {
                    name: 'Damir',
                    desc: 'Warrior from Jorlandia'
                    img: URl:"https://pravlife.org/sites/default/files/field/image/12351264_895057263934869_1317736920_n.jpg"
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
        let pics = [];

        return (
            <>
                <Navbar appName={this.state.appName}/>
                <Route exact path="/"
                    render={(props) => <HeroList heroes={this.state.heroList}/>}/>

                <Route path="/settings" component={Settings}/>
                <Route path="/astral" component={Astral}/>
            </>
        );
    }
}

export default App;