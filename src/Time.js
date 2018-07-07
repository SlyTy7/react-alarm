import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Time extends Component {

  render() {
    return (
      <React.Fragment>
        <Typography
          variant={this.props.variant} 
          color="primary" 
          style={{ position: 'absolute', fontFamily: 'digital-7', zIndex: '100' }}
          children={this.props.time} />

        <Typography
          variant={this.props.variant} 
          color="inherit"
          style={{ fontFamily: 'digital-7' }} 
          children="88:88:88" />
      </React.Fragment>
    );
  }
}

export default Time;
