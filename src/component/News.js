import React, { Component } from "react";
import NewsIteam from "./NewsIteam";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("Hello world");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.props.setProgress(10);
   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=603ad4ccf44a4977b6cd92d2d04d80f9&page=1&pagesize=15`;
    //let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=20&apikey=90a71d5938704b0e9c287b6dcee87f7a&page=1&pagesize=15`;
    let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=20&apikey=bd5fb3316e989ec0ab86a4315f0122f4&page=1&pagesize=15`;
    //mo api
   
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  handlepreclick = async () => {
    this.props.setProgress(10);
    // let url=`https://newsapi.org/v2/everything?q=bitcoin&category=${this.props.category}&apiKey=603ad4ccf44a4977b6cd92d2d04d80f9&page=${this.state.page-1}&pagesize=15`;
     let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=20&apikey=bd5fb3316e989ec0ab86a4315f0122f4&page=1&pagesize=15`;
    //let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=603ad4ccf44a4977b6cd92d2d04d80f9&page=${this.state.page-1}&pagesize=15`;
    // let url = `https://gnews.io/api/v4/top-headlines?category=${
    //   this.props.category
    // }&lang=en&country=${
    //   this.props.country
    // }&max=10&apikey=90a71d5938704b0e9c287b6dcee87f7a&page=${
    //   this.state.page - 1
    // }&pagesize=15`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
    this.props.setProgress(100);
  };

  handlenextclick = async () => {
    this.props.setProgress(10);
    if (!(this.state.page + 1 > Math.ceil(this.statetotalResults / 15))) {
     //  let url=`https://newsapi.org/v2/everything?q=bitcoin&category=${this.props.category}&apiKey=603ad4ccf44a4977b6cd92d2d04d80f9&page=${this.state.page+1}&pagesize=15`;
      let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&country=${this.props.country}&max=20&apikey=bd5fb3316e989ec0ab86a4315f0122f4&page=1&pagesize=15`;
      // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=603ad4ccf44a4977b6cd92d2d04d80f9&page=${this.state.page+1}&pagesize=15`;
      // let url = `https://gnews.io/api/v4/top-headlines?category=${
      //   this.props.category
      // }&lang=en&country=${
      //   this.props.country
      // }&max=10&apikey=90a71d5938704b0e9c287b6dcee87f7a&page=${
      //   this.state.page + 1
      // }&pagesize=15`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
    this.props.setProgress(100);
  };

  render() {
    return (
      <div className="container my-3">
        <h1
          className="text-center"
          style={{ margin: "35px 0px", marginTop: "90px" }}
        >
          24*7 Top Headlines
        </h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsIteam
                    newUrl={element.url}
                    title={element.title ? element.title.slice(0, 80) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 77)
                        : ""
                    }
                    imageurl={element.image}
                    author={element.source.name}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlepreclick}
          >
            &larr;Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 15)
            }
            className="btn btn-dark"
            onClick={this.handlenextclick}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}
