import React from 'react';
import styles from '../css_modules/hero.module.css';
//import hero from "../Images/main.jpg";
import { characters } from "../utils/Constants";

const Hero = props => {
    return (
        <div>
            {(props.heroName) &&
                <section className="float-left w-25 mr-2 row">
                    <img className={`${styles.hero} col`} src={characters[props.heroName].img} alt='' />
                </section>
            }
        </div>
    );
};

export default Hero;