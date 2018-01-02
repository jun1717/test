import React, { PropTypes, Component } from 'react';

import AppBar from 'material-ui/AppBar';

class Header extends Component {
  render() {
    return (
      <header className="header">
          <AppBar title="List"/>
      </header>
    );
  }
}

Header.propTypes = {
  // addTodo: PropTypes.func.isRequired
};

export default Header;
