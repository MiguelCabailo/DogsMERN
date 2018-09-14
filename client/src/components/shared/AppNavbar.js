import React, { Component } from 'react';

/*
    NavLink: an <a> tag that applies the :active classNames
    withRouter: HOC that tells react that this component needs to use the client router
*/
import { NavLink, withRouter } from 'react-router-dom';

import { Navbar, Icon } from 'react-materialize';


class NavBar extends Component {
    render() {

        let brand = <span>Dog Info<Icon>pets</Icon></span>;

        return (
            <header>
                <Navbar brand={brand} href="javascript:void(0)" className=" deep-orange lighten-3">
                    <ul className="sidenav right">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </Navbar>
            </header>
        )
    }
}

export default withRouter(NavBar)