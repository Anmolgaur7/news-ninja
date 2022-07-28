import React, { Component } from 'react'
import logo from "../images/logo.png";
import { Link } from 'react-router-dom';
export default class navbar extends Component {
  render() {
    return (
      <>
      <div className='bg-red-500 flex font-sans items-centre '>
      <img className='w-24 h-24 ml-3' src={logo} alt="some error" />
      <ul className='text-white flex justify-center items-center m-auto flex-wrap'>
      <li className='m-3  text-2xl  hover:text-orange-200'><i><Link to="/">Home</Link></i></li>
      <li className='m-3  text-2xl  hover:text-orange-200'><i><Link to="/">About</Link></i></li>
      <li className='m-3  text-2xl  hover:text-orange-200'><i><Link to="/Business">Business</Link></i></li>
      <li className='m-3  text-2xl  hover:text-orange-200'><i><Link to="/Entertainment">Entertainment</Link></i></li>
      <li className='m-3  text-2xl  hover:text-orange-200'><i><Link to="/Health"> Health</Link></i></li>
      <li className='m-3  text-2xl  hover:text-orange-200'><i><Link to="/Science"> Science</Link></i></li>
      <li className='m-3  text-2xl  hover:text-orange-200'><i><Link to="/Sports"> Sports</Link></i></li>
      <li className='m-3  text-2xl  hover:text-orange-200'><i><Link to="/Technology">Technology</Link></i></li>
      </ul>
      </div>
      </>
    )
  }
}
