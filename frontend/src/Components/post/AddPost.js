import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPost } from '../../Redux/Actions/postaction';
import "./Post.css";




export default function AddPost() {
    const navigate=useNavigate()
  const dispatch = useDispatch();
  const theme = createTheme();
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [user, setUser] = React.useState("");
  const [question, setQuestion] = React.useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    data.append('title',title);
    data.append('message',message);
    data.append('user',user);
    data.append('question',question);
    
    
    
    console.log({
      title: data.get('title'),
      message: data.get('message'),
      user: data.get('email'),
      question:data.get('question'),
    });
    dispatch(
        createPost({
      title: data.get('title'),
      message: data.get('message'),
      user: data.get('email'),
      question:data.get('question'),
          },navigate)
      
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Add Post
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="title"
              name="title"
              autoComplete="no"
              onChange={(e) =>setTitle(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="question"
              label="question"
              name="question"
              autoComplete="no"
              onChange={(e) =>setQuestion(e.target.value)} />
            <TextField
              margin="normal"
              required
              fullWidth
              name="message"
              label="message"
              type="message"
              id="message"
              autoComplete="no"
              onChange={(e) =>setMessage(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="user"
              label="Email Address"
              name="user"
              autoComplete="user"
              autoFocus
              onChange={(e) =>setUser(e.target.value)}
            />
            
           <Link to="/PostList"> <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Add Post
            </Button></Link>
         
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}