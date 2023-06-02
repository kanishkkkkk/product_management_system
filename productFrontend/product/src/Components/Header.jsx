import React, { Component } from 'react';
import createHistory from 'history'
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props)
        this.state={

        }

    }

    render() {
        return (
            <div>
                <nav className='navbar '>
                    <button className='btn'>
                        <Link to='/product'>View </Link>
                    </button>
                    <button className='btn'>
                        <Link to='/add'>Add </Link>
                    </button>
                </nav>
            </div>
        );
    }
}

export default Header;