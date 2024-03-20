import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
// import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  
  constructor(){
    super()
    this.state={
      articles:[],
      loading: false,
      page: 1,
      totalResults: 0
    }
  }

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f2bcc6d7c834b7eaa5eb90c842b0713&page=${this.state.page}`;
    const response = await fetch(url)
    let parsedData = await response.json()
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults
    })
  }

   /*handleNextClick=async()=>{
     
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}apiKey=4f2bcc6d7c834b7eaa5eb90c842b0713&page=${this.state.page+1}`
    const response = await fetch(url)
    let parsedData = await response.json()

    this.setState({
      articles: parsedData.articles,
      page: this.state.page+1,
      totalResults:parsedData.totalResults
    })

  }

  handlePrevClick=async()=>{
     
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}apiKey=4f2bcc6d7c834b7eaa5eb90c842b0713&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    const response = await fetch(url)
    let parsedData = await response.json()

    this.setState({
      articles: parsedData.articles,
      page: this.state.page-1,
      totalResults:parsedData.totalResults
    })

  }*/

  fetchMoreData = async() => {

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4f2bcc6d7c834b7eaa5eb90c842b0713&page=${this.state.page+1}`;
    const response = await fetch(url)
    let parsedData = await response.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page+1
    })
     
  };


  render() {
    return (
      <div className="container my-4" >

         <h1 className="text-center">Top Headlines</h1>

         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<h4>Loading...</h4>}
        >
         
         <div className="container">
          
         <div className="row my-4">

          {this.state.articles.map((element)=>{
            
          return <div className="col-md-3" key={element.url}>
          <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} theTime={element.publishedAt}/>
          </div>

          })}
           
         </div>

         </div>

         </InfiniteScroll>
           
      </div>
    )
  }
}

export default News

News.defaultProps = {
  pageSize: 8,
  country :"in",
  category:"general"
}

News.propTypes = {
    pageSize : PropTypes.number,
    country : PropTypes.string,
    category: PropTypes.string,
}




