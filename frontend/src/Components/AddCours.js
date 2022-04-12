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
import { useDispatch } from "react-redux";
import { addCour } from "../Redux/Actions/Couraction";
import {useNavigate} from "react-router-dom"
import { useState } from "react";

const AddCours = () => {
  const navigate=useNavigate()
  const dispatch = useDispatch();
  const theme = createTheme();
 const [contentNumb, setContentNumb] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console

    console.log({
        materialName: data.get("materialName"),
        title: data.get("title"),
        content: [{subTitle:data.get("subTitle"),para:data.get("content")}],
    });
    /*dispatch(
        addCour({
        materialName: data.get("materialName"),
        title: data.get("title"),
        content: data.get("content"),
      },navigate)
      
    );*/
 
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
              Add Product
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
                id="materialName"
                label="Name Material"
                name="materialName"
                autoComplete="no"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="title"
                label="Title"
                type="String"
                id="title"
                autoComplete="no"
              />
              <TextField
              margin="normal"
                required
                fullWidth
                name="subTitle"
              id="subTitle"
              label="subTitle"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
            <TextField
              margin="normal"
                required
                fullWidth
                name="content"
              id="content"
              label="Content"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
            {contentNumb.map(el=>(<div><TextField
              margin="normal"
                required
                fullWidth
                name="subTitle"
              id="subTitle"
              label="subTitle"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
            <TextField
              margin="normal"
                required
                fullWidth
                name="content"
              id="content"
              label="Content"
              multiline
              rows={4}
              defaultValue="Default Value"
            /></div>))}
            <Button
            onClick={()=>setContentNumb([...contentNumb,1])}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            add content
          </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default AddCours;