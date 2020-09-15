import React, { Component } from "react";
import axios from "axios";

import TodoList from "../components/todos/TodoList";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      chat_messages: [],
    };
  }

  async fetchData() {
    const URL = `http://localhost:3000/api/chat_messages`;
    await axios
      .get(URL)
      .then((response) => {
        this.setState({
          chat_messages: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async addTodo() {
    const URL = `http://localhost:3000/api/chat_messages`;
    await axios({
      method: "POST",
      url: URL,
      data: { chat_room_id: 1, user_id: 1, content: "本文" },
    })
      .then((response) => {
        this.fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <h1>todoアプリを作ってみた</h1>
        <button onClick={this.addTodo}>作成</button>
        {this.state.chat_messages.map((chat_message) => (
          <TodoList
            key={chat_message.id}
            id={chat_message.id}
            content={chat_message.content}
          />
        ))}
      </div>
    );
  }
}

export default Todo;
