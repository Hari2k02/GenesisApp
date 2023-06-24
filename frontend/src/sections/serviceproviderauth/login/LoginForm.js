import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [e.target.name]: e.target.value
    }));
  };

  const handleClick = async () => {
    setLoading(true);

    try {
      const response = await fetch('http://localhost:1337/loginUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      });

      const data = await response.json();
      console.log(data);

      if (response.ok && data.status === 'ok') {
        navigate('/dashboard', { replace: true });
      } else if (data.status === 'error') {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Login failed', error);
      setErrorMessage('Login failed. Please try again.');
    }

    setLoading(false);
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField name="username" label="Username" value={credentials.username} onChange={handleChange} />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={credentials.password}
          onChange={handleChange}
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

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        {/* <Checkbox name="remember" label="Remember me" /> */}
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={loading}
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );
}
