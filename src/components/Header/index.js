import React, { Component } from 'react';
import './style.css';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="headerMenu">
                    <a href="#">Home</a>
                    <a href="#">AboutUs</a>
                    <a href="#">ContactUs</a>
                </nav>
                <div>
                    social media links
                </div>
            </header>
        );
    }
}

export default Header;