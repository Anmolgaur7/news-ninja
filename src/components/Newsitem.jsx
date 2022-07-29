import React, { Component } from 'react'

export default class newsitem extends Component {
  render() {
    let {title,description,imageurl,url,author,date}=this.props;
    return (
    <>
    <div className='bg-slate-200 w-60 h-auto mt-2 '>
    <img src={ !imageurl?"https://images.moneycontrol.com/static-mcnews/2022/07/stocks_sensex_nifty_stockmarket1-770x433.jpg":imageurl} alt="some error occured"/>
    <h1 className='font-bold mb-2 text-center'>{title}</h1>
    <p className='text-center p-2'>{description}</p>
    <p className='font-sans text-center m-2 text-gray-500 '>By {author?author:"Newsninja"} at {new Date(date).toUTCString()}</p>
    <div className='flex justify-center items-center'>
    <button className='border-none rounded-sm bg-orange-600 text-white p-3 m-1'><a href={url} target='_blank'  rel="noreferrer">Read more</a></button>
    </div>
    </div>
    </>
    )
  }
}
