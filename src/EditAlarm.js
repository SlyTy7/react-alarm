import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class EditAlarm extends Component {
  render() {
    return (
      <Button 
        variant="contained" 
        color="primary" 
        onClick={this.props.handleEditAlarm}
        children={this.props.editing ? "save" : "edit" } />
    );
  }
}

export default EditAlarm;
