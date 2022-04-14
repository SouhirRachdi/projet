
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import "./Post.css";
//import { getPost,commentPost,likePost} from '../../Redux/Actions/postaction';

import { deletePost } from '../../Redux/Actions/postaction';

const Post = ({post}) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.currentUser);
    const token = localStorage.getItem("token");
    console.log(user);
    console.log(token);


  return (
    <>
       {user ?(<Card sx={{ maxWidth: 345 }}  > 
     <CardMedia
        component="img"
        height="140"
        image="https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/4/0/940b22eda6_50170334_code-informatique.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Link to={`/postDetails/${post._id}`}> <Button size="small"  >Learn More</Button></Link>
        <Button size="small" onClick={()=>dispatch(deletePost(post._id))} >Delete</Button>
        
      </CardActions>
      </Card>
       ):( 
           "load"
       )}
  </>
  );
};

export default Post