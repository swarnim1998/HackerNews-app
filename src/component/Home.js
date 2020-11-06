import React, { Component } from "react";
import Stories from "./Stories";
import Axios from "axios";
import SearchAndFilter from "./SearchAndFilter";
import Pagination from "./Pagination";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      stories: [],
      searchedStories: [],
      currentPage: 1,
      perPage: 30,
    };
  }

  search = (event) => {
    const tempData = this.state.stories.filter((elem) => {
      return elem.title.includes(event);
    });
    this.setState({ ...this.state, searchedStories: tempData });
  };

  paginate = (page) => {
    this.setState({ ...this.state, currentPage: page });
    const indexOfLastNews = page * 30;
    const indexOfFirstNews = indexOfLastNews - 30;
    const tempData = this.state.data.slice(indexOfFirstNews, indexOfLastNews);
    this.getStories(tempData);
  };

  callApi() {
    Axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    ).then((res) => {
      this.setState(
        {
          data: res.data,
        },
        () => {
          this.getStories(this.state.data.slice(0, 30));
        }
      );
    });
  }

  getStories(data) {
    const arr = data.map((elem) => {
      return Axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${elem}.json?print=pretty`
      ).then((res1) => res1.data);
    });
    Promise.all(arr).then((res) => {
      console.log(res);
      this.setState({
        stories: res,
        searchedStories: res,
      });
    });
  }

  componentDidMount() {
    this.callApi();
  }

  // componentDidUpdate(prevState, prevProps) {
  //   console.log(prevState, prevProps);
  //   if (
  //     prevState.currentPage !== prevProps.currentPage &&
  //     prevState.currentPage !== undefined
  //   ) {
  //     console.log(prevState.currentPage);

  //   }
  // }

  render() {
    return (
      <div>
        <SearchAndFilter search={this.search} />
        {this.state.searchedStories.map((item, index) => (
          <Stories data={item} key={index} index={index} />
        ))}
        <Pagination
          perPage={this.state.perPage}
          totalLength={this.state.data.length}
          paginate={this.paginate}
        />
      </div>
    );
  }
}

export default Home;
