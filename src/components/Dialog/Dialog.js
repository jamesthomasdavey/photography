import React from 'react';

import Navigation from './components/Navigation/Navigation';
import CloseButton from './components/CloseButton/CloseButton';

class Dialog extends React.Component {
  state = {
    isOpening: false,
    isClosing: false
  };
  componentDidMount() {
    document.querySelector("[role='dialog'] a").focus();
  }
  componentWillUnmount() {
    document.querySelector("[aria-label='Open Main Dialog']").focus();
  }
  render() {
    let currentUrl;
    if (this.props.page.gallery.isOpen) {
      currentUrl = this.props.galleries[this.props.page.gallery.currentIndex]
        .url;
    }
    return (
      <div role='dialog' aria-label='Main' aria-modal='true'>
        <Navigation
          galleries={this.props.galleries}
          page={this.props.page}
          openGallery={this.props.openGallery}
          closeDialog={this.props.close}
        />
        <CloseButton currentUrl={currentUrl} closeDialog={this.props.close} />
      </div>
    );
  }
}

export default Dialog;
