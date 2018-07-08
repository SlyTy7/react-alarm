import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class AlarmSwitch extends Component {
  render() {
    return (
      <Button 
        variant="contained" 
        color="secondary" 
        disabled={ this.props.isEditing }
        onClick={ this.props.alarmBuzzing ? this.props.handleEndAlarm : this.props.handleSwitchAlarm } 
        children={ this.props.alarmBuzzing ? "stop" : "alarm" } />
    );
  }
}

export default AlarmSwitch;
