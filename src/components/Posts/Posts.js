import React, { Component } from 'react';
import SinglePost from '../SinglePost/SinglePost';

export class Posts extends Component {
  state = {
    posts: [
      { id: 1, title: 'Post 1', description: 'Post 1 description' },
      { id: 2, title: 'Post 2', description: 'Post 2 description' },
      { id: 3, title: 'Post 3', description: 'Post 3 description' },
    ],
    postTitle: 'Posts List',
    showPosts: true,
  };

  tooglePostsHandler = () => {
    this.setState({
      showPosts: !this.state.showPosts,
    });
  };

  getPosts() {
    if (!this.state.showPosts) return null;

    // let posts = this.state.posts.map((post) => (
    //   <SinglePost key={post.id} title={post.title} description={post.description} />
    // ));

    let posts = [];

    for (let post of this.state.posts) {
      posts.push(
        <SinglePost
          key={post.id}
          title={post.title}
          description={post.description}
        />
      );
    }
    return <div className='flex my-3'>{posts}</div>;
  }

  // updateTitleHandler(title, e){
  //   e.preventDefault();
  //   console.log('updating the title via method');
  //   console.log(this);
  //   this.setState({postTitle: title})
  // }

  // titleHandler = (title, e) => {
  //   e.preventDefault();
  //   console.log('updating the title via property function');
  //   console.log(this);
  //   this.setState({postTitle: title})
  // }

  render() {
    // let posts = null;
    // if (this.state.showPosts) {
    //   posts = (
    //     <div className='flex my-3'>
    //       <SinglePost
    //         title={this.state.posts[0].title}
    //         description={this.state.posts[0].description}
    //       />
    //       <SinglePost
    //         title={this.state.posts[1].title}
    //         description={this.state.posts[0].description}
    //       />
    //     </div>
    //   );
    // }
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
          <button
            onClick={this.tooglePostsHandler}
            className='px-5 py-3 bg-blue-500 text-white'
          >
            {this.state.showPosts ? 'Hide Posts' : 'Show Posts'}
          </button>
        </div>
        {/* <div>
          <a href='https://www.google.co.in/' onClick={this.titleHandler.bind(this, 'Title-1')} className='px-4 py-2 bg-green-400 rounded-3xl text-white'>
            Update with property
          </a>

          <a href='https://www.google.co.in/' onClick={this.updateTitleHandler.bind(this, 'Title-2')} className='px-4 py-2 bg-green-400 rounded-3xl text-white'>
            Update via method
          </a>
        </div> */}
        <hr />
        {/* {posts} */}
        {this.getPosts()}
      </div>
    );
  }
}

export default Posts;
