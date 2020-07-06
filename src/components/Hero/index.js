import React, { Component } from 'react';
import './style.css';
import Card from '../UI/Card';
import Logo from '../Logo';
import Navbar from '../Navbar';

class Hero extends Component {
    render() {
        return (
            <div>
                <Card>
                    <div style={{ padding: '50px 0px' }}>
                        <Logo />
                    </div>
                    <Navbar />
                </Card>
            </div>
        );
    }
}

export default Hero;