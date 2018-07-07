import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';

class AddAlarmButton extends Component {
  render() {
    return (
      <Grid container spacing={8} justify="center" style={{ marginTop: "-30px" }}>

        <Grid item>
          <Button variant="fab" aria-label="add" color="secondary" onClick={this.props.addNew} >
            <AddIcon />
          </Button>
        </Grid>

      </Grid>
    );
  }
}

export default AddAlarmButton;
