import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, FormControl } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Iconify from '../../../components/iconify';
import { Context } from '../../../context/AuthContext';

export default function LoginForm() {
  const navigate = useNavigate();

  const { handleLogin, error } = useContext(Context);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    const data = {
      email,
      password
    };

    await handleLogin(data);

    return navigate('/dashboard', { replace: true });
  };

  return (
    <>

      <FormControl>

        <Stack spacing={3}>
          <TextField
            type="email"
            name="email"
            label="Informe seu email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            name="password"
            label="Informe sua senha"
            type={showPassword ? 'text' : 'password'}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <Checkbox name="remember" label="Remember me" />
          {error ? (
            <Link color={'red'} variant="subtitle2" underline="hover">
              Senha incorreta
            </Link>
          ) : (
          <Link variant="subtitle2" underline="hover">
            Esqueceu a senha?
          </Link>
          )}
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          onClick={(e) => handleClick(e)}
          sx={{
            color: 'var(--gray-150, #FBFBFB)',
            textAlign: 'right',
            fontFamily: 'Epilogue',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            letterSpacing: '-1.56px',
          }}>
          entrar
        </LoadingButton >
      </FormControl>
    </>
  );
}
