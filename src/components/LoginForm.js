import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === '') {
      setError('Email Id can not be empty.');
      return;
    }
    if (password === '') {
      setError('Password can not be empty');
      return;
    }

   //copying localstorage data to existinguser variable
   const existingUsers = JSON.parse(localStorage.getItem('users'));

    
   // Checking username and password
   const existingUser = existingUsers.find((u) =>  u.email === email && u.password === password );
   if(existingUser){ 
       alert('Login Successful!');
   handleReset();
   return;
   }
    else{
        alert('username or password is incorrect!');
        return;
    }
    
    
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setError('');
  };


  

  return (
    <Box
        sx={{
          width: 380,
          height: 400,
          backgroundColor: '#efebe9',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          padding: '5%',
          flexDirection: 'column',
          pt: '20px',
        }}
      >
        <form>
        <h3 style={{ marginBottom: '30px', textAlign:'center'}}>Login</h3>

        <TextField
            label="Email Id"
            variant="outlined"
            placeholder="enter email address"
            type="email"
            style={{ marginBottom: '30px' }}
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error !== '' && email === ''}
            helperText={email === '' ? error : ' '}
        />

        <TextField
            label="Password"
            variant="outlined"
            placeholder="enter password"
            type="password"
            style={{ marginBottom: '30px' }}
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error !== '' && password === ''}
            helperText={password === '' ? error : ' '}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', margin: 'auto' }} fullWidth>
            <Button variant="contained" type="submit" onClick={handleLogin} style={{ width: '45%' }}>
            Login
            </Button>
            <Button variant="outlined" onClick={handleReset} style={{ width: '45%' }}>
            Reset
            </Button>
        </div>

        <div
            style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            margin: 'auto',
            marginTop: '10px',
            }}
        >
            <Link to="/signup" style={{ width: '20%', textDecoration: 'none' }}>
            <Button variant="text" size="small" fullWidth>
                Sign Up
            </Button>
            </Link>

            <div style={{ textAlign: 'center', marginTop: '6px' }}>|</div>
            <Button variant="text" size="small" style={{ width: '40%', marginRight: '10%' }}>
            Forgot Password
            </Button>
        </div>

        <div
            style={{
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: '20px',
            }}
            fullWidth
        >
            <div style={{ width: '45%', borderTop: '1px solid black' }}></div>
            <div style={{ margin: '-10px 10px' }}>OR</div>
            <div style={{ width: '45%', borderTop: '1px solid black' }}></div>
        </div>

        <Button
            variant="contained"
            type="submit"
            style={{
            display: 'block',
            justifyContent: 'center',
            margin: 'auto',
            marginTop: '30px',
            }}
            fullWidth
        >
            CONTINUE AS GUEST
        </Button>
        </form>
      </Box>
  );
}

export default LoginForm;
