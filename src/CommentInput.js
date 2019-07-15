import React, { Component } from 'react';

class CommentInput extends Component {
  constructor() {
    super();
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }
  state = {
    username: '',
    content: '',
  }

  // 改变用户名
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              value={this.state.content}
              onChange={this.handleContentChange}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button>
            发布
          </button>
        </div>
      </div>
    );
  }
}

export default CommentInput;