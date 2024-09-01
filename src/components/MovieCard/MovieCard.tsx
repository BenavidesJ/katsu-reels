import { Card } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { apiConfig } from '../../services/api';
import './movie-card-style.css';

interface IMovieCard {
  uri: string;
  image: string;
}

export const MovieCard = ({ uri, image }: IMovieCard) => {
  const backGroundImg = apiConfig.w500Image(image);

  return (
    <Link to={uri}>
      <Card
        className="movie-card"
        style={{ backgroundImage: `url(${backGroundImg})` }}
        size="sm"
      ></Card>
    </Link>
  );
};
