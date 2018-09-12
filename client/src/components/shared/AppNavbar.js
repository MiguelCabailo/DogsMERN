import React from 'react';

/*
    NavLink: an <a> tag that applies the :active classs
    withRouter: HOC that tells react that this component needs to use the client router
*/
import { NavLink, withRouter } from 'react-router-dom';


const NavBar = (props) =>{
    
    return (
        <nav>
            <div className="container">
                <a href="">Exercise App</a>
                <ul>
                    {/*NavLink : <a w/ active class> */}
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <hr/>
            </div>
        </nav>
    )
}

export default withRouter(NavBar)