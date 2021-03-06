import React from "react"
import {Link} from 'react-router-dom'
import './nav.css'
const Navbar = () => {
    return (
<>
        <nav className="navbar navbar-expand-lg bg-dark " >
            <div className="container-fluid">
                <Link className="navbar-brand shadow lg" to="#"><span style={{backgroundColor:"white",color:"black",fontFamily:"Lucida"}}><b>&nbsp;SAMAGRA&nbsp;</b></span></Link>
                <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><b>=</b></span>
                </button> 
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">SERVICES</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/seva" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              SEVA SINDHU
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/seva">SEVA SINDHU</Link></li>
                                <li><Link className="dropdown-item" to="/revenue">Another action</Link></li>

                                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/event" tabIndex="-1" aria-disabled="false">EVENTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">ABOUT US</Link>
                        </li> 
                        <li className="nav-item">
                        <div id="google_translate_element"></div>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
      
</>
    )
}
export default Navbar;