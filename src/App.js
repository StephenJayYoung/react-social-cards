import React from 'react';
import logo from './logo.svg';
import './App.css';

function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
      <div className="Comment-add">
        {props.commentAdd}
      </div>      

    </div>
  );
}

const comment = {
  date: 'June 29, 2020',
  text: 'This is the text underneath of the card',
  author: {
    name: 'Stephen Young',
    avatarURL: 'https://images.unsplash.com/photo-1593500504165-5378f38d9981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  commentAdd: '+'
}

function App() {
  return (
    <Comment  
      date = {comment.date}
      text = {comment.text}
      author = {comment.author}
      commentAdd = {comment.commentAdd}
    />
  );
}

export default App;
