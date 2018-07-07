import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';

class Days extends Component {

  constructor(props){
    super(props);

    this.state = {
      index: 1,
    }
  }

  tester = () => {
    console.log('Hello World! #' + this.state.index);
    let newIndex  = this.state.index + 1;
    this.setState({
      index: newIndex,
    })
  }

  render() {
    return (
      <Grid container spacing={8} justify="center" style={{ marginTop: "-30px" }}>

        <Grid item>
          <Button variant="fab" aria-label="add" color="secondary" onClick={this.tester} >
            <AddIcon />
          </Button>
        </Grid>

      </Grid>
    );
  }
}

export default Days;
