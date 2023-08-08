import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSearch, BlogPostsSort } from '../sections/@dashboard/blog';
import apiMarvel from '../services/marvel/apiMarvel';
// mock
import POSTS from '../_mock/blog';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

const BlogPage = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    apiMarvel.get('/characters')
      .then(response => {
        const characterArray = Object.values(response.data.data.results);
        console.log("🚀 ~ file: DashboardAppPage.js:26 ~ useEffect ~ characterArray:", characterArray)

        const charactersWithDescription = characterArray.filter(character => character.description);
        setCharacters(charactersWithDescription);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard: Blog | Minimal UI </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Post
          </Button>
        </Stack>

        <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {characters.map((item, index) => (
            <BlogPostCard key={item.id} post={item} index={index} />
          ))}
        </Grid>
        
      </Container>
    </>
  );
}

export default BlogPage;
