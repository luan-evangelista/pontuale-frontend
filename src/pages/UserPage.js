import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Container,
  Grid,
  Stack,
  Typography
} from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { useParams } from 'react-router-dom';
import Info from '../components/table-navigation/components/Info';
import apiMarvel from '../services/marvel/apiMarvel';

export default function UserPage() {
  const [value, setValue] = React.useState('1');
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    apiMarvel.get('/characters')
      .then(response => {
        const characterArray = Object.values(response.data.data.results);

        const charactersWithDescription = characterArray.filter(character => character.description);
        console.log("🚀 ~ file: UserPage.js:32 ~ useEffect ~ charactersWithDescription:", charactersWithDescription)
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
        <title> Perfil </title>
      </Helmet>

      <Container>
        {isLoading ? (
          <Typography variant="h5">Carregando...</Typography>
        ) : (
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Visão Geral" value="1" />
                    <Tab label="Teams" value="2" />
                    <Tab label="Powers" value="3" />
                    <Tab label="Species" value="4" />
                    <Tab label="Authors" value="5" />
                  </TabList>
                </Box>

                <TabPanel value="1">
                  <Info key={characters[12].id} post={characters[12]} index={12} />
                </TabPanel>

                <TabPanel value="2">
                  <Grid item md={12}>
                    {characters[12].stories.items[0].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].stories.items[1].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].stories.items[2].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].stories.items[3].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].stories.items[4].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].stories.items[5].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].stories.items[6].name}
                  </Grid>
                </TabPanel>


                <TabPanel value="3">
                  <Grid item md={12}>
                    {characters[12].series.items[0].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].series.items[1].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].series.items[2].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].series.items[3].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].series.items[4].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].series.items[5].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].series.items[6].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].series.items[7].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].series.items[8].name}
                  </Grid>
                </TabPanel>

                <TabPanel value="4">
                <Grid item md={12}>
                    {characters[12].events.items[0].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].events.items[1].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].events.items[2].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].events.items[3].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].events.items[4].name}
                  </Grid>
                </TabPanel>

                <TabPanel value="5">
                <Grid item md={12}>
                    {characters[12].comics.items[0].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].comics.items[1].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].comics.items[2].name}
                  </Grid>
                  <Grid item md={12}>
                    {characters[12].comics.items[3].name}
                  </Grid>
                </TabPanel>

                
              </TabContext>
            </Box>
          </Stack>
        )}
      </Container>
    </>
  );
}
