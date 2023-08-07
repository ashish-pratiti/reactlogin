import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');
  const [petname, setPetName] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);



  const handleSingUp = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (email === '') {
      setError('Email Id can not be empty.');
      return;
    }

    if (pass === '') {
      setError('Password can not be empty');
      return;
    }

    if (repass !== pass) {
      setError('Passwords do not match');
      return;
    }




    // Copy value in localstorage to existingusers array;
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    //creating new object
    const user = {
      email: email,
      password: pass,
    };

    // Checking user is already present or not
    const existingUser = existingUsers.find((u) => u.email === email);
    if (existingUser) {
      alert('This email is already registered.');
      return;
    }

    // adding new user data to existingUsers
    existingUsers.push(user);

    // Update the localstorage
    localStorage.setItem('users', JSON.stringify(existingUsers));


    alert('SignUp Successful!');
    handleReset();
    return;
  };

  const handleReset = () => {
    setEmail('');
    setPass('');
    setRepass('');
    setError('');
    setSubmitted(false);
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
        marginTop: '5%',
        padding: '5%',
        flexDirection: 'column',
        pt: '20px',
      }}
    >

      <form>
        <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>SignUp</h3>

        <TextField
          label="Email Id"
          variant="outlined"
          placeholder="enter email address"
          type="email"
          style={{ marginBottom: '20px' }}
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={submitted && email === ''}
          helperText={submitted && email === '' ? error : ' '}
        />

        <TextField
          label="Password"
          variant="outlined"
          placeholder="enter password"
          type="password"
          style={{ marginBottom: '20px' }}
          fullWidth
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          error={submitted && pass === ''}
          helperText={submitted && pass === '' ? error : ''}
        />

        <TextField
          label="Repeat Password"
          variant="outlined"
          placeholder="enter password again"
          type="password"
          style={{ marginBottom: '30px' }}
          fullWidth
          value={repass}
          onChange={(e) => setRepass(e.target.value)}
          error={submitted && repass === ''}
          helperText={submitted && repass === '' ? error : repass !== pass ? 'Passwords do not match' : ''}
        />

        <TextField
          label="petName"
          variant="outlined"
          placeholder="enter your Pet Name"
          type="text"
          style={{ marginBottom: '30px' }}
          fullWidth
          value={petname}
          onChange={(e) => setRepass(e.target.value)}
          error={submitted && petname === ''}
          helperText={submitted && petname === '' ? error : ''}
        />

        <Button variant="contained" type="submit" onClick={handleSingUp} fullWidth style={{ marginBottom: '10px' }}>
          Sign Up
        </Button>
        <Button variant="outlined" type="submit" onClick={handleReset} fullWidth style={{ marginBottom: '10px' }}>
          RESET
        </Button>
      </form>
    </Box>
  );
}

export default Signup;
