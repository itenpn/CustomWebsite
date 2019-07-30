import React from 'react';
import './App.css';
import facepic from './face.png';
import reactlogo from './logo.svg';
import pythonlogo from './pythonlogo.png';
import javalogo from './javalogo.dms';
import jslogo from './jslogo.png';
import haskelllogo from './haskelllogo.png';
import rustlogo from './rustlogo.png';
import cpplogo from './cpplogo.png';
import dotnetlogo from './dotnetlogo.dms';

let linkgit = "https://github.com/itenpn";
let linkin = "https://www.linkedin.com/in/paul-nicholas-iten-332967168/";
let linkemail = "mailto:iten.pn@gmail.com";

function App() {
  return (
    <div className="App">
	<div className="intro">
	  <h1>Nicholas Iten</h1>
	  <h3>Student Developer</h3>
	  <img className="face" src={facepic} />
	  <p>Welcome to my homepage. I am a student at the Ohio State
	  University studing Computer Science.</p>
	</div>
	<div className="links">
	  <h3>Contact Information</h3>
	  <a className="button" href={linkin} target="_blank">
	    <i class="fab fa-linkedin-in"></i></a>
	  <a className="button" href={linkgit} target="_blank">
	    <i class="fab fa-github"></i></a>
          <a className="button" href={linkemail} target="_blank">
	    <i class="far fa-envelope"></i></a>
	</div>
	<div className="tech">
	  <h3>My Tech Skillset</h3>
	  <img alt="Java" className="logo" src={javalogo}/>
	  <img alt="C++" className="logo" src={cpplogo}/>
	  <img alt="Python" className="logo" src={pythonlogo}/>
	  <img alt="JavaScript" className="logo" src={jslogo}/>
	  <img alt="React.js" className="logo" src={reactlogo}/>
	  <img alt="Haskell" className="logo" src={haskelllogo}/>
	  <img alt="Rust" className="logo" src={rustlogo}/>
	  <img alt=".NET" className="logo" src={dotnetlogo}/>
	</div>
    </div>
  );
}

export default App;
