import React from 'react';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      query: ''
    };
  }

  handleChanges = event => {
    this.setState({
      query: event.target.value
    });
    this.props.searchItem(this.state.query);
    
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="item"
          id="item"
          placeholder='search an item'
          value={this.state.query}
          onChange={this.handleChanges}
          autoComplete="off"
          className='search'
        />
      </form>
    );
  }
}

export default SearchForm;