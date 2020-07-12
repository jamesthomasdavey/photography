import React from 'react';

import classes from './Navigation.module.css';

import MenuButton from './components/MenuButton/MenuButton';
import Menu from './components/Menu/Menu';

class Navigation extends React.Component {
  state = {
    isOpen: false,
    hasBeenOpened: false,
  };
  openMenu = () => {
    this.setState({ isOpen: true, hasBeenOpened: true });
  };
  closeMenu = () => {
    this.setState({ isOpen: false });
  };
  toggleMenu = () => {
    if (this.state.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };
  render() {
    return (
      <div
        className={[
          classes.wrapper,
          this.state.isOpen ? classes.open : '',
          this.state.hasBeenOpened && !this.state.isOpen ? classes.closed : '',
        ].join(' ')}
        role={this.state.isOpen ? 'dialog' : false}
        aria-modal={this.state.isOpen ? 'true' : false}
      >
        <MenuButton
          toggleMenu={this.toggleMenu}
          isOpen={this.state.isOpen}
          hasBeenOpened={this.state.hasBeenOpened}
        />
        <Menu
          toggleMenu={this.toggleMenu}
          closeMenu={this.closeMenu}
          isOpen={this.state.isOpen}
        />
      </div>
    );
  }
}

export default Navigation;
