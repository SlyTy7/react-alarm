import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class AlarmSwitch extends Component {
  render() {
    return (
      <Button variant="contained" color="secondary" onClick={this.props.alarmOn} children="Alarm" />
    );
  }
}

export default AlarmSwitch;
