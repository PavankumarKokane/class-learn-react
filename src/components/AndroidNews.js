import React, { Component } from "react";
import NewItem from "./NewItem";

export default class AndroidNews extends Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=android&apiKey=8dee27e421e249e3a3e6678f7681c4a8&pageSize=12";
    let data = await fetch(url);
    let parsedata = await data.json();
    this.setState({ articles: parsedata.articles });
  }

  render() {
    return (
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
        </div>
      </div>
    );
  }
}
