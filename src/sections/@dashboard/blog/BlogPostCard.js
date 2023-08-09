import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardContent, Divider, Grid, Link } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import SvgColor from '../../../components/svg-color';

const StyledCardMedia = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const StyledTitle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const StyledCover = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

BlogPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function BlogPostCard({ post, index }) {
  const { name, thumbnail, description, id } = post;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  return (
    <Grid item xs={12} sm={latestPostLarge ? 6 : 3} md={latestPostLarge ? 6 : 3}>
        <Card sx={{ position: 'relative' }}>
          <StyledCardMedia
            sx={{
              ...((latestPostLarge || latestPost) && {
                pt: 'calc(100% * 4 / 3)',
                '&:after': {
                  top: 0,
                  content: "''",
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
                },
              }),
              ...(latestPostLarge && {
                pt: {
                  xs: 'calc(100% * 4 / 3)',
                  sm: 'calc(100% * 3 / 4.66)',
                },
              }),
            }}
          >
            <SvgColor
              color="paper"
              src="/assets/icons/shape-avatar.svg"
              sx={{
                width: 80,
                height: 36,
                zIndex: 9,
                bottom: -15,
                position: 'absolute',
                color: 'background.paper',
                ...((latestPostLarge || latestPost) && { display: 'none' }),
              }}
            />
            <StyledCover alt={name} src={`${thumbnail.path}.${thumbnail.extension}`} />
          </StyledCardMedia>

          <CardContent
            sx={{
              pt: 4,
              ...((latestPostLarge || latestPost) && {
                bottom: 0,
                width: '100%',
                position: 'absolute',
              }),
            }}
          >

            <StyledTitle
              color="inherit"
              variant="subtitle2"
              underline="hover"
              sx={{
                ...(latestPostLarge && { typography: 'h5', height: 60 }),
                ...((latestPostLarge || latestPost) && {
                  color: 'common.white',
                }),
              }}
            >
              {name}
            </StyledTitle>

            <Divider />

            <StyledTitle
              color="inherit"
              variant="subtitle2"
              underline="hover"
              sx={{
                ...(latestPostLarge && { typography: 'h5', height: 60 }),
                ...((latestPostLarge || latestPost) && {
                  color: 'common.white',
                }),
              }}
            >
              {description}
            </StyledTitle>
          </CardContent>
        </Card>
    </Grid >
  );
}
