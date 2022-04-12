import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";

import {useNavigate} from "react-router-dom"
import { addVideo } from "../../Redux/Actions/Libraryaction";
const AddLab = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();

  const labraries = useSelector((state) => state.libraryReducer.videos);

  const theme = createTheme();

  const [title, setTitle] = React.useState("");
  const [video, setVideo] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    // eslint-disable-next-line no-console
    data.append('file',video);
    data.append('title',title);

    console.log({
      title: data.get("title"),
     video: data.get("file"),
    
    });
    dispatch(
        addVideo(
        data ,navigate)
     
      
    );
 
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Add Video
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                type="string"
                label="title"
                name="title"
               
                onChange={(e) =>setTitle(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                name="file"
                label="video"
                type="file"
                id="file"
               
                onChange={(e) =>setVideo(e.target.files[0])}
              />
             
              

              <Link to='/library'><Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button></Link>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default AddLab;