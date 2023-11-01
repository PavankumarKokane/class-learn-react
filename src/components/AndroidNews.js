import React, { Component } from "react";
import NewItem from "./NewItem";
import LoadingBar from 'react-top-loading-bar';

export default class AndroidNews extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loadingProgress: 0
    };
  }

  async componentDidMount() {
    this.loadingBar.continuousStart(5,5);
    let url =
      `https://newsapi.org/v2/everything?q=android&apiKey=8dee27e421e249e3a3e6678f7681c4a8&pageSize=12&page=${this.state.page}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults });
      this.loadingBar.complete();
  }
  
  handlerNextClick = () => {
    this.getData(this.state.page+1);
  }

  handlerPrevClick = () => {  
    this.getData(this.state.page-1);
  }

  getData = async (nopage) => {
      this.loadingBar.continuousStart(5,5);
      let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=8dee27e421e249e3a3e6678f7681c4a8&pageSize=12&page=${nopage}`;
      let data = await fetch(url);
      let parsedata = await data.json();
      this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults,page: nopage });
      console.log("Get Data For Page" + this.state.page + " totalResults" + this.state.totalResults);
      this.loadingBar.complete();
  }

  render() {
    return (
      <>
      <LoadingBar
        height={3}
        color="#f00"
        ref={(ref) => (this.loadingBar = ref)}
      />
      <div className="mt-5">
        <div className="container">
          <div className="new-item-list">
            {this.state.articles.map((article, i) => (
              <div className="news-item" key={i}>
                <NewItem
                  title={article.title}
                  description={article.description}
                  url={article.url}
                  img_url={article.urlToImage}
                />
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between mt-5">
            <button disabled={this.state.page <=1} className="btn btn-primary" onClick={this.handlerPrevClick}>&larr; Prev</button>
            <button disabled={Math.ceil(this.state.totalResults)/12 <= this.state.page} className="btn btn-primary" onClick={this.handlerNextClick}>Next &rarr;</button>
          </div>
        </div>
      </div>
      </>
    );
  }
}
