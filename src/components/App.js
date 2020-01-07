import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    // console.log(term);
    axios.get("https://api.unsplash.com/search/photos", {
      params: {query: term},
      headers: {
        Authorization: 'Client-ID 3312454b615ea8801d4fb5f5d74a390541c0f758eeac1c4ee11aa5e6b84dafe5'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;

// 3312454b615ea8801d4fb5f5d74a390541c0f758eeac1c4ee11aa5e6b84dafe5

// 9b2403b9680c66171111c5f4cc539a4ffb7db36ffc33bd695ab658665b1aadd9
