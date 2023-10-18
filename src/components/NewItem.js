import React, { Component } from 'react'

export default class NewItem extends Component {
  render() {
    let { title, description, url, img_url } = this.props;
    return (
        <div className="card">
            <img loading='lazy' height={225} width={375} src={img_url} className="card-img-top" alt={title} />
            <div className="card-body">
            <h5 className="card-title">{title.substring(0, 50)}...</h5>
            <p className="card-text">{description.substring(0, 150)}...</p>
            <a href={url} className="btn btn-primary">View More</a>
            </div>
        </div>
    )
  }
}
