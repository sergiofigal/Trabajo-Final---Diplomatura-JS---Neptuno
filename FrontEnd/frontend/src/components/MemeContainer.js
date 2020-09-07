import React from "react";
import Meme from "./Meme";
import { getMemesByPopular } from "../services/memes";
import Title from "./Title";
import Search from "./Search";

class MemeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      memes: [],
      isFetch: true,
    };
  }

  async componentDidMount() {
    const responseJson = await getMemesByPopular();
    this.setState({ memes: responseJson.data.memes, isFetch: false });
  }

  handleSearch = (search) => {
    console.log(search);
  };

  render() {
    const { isFetch, memes } = this.state;

    if (this.state.isFetch) {
      return "Loading...";
    }
    return (
      <React.Fragment>
        <Title>Meme app</Title>
        <Search handleSearch={this.handleSearch} />
        <section className="memes-container">
          {memes.map((meme) => (
            <Meme {...meme} key={meme.id} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}

export default MemeContainer;
