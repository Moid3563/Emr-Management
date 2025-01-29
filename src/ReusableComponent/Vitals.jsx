import React from 'react';
import { Card, CardContent, Typography, TextField, Grid } from '@mui/material';
import "../Style/_vitals.scss";

const Vitals = () => {
  return (
    <Card className="vitals-form">
    <CardContent>
      <Typography variant="h6" className="vitals-form__header">
        Vitals
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <div className="vitals-form__field">
            <Typography variant="subtitle2" className='typo'>Body Temperature</Typography>
            <TextField
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: <span className="unit">°F</span>,
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="vitals-form__field">
            <Typography variant="subtitle2" className='typo'>Body Height</Typography>
            <TextField
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: <span className="unit">cm</span>,
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="vitals-form__field">
            <Typography variant="subtitle2" className='typo'>Body Mass Index</Typography>
            <TextField
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: <span className="unit">kg/m²</span>,
              }}
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <div className="vitals-form__field">
            <Typography variant="subtitle2" className='typo'>Body Weight</Typography>
            <TextField
              variant="outlined"
              size="small"
              InputProps={{
                endAdornment: <span className="unit">kgs</span>,
              }}
            />
          </div>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
  );
};

export default Vitals;