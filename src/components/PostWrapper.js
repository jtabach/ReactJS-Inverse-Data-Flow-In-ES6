import React, { Component } from 'react';

import PostInput from './PostInput';
import PostList from './PostList';

export default class PostWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PostInput />
      <PostList />
    );
  }
}
