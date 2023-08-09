import { Container, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import TablePaginationDemo from '../components/table-navigation';
import { BlogPostCard } from '../sections/@dashboard/blog';
import apiMarvel from '../services/marvel/apiMarvel';

const DashboardAppPage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiMarvel.get('/characters')
      .then(response => {
        const characterArray = Object.values(response.data.data.results);

        const charactersWithDescription = characterArray.filter(character => character.description);
        setCharacters(charactersWithDescription);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard: Home </title>
      </Helmet>

      <Container>
        {isLoading ? (
          <Typography variant="h5">Carregando...</Typography>
        ) : (
          <Grid container spacing={3}>
            {characters.map((item, index) => (
              <BlogPostCard key={item.id} post={item} index={index} />
            ))}
            <TablePaginationDemo />
          </Grid>
        )}
      </Container>
    </>
  );
}

export default DashboardAppPage;
