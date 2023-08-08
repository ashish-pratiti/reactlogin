import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setRepass] = useState('');
  //const [petname, setPetName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [rePasswordError, setRePasswordError] = useState('');
  

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
    const newPass = e.target.value;
    setPass(newPass);
    setPasswordError('');
    if(newPass===''){
      setPasswordError('');

    }
    // Password format validation
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[a-zA-Z\d@#$!%*?&]{8,}$/.test(
        newPass
      )
    ) {
      setPasswordError(
        'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character (@,#, $, !, %, *, ?, &).'
      );
    } else {
      setPasswordError('');
    }
  };

  const handleRePasswordChange = (e) => {
    setRepass(e.target.value);

    if(e.target.value === ''){
      setRePasswordError('');
    }
    else if (e.target.value !== pass) {
      setRePasswordError('Passwords do not match');
    } else {
      setRePasswordError('');
    }
  };
  
 
  
  
  
  
  

  

  const handleSingUp = (event) => {
    event.preventDefault();
   

    if (email === '') {
      setEmailError('Email Id can not be empty.');
      return;
    }
    if (!isEmailValid(email)) {
      setEmailError('Invalid email format.');
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/g.test(pass)) {
      setPasswordError('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character (@, $, !, %, *, ?, &).');
      return;
    }
    if (pass === '') {
      setPasswordError('Password can not be empty');
      return;
    }

    if (repass !== pass) {
      setRePasswordError('Passwords do not match');
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
    setEmailError('');
    setPasswordError('');
    setRePasswordError('');
    
  };

  return (
    <Box
      style={{
        minWidth:'md',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        margin: 'auto',
        //marginTop:'5%',
        maxWidth: '470px',
        
        
        
      }}
    >

      <form style={{maxWidth:470, padding:'16px'}}>
        <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>SignUp</h3>

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
            value={pass}
            onChange={handlePasswordChange}
            error={passwordError !== ''}
            helperText={passwordError}
        />

        <TextField
          label="Repeat Password"
          variant="outlined"
          placeholder="enter password again"
          type="password"
          style={{ marginBottom: '20px' }}
          fullWidth
          value={repass}
          onChange={handleRePasswordChange}
            error={rePasswordError !== ''}
            helperText={rePasswordError}
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
