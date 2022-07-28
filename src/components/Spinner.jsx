import React, { Component } from 'react'
import Loading from "./loading.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div>
       <img src={Loading} alt="loading"/>
      </div>
    )
  }
}
