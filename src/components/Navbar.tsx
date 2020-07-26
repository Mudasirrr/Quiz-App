import React from 'react'

export default function Navbarr() {
    return (
        
	    <div className="navbar navbar-default" style={{background:'black',color:"purple",position:'fixed',zIndex:1,width:"100%",padding:"10px"}}>
        <div className="container">
            <div className="navbar-header">
                 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapibleMenu">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                <a href="/" className="navbar-brand">Online Quiz Site</a>
            </div>
            <div className="collapse navbar-collapse" id="collapibleMenu">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
             
            </div>
        </div>
    </div>
  );
}
