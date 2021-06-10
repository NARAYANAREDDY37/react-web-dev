import React, { Component } from "react";
import WithCategory from "./WithCategory";

export class Category extends Component {
  render() {
    return (
      <div>
        <div>Category component - name: {this.props.name}</div>
        {this.props.categories.map((category) => {
          return <div>{category}</div>
        })}
      </div>
    );
  }
}

export default WithCategory(Category);
