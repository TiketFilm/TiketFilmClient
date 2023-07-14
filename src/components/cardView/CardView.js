import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const GradientCard = styled(Card)`
  background: linear-gradient(to bottom right, #614b00, #d4af37);
`;

const CardView = ({singleMovie}) => {

    if(!singleMovie) return (<div>Loading...</div>)

  return (
    <div>
        <GradientCard sx={{ maxWidth: 345 , height: 475}}>
        <CardMedia
            sx={{ height: 400 , objectFit: 'cover'}}
            image={singleMovie.poster_url}
            title={singleMovie.title}
        />
        <CardContent sx={{justifyContent:'flex-end'}}>
            <Typography className='text-white font-weight-bold' style={{fontWeight:"bolder", fontSize:"18px"}} gutterBottom component="div">
                {singleMovie.title}
            </Typography>
        </CardContent>
        </GradientCard>
    </div>

  );
}

export default CardView
