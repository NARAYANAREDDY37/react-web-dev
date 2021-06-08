import React, { Component } from 'react';
import SinglePost from '../SinglePost/SinglePost';

export class Posts extends Component {
  state = {
    posts: [
      { title: 'Post 1', description: 'Post 1 description' },
      { title: 'Post 2', description: 'Post 2 description' },
    ],
    postTitle: 'Posts List',
  };

  updateTitleHandler(title, e){
    e.preventDefault();
    console.log('updating the title via method');
    console.log(this);
    this.setState({postTitle: title})
  }

  titleHandler = (title, e) => {
    e.preventDefault();
    console.log('updating the title via property function');
    console.log(this);
    this.setState({postTitle: title})
  }

  render() {
      // console.log('Modifying');
      // const posts = [...this.state.posts];

      // posts[0].title = 'Modified post-1';
      // posts[1].title = 'Modified post-2';

      // this.setState({ posts });
      // this.setState({ postTitle: 'Modified Posts List' });
    
    return (
      <div>
        <h1 className='text-2xl font-bold my-3'>{this.state.postTitle}</h1>
        <div>
          <a href='https://www.google.co.in/' onClick={this.titleHandler.bind(this, 'Title-1')} className='px-4 py-2 bg-green-400 rounded-3xl text-white'>
            Update with property
          </a>

          <a href='https://www.google.co.in/' onClick={this.updateTitleHandler.bind(this, 'Title-2')} className='px-4 py-2 bg-green-400 rounded-3xl text-white'>
            Update via method
          </a>
        </div>
        <hr />
        <div className='flex my-3'>
          <SinglePost
            title={this.state.posts[0].title}
            description={this.state.posts[0].description}
          />
          <SinglePost
            title={this.state.posts[1].title}
            description={this.state.posts[0].description}
          />
        </div>
      </div>
    );
  }
}

export default Posts;
