import React from 'react'
import {Link} from "react-router-dom";


const EditorNav = () => {
   
        return (  
            <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
  <Link className="navbar-brand" to="/editor/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/editor/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/editor/services">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
      </li>
    </ul>
    </div>
  </div>
</nav>
</>
        );
    }

 
export default EditorNav;