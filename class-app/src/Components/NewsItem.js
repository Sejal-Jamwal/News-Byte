import React, { Component } from 'react'

const NewsItem=(props)=>{
     
    let {title, description, imageUrl, newsUrl, author, theTime} = props;

    return (
       
      <>
        <div className="card">
  <img src={!imageUrl ?"https://images.moneycontrol.com/static-mcnews/2023/12/sensex_nifty_stock-stocks_stock-770x433.jpg":imageUrl } className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
    <p class="card-text"><small class="text-body-secondary">By {!author ? "Unknown": author} at { new Date(theTime).toGMTString()}</small></p>
  </div>
</div>
      </>
    )
  
}

export default NewsItem



