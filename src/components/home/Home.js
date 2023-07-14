import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardView from '../cardView/CardView';

const Home = ({movies}) => {
  return (
    <div>
        <h1 className='m-4'>Movie List</h1>
        <Box sx={{ flexGrow: 1 }} className="w-75 m-auto">
            <Grid container spacing={3} >
                {movies.map((movie) => {
                    return (
                        <Grid item xs={3} >
                            <CardView singleMovie = {movie}></CardView>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    </div> 

  );
}

export default Home