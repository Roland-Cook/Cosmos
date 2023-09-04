import "./Style.css"

import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom'


function NavBar() {
  return (
   <>
           <nav id="menu" className='space'>
            <div class="menu-item">
                <div class="menu-text">
                    <h4>Planets</h4>
                </div>
                <div class="sub-menu">
                    <div class="icon-box">
                        <div class="icon"><i class="fal fa-wind-turbine"></i></div>
                        <div class="text">
                            <div class="title">  <NavLink className="nav-link" to="/createplanet">Create Planet <i class="far fa-arrow-right"></i> </NavLink></div>
                        </div>
                    </div>
                    <div class="icon-box">
                        <div class="icon"><i class="fal fa-lightbulb-on"></i></div>
                        <div class="text">
                        <div class="title">  <NavLink className="nav-link" to="/editplanet">Edit Planet <i class="far fa-arrow-right"></i> </NavLink></div>
                        </div>
                    </div>
                    <div class="icon-box">
                        <div class="icon"><i class="fal fa-bomb"></i></div>
                        <div class="text">
                        <div class="title"> <NavLink className="nav-link" to="/planetList">View All Planets <i class="far fa-arrow-right"></i> </NavLink></div>
                        </div>
                    </div>
                    <div class="sub-menu-holder"></div>
                </div>
            </div>

            <div class="menu-item">
                <div class="menu-text">
                    <h4>Systems</h4>
                </div>
                <div class="sub-menu">
                    <div class="icon-box">
                        <div class="icon"><i class="fal fa-wind-turbine"></i></div>
                        <div class="text">
                            <div class="title">  <NavLink className="nav-link" to="/createsystem">Create System <i class="far fa-arrow-right"></i> </NavLink></div>
                        </div>
                    </div>
                    <div class="icon-box">
                        <div class="icon"><i class="fal fa-lightbulb-on"></i></div>
                        <div class="text">
                        <div class="title">  <NavLink className="nav-link" to="/editsystem">Edit System <i class="far fa-arrow-right"></i> </NavLink></div>
                        </div>
                    </div>
                    <div class="icon-box">
                        <div class="icon"><i class="fal fa-bomb"></i></div>
                        <div class="text">
                        <div class="title">  <NavLink className="nav-link" to="/systemlist">View ALl Systems <i class="far fa-arrow-right"></i> </NavLink></div>
                        </div>
                    </div>
                    <div class="sub-menu-holder"></div>
                </div>
            </div>

            <div class="menu-item">
                <div class="menu-text">
                    <h4>Search Planets</h4>
                </div>
                <div class="sub-menu">
                    <div class="icon-box">
                        <div class="icon"><i class="fal fa-wind-turbine"></i></div>
                        <div class="text">
                            <div class="title">  <NavLink className="nav-link" to="/planetSearch">Your Planets <i class="far fa-arrow-right"></i> </NavLink></div>
                        </div>
                    </div>
                    <div class="icon-box">
                        <div class="icon"><i class="fal fa-lightbulb-on"></i></div>
                        <div class="text">
                        <div class="title">  <NavLink className="nav-link" to="/ninjaSearch">Ninja Planet Search <i class="far fa-arrow-right"></i> </NavLink></div>
                        </div>
                    </div>
                    <div class="sub-menu-holder"></div>
                </div>
            </div>
        
            <div id="sub-menu-container">
                <div id="sub-menu-holder">
                    <div id="sub-menu-bottom">
                    </div>
                </div>
            </div>
        </nav>


      
   </>
  );
}

export default NavBar;
