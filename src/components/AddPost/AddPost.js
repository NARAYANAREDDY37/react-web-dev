import React, { Component } from 'react';

//controlled component
export class AddPost extends Component {
  state = {
    title: '',
    description: '',
    status: 'active',
  };

  addPostHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  changeHandler = (title, e) => {
    this.setState({ [title]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2 className='text-2xl font-bold'>Add Post</h2>
        <form onSubmit={this.addPostHandler}>
          <div className='my-3'>
            <label>Title</label>
            <input
              type='text'
              value={this.state.title}
              onChange={this.changeHandler.bind(this, 'title')}
              className='px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none focus:border-red-600'
            />
          </div>
          <div className='my-3'>
            <label>Description</label>
            <textarea
              value={this.state.description}
              onChange={this.changeHandler.bind(this, 'description')}
              className='px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none focus:border-red-600'
            ></textarea>
          </div>
          <div className='my-3'>
            <label>Status</label>
            <select
              value={this.state.status}
              onChange={this.changeHandler.bind(this, 'status')}
              className='px-3 py-1 block w-1/4 border border-gray-600 focus:outline-none focus:border-red-600'
            >
              <option value='active'>Active</option>
              <option value='inactive'>InActive</option>
            </select>
          </div>
          <div className='my-3'>
            <button
              type='submit'
              className='px-5 py-2 bg-indigo-900 text-white'
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
