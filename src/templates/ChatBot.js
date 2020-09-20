import React from "react";
import defaultDataset from "../dataset";
import { AnswersList, Chats } from "../components/chat_bots/index";

export default class ChatBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false,
    };
  }

  componentDidMount() {
    this.initChats();
    this.initAnswer();
  }

  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;
    this.setState({
      answers: initAnswers,
    });
  };

  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const chat = {
      text: initDataset.question,
      type: "question",
    };
    const chats = this.state.chats;
    chats.push(chat);
    this.setState({
      chats: chats,
    });
  };

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}
