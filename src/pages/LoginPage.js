import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import useResponsive from '../hooks/useResponsive';
import { LoginForm } from '../sections/auth/login';

const StyledPageContainer = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'var(--blue-800, #00113D)'
}));

const StyledImgLogo = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  top: '49px',
  left: '106px',
  width: '169px',
  height: '50px',
  flexShrink: 0,
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
  }
}));

const StyledImgContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  top: '141px',
  left: '164px',
  width: '500px',
  height: '500px',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
  }
}));

const StyledContent = styled('div')(({ theme }) => ({
  width: '380px',
  height: '433px',
  flexShrink: 0,
  borderRadius: '28px',
  background: 'var(--white-0, #FFF)',
  marginTop: '-335px',
  marginLeft: '918px', // Ajustamos a margem à esquerda para separar o StyledContent do StyledImgContainer
}));

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');

  return (
    <StyledPageContainer>
      <>
        <Helmet>
          <title> Pontua | Login </title>
        </Helmet>
        <>
          <StyledImgLogo>
            {mdUp && (
              <img src="/assets/illustrations/logopontua.png" alt="login" />
            )}
          </StyledImgLogo>

          <StyledImgContainer>
            {mdUp && (
              <img src="/assets/illustrations/bro.png" alt="login" />
            )}
          </StyledImgContainer>

          <StyledContent>
            <Container maxWidth="sm">
              <Typography variant="h4" gutterBottom>
                Bem-vindo.
              </Typography>
              <Typography variant="body2" sx={{ mb: 5 }}>
                informe as suas credenciais de acesso ao portal
              </Typography>
              <LoginForm />
            </Container>
          </StyledContent>
        </>
      </>
    </StyledPageContainer>
  );
}
