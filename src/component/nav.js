import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Nav extends Component {
    render() {
        return (
            <div>
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link to = "/home" class = "nav-link">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link to = "/login" class = "nav-link">Employ</Link>
                        </li>
                    </ul> 
                </div>       
             </nav>
                
            </div>
        )
    }
}
