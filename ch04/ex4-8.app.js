// 예제 4.8  App 컴포넌트의 기본 코드(src/app.js)

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import parseLinkHeader from 'parse-link-header';
import orderBy from 'lodash/orderBy';

import ErrorMessage from './components/error/Error';
import Loader from './components/Loader';
import * as API from './shared/http';
import Ad from './components/ad/Ad';
import Navbar from './components/nav/navbar';
import Welcome from './components/welcome/Welcome';

class App extends Component {
  constructor(props) {
    super(porps);
    this.state = {
      error: null,
      loading: false,
      posts: [],
      endpoint: '${process.env.ENDPOINT}/posts?_page=1&_sort=date&_order=DESC& embed=comments&_expand=user&_embed=links'
    };
  }
  static porpTypes = {
    children: PropTypes.node
  };
  render() {
    return (
      <div className="app">
        <Navbar />
	{this.state.loading ? (
	  <div className="loading">
	    <Loader />
	  </div>
	) : (
	  <div className="home">
	    <Welcome />
	  </div>
	    <button className="block">
	      Load more posts
	    </button>
	  </div>
	  <div>
	    <Ad
  	      url="https://ifelse.io/book"
	      imageUrl="/static/assets/ads/ria.png"
	    />
	    <Ad
	      url="https://ifelse.io/book"
	      imageUrl="/static/assets/ads/orly.png"
	    />
	  </div>
	)}
      </div>
    );
  }
}
export default App;
