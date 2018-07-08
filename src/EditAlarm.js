import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class EditAlarm extends Component {
  render() {
    return (
      <Button 
        variant="contained" 
        color="primary" 
        disabled={this.props.alarmBuzzing}
        onClick={this.props.handleEditAlarm}
        children={this.props.isEditing ? "save" : "edit" } />
    );
  }
}

export default EditAlarm;
