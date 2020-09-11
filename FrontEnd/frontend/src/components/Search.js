import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
  }

  handelChange = (e) => this.setState({ search: e.target.value });

  render() {
    const { handleSearch } = this.props;
    const { search } = this.state;

    return (
      <div className="search-container">
        <input
          value={search}
          className="search-input"
          type="text"
          onChange={this.handelChange}
        />
        <button className="search-btn" onClick={() => handleSearch(search)}>
          Search
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
