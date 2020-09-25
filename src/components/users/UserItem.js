import React, { Component } from "react";

export class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className="card text-center">
        <img
          alt="user icon"
          className="round-img"
          style={{ width: "60px" }}
          src={avatar_url}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;