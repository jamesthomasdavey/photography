import React from 'react';

import Dialog from './components/Dialog/Dialog';
import Page from './components/Page/Page';

const galleries = [
  { name: 'gallery 0!', url: 'gallery-0' },
  { name: 'gallery 1!', url: 'gallery-1' },
  { name: 'gallery 2!', url: 'gallery-2' },
  { name: 'gallery 3!', url: 'gallery-3' },
  { name: 'gallery 4!', url: 'gallery-4' }
];

class App extends React.Component {
  state = {
    dialog: {
      isOpen: false
    },
    page: {
      gallery: {
        isOpen: true,
        currentIndex: 2
      }
    }
  };
  closeDialog = () => {
    this.setState({ dialog: { isOpen: false } });
  };
  openDialog = () => {
    this.setState({ dialog: { isOpen: true } });
  };
  openGallery = galleryIndex => {
    this.setState({
      dialog: {
        isOpen: false
      },
      page: {
        gallery: {
          isOpen: true,
          currentIndex: galleryIndex
        }
      }
    });
  };
  render() {
    let dialog;
    if (this.state.dialog.isOpen) {
      dialog = (
        <Dialog
          page={this.state.page}
          galleries={galleries}
          close={this.closeDialog}
          openGallery={this.openGallery}
        />
      );
    }
    return (
      <React.Fragment>
        {dialog}
        <Page
          page={this.state.page}
          galleries={galleries}
          openDialog={this.openDialog}
        />
      </React.Fragment>
    );
  }
}

export default App;
