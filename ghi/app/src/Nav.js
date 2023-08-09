import { Fragment } from 'react'
import "./Style.css"

import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
   <>
           <nav id="menu" className='space'>
            <div class="menu-item">
                <div class="menu-text">
                    <a href="#">Planets</a>
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
                    <a href="#">Systems</a>
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
                            <div class="title">Edit Planet <i class="far fa-arrow-right"></i></div>
                        </div>
                    </div>
                    <div class="icon-box">
                        <div class="icon"><i class="fal fa-bomb"></i></div>
                        <div class="text">
                            <div class="title"> View All Planets <i class="far fa-arrow-right"></i></div>
                        </div>
                    </div>
                    <div class="sub-menu-holder"></div>
                </div>
            </div>


            <div class="menu-item">
                <div class="menu-text">
                    <a href="#">Search planets</a>
                </div>
            </div>

            <div id="sub-menu-container">
                <div id="sub-menu-holder">
                    <div id="sub-menu-bottom">

                    </div>
                </div>
            </div>
        </nav>


        <div id="info-box">
            <ul>
                <li><a target="_top" href="https://twitter.com/thisisfjolt">Follow on Twitter</a></li>
                <li><a target="_top" href="https://fjolt.com/article/css-only-stripe-menu-with-clip">Read Article</a></li>
                <li><a target="_top" href="https://github.com/smpnjn/stripe-like-menu">GitHub Repo</a></li>
            </ul>
        </div>
   </>
  );
}

export default NavBar;
