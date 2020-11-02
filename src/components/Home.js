import React from 'react';
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";

//import React, { Component } from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        this.props.changeHero(this.props.heroName)
    }

    render() {
        return (
            <main className="clearfix">
                <Hero heroName={this.props.heroName} />
                <DreamTeam heroName={this.props.heroName} />
                <FarGalaxy />
            </main>
        )
    }
}


export default Home;