import React, {useRef, useState, useEffect} from 'react'
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
// import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z](?=.*[0-9])(?=.*[!@#$%])).{8,24}$/;

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, sePwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrmsg] = useState('');
  const [success, setSuccess] = useState(false);
  
  useEffect(() => {
    userRef.current.focus();
  }, [])  
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  },[user])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);        
  }, [pwd, matchPwd])

  useEffect(() => {
    setErrmsg('');
  }, [user, pwd, matchPwd])

  return(        
    <section>     
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>SignUp</h1>
        <form action="">
          <label htmlFor="username">Username: </label>
        </form>
    </section>
  )
}


const Signup = () => {
    const paperStyle = { padding: 20, height:'43vh', width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    // const avatarStyle = { backgroundColor: '#F94F4F' }
    const marginTop = { marginTop: 5 }

    
    
    

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    {/* <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar> */}
                    <h2 style={headerStyle}>Sign Up</h2>
                    {/* <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography> */}
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    {/* <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl> */}
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    {/* <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    /> */}
                    <Button type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;