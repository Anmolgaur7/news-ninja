import React, { Component } from 'react'
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
export default class news extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general'
  }
  static propTypes={
    country:PropTypes.string,
    category:PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=038fd8ecfd414d5dbbb289eb0b294a06 &page=1 &pagesize=10`
    this.setState({ loading: true })
    let data = await fetch(url)
    let pdata = await data.json()
    this.setState({
      articles: pdata.articles,
      totalresults: pdata.totalresults,
      loading: false
    })
  }
  ppage = async () => {
    if (this.state.page === 1) {

    }
    else {
      console.log("p");
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country} &category=${this.props.category}&apiKey=038fd8ecfd414d5dbbb289eb0b294a06 &page=${this.state.page - 1} &pagesize=10`
      this.setState({ loading: true })
      let data = await fetch(url)
      let pdata = await data.json()
      this.setState({ articles: pdata.articles, loading: false })
      this.setState({
        page: this.state.page - 1
      })
    }
  }
  npage = async () => {
    if (this.state.page + 1 >= Math.ceil(this.state.totalresults / 20)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=IN&category=business&apiKey=038fd8ecfd414d5dbbb289eb0b294a06 &page=${this.state.page + 1} &pagesize=10`
      this.setState({ loading: true })
      let data = await fetch(url)
      let pdata = await data.json()
      this.setState({ articles: pdata.articles, loading: false })
      this.setState({
        page: this.state.page + 1
      })
    }
  }
  render() {
    return (
      <>
        <div>
          <div className='flex justify-center items-center'>
            {this.state.loading && <Spinner />}
          </div>
          <h1 className='text-center font-mono font-Bold -400 text-4xl animate-pulse text-black ' >Newsninja = Top headlines</h1>
          <div className='flex flex-wrap justify-center justify-evenly mt-7'>
            {!this.state.loading && this.state.articles.map((e) => {
              return <Newsitem url={e.url} title={e.url ? e.title : ""} description={e.description ? e.description : ""} imageurl={e.urlToImage} />
            })}
          </div>
          <div className='m-4 flex justify-between'>
            <button className='border-none rounded-lg text-xl bg-orange-600 text-white p-1 ' onClick={this.ppage}>Previous</button>
            <button className='border-none rounded-lg text-xl bg-orange-600 text-white p-1' onClick={this.npage}>Next</button>
          </div>
        </div>
      </>
    )
  }
}
