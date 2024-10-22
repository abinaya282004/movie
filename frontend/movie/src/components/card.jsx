import * as React from 'react';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link as RouterLink } from 'react-router-dom'; 


const MovieCard = ({ movie }) => {
  return (
    <>
      <Card className="card mt-5 mb-5"  style={{height:'80%'}} sx={{ width: 280}}>
        {/* <CardOverflow> */}
          <img src={movie.image} alt={movie.title} />
        {/* </CardOverflow> */}
        <CardContent>

        {/* <Typography level="body-xs">Director: {movie.director}</Typography>           */}
         <Link  color="neutral" textColor="text.primary" endDecorator={<ArrowOutwardIcon />} sx={{ fontWeight: 'md' }} >
        {movie.name}
        </Link> 
          <Typography level="body-sm">Release: {movie.releasedate}</Typography>
          <Typography level="title-lg"  sx={{ mt: 1 }} endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success"></Chip>}>Ticket Price: {movie.ticketprice} USD
          </Typography>
        </CardContent>
        <CardOverflow>
          <Button variant="solid" color="danger" size="lg">
            <Link component={RouterLink} to={`/movies/${movie._id}`} color="white" textColor="text.white" overlay  sx={{ fontWeight: 'md' }} style={{textDecoration:'none'}} >
            View More
          </Link>
            
          </Button>
        </CardOverflow>
      </Card>
    </>
  );
};

export default MovieCard;



