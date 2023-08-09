import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Info({ post }) {
  const { name, thumbnail, description } = post;

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>

          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <img alt={name} src={`${thumbnail.path}.${thumbnail.extension}`} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {description}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Paper>
  );
}
