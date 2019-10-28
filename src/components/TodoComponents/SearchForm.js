import React from 'react';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ''
    };
  }

  handleChanges = e => {
    this.setState({
      newItem: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.newItem);
    this.setState({ newItem: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          id="item"
          placeholder='add an item'
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default SearchForm;