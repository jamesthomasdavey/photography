import React from 'react';

import Gallery from './components/Gallery/Gallery';
import MenuTrigger from './components/Controls/components/MenuTrigger/MenuTrigger';

class Page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Gallery />
        <MenuTrigger
          page={this.props.page}
          galleries={this.props.galleries}
          openDialog={this.props.openDialog}
        />
      </React.Fragment>
    );
  }
}

export default Page;
