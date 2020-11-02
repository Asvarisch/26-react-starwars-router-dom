import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: 'luke'
        }
    }

    changeHero = hero => {
        this.setState({hero});
    }

    render() {
        return (
            <div className='container-fluid'>
                <Header hero={this.state.hero}/>
                <Main hero={this.state.hero} changeHero={this.changeHero}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
