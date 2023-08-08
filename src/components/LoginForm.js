import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({ authentication, isAuthenticated }) {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isEmailValid = (email) => {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  };
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    if (newEmail === '') {
      setEmailError('');
    } else if (!isEmailValid(newEmail)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === '') {
      setEmailError('Email Id can not be empty.');
      return;
    }
     if (!isEmailValid(email)) {
      setEmailError('Invalid email format.');
      return;
    }

    if (password === '') {
      setPasswordError('Password can not be empty');
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/g.test(password)) {
      setPasswordError('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &).');
      return;
    }
    


   

    //copying localstorage data to existinguser variable
    const existingUsers = JSON.parse(localStorage.getItem('users'));


    // Checking username and password
    const existingUser = existingUsers.find((u) => u.email === email && u.password === password);
    if (existingUser) {
      alert('Password Authentication Successful!');
      handleReset();
      authentication(existingUser);
      navigate('/userdasboard');



    }
    else {
      alert('username or password is incorrect!');

    }

    return;
  };

  const handleReset = () => {
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };




  return (
  
      <Box
        style={{
          minWidth:'md',
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          margin:'20px',
        
        }}
      >
        <form>
          <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>Login</h3>

          <TextField
            label={
              <span>
                Email Id<span style={{ color: 'red' }}>*</span>
              </span>
            }
            variant="outlined"
            placeholder="enter email address"
            type="email"
            style={{ marginBottom: '20px' }}
            fullWidth
            value={email}
            onChange={handleEmailChange}
            error={emailError !== ''}
            helperText={emailError}
            
          />

          <TextField
            label={
              <span>
                Password<span style={{ color: 'red' }}>*</span>
              </span>
            }
            variant="outlined"
            placeholder="enter password"
            type="password"
            style={{ marginBottom: '20px' }}
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            error={passwordError !== ''}
            helperText={passwordError}
            

          />

          <div style={{ display: 'flex', justifyContent: 'space-between', margin: 'auto' }} >
            <Button variant="contained" type="submit" onClick={handleLogin} sx={{ flex: 1, mr: '10px' }}>
              Login
            </Button>
            <Button variant="outlined" onClick={handleReset} sx={{ flex: 1, ml: '10px' }}>
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
            <Link to="/signupform" style={{ marginRight: '10px', textDecoration: 'none' }}>
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
