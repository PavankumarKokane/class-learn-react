import React, { useState, useEffect } from "react";
import NewItem from "./NewItem";
import LoadingBar from 'react-top-loading-bar';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const type = props.type ? props.type : "general";
  const newsApiKey = process.env.REACT_APP_NEWS_API;
  const [progress,setProgress] = useState(0);

  
  const updateNews = async () => {
    setProgress(progress + 20);
    let url = `https://newsapi.org/v2/everything?q=${type}&apiKey=${newsApiKey}&pageSize=12`;
    try {
      let data = await fetch(url);
      setProgress(progress + 30);
      let parsedata = await data.json();
      setProgress(progress + 70);
      setArticles(parsedata.articles);
      setTotalResults(parsedata.totalResults);
      console.log("News are loaded");
      setProgress(progress + 100);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    updateNews();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handlerNextClick = () => {
    getData(page + 1);
  };

  const handlerPrevClick = () => {
    getData(page - 1);
  };

  const getData = async (nopage) => {
    setProgress(progress + 20);
    let url = `https://newsapi.org/v2/everything?q=${type}&apiKey=${newsApiKey}&pageSize=12&page=${nopage}`;
    try {
      let data = await fetch(url);
      setProgress(progress + 30);
      let parsedata = await data.json();
      setProgress(progress + 70);
      setArticles(parsedata.articles);
      setTotalResults(parsedata.totalResults);
      setPage(nopage);
      console.log("Get Data For Page" + page + " totalResults" + totalResults);
      setProgress(progress + 100);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <>
    <LoadingBar
      color='#f11946'
      progress={progress}
      onLoaderFinished={() => setProgress(0)}
    />
      <div className="mt-5">
        <div className="container">
          <div className="new-item-list">
            {articles.map((article, i) => (
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
            <button
              disabled={page <= 1}
              className="btn btn-primary"
              onClick={handlerPrevClick}
            >
              &larr; Prev
            </button>
            <button
              disabled={Math.ceil(totalResults) / 12 <= page || page > 5}
              className="btn btn-primary"
              onClick={handlerNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default News;