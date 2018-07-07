import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Days extends Component {

  render() {
    return (
      <Grid container spacing={16} justify="center" >
        {
          this.props.days.map((item, index) => {
            let key = ("day" + index);
            let d = new Date();
            let today = d.getDay();

            return (
              <Grid item key={key}>
                <Typography variant="button" children={item} color={ (index === today) ? "primary" : "inherit" } />
              </Grid>
            );
          })
        }
      </Grid>
    );
  }
}

export default Days;
