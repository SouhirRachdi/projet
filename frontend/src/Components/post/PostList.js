import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getPosts} from '../../Redux/Actions/postaction';
import {getUser} from '../../Redux/Actions/Useraction';
import './Post.css';

export default function PostList() {

  const posts = useSelector((state) => state.postReducer.posts);
  const postload = useSelector((state) => state.postReducer.loading);
  const dispatch=useDispatch();

  if (postload){
    <h1>Loading...</h1>
  }
  useEffect(() => {
    dispatch(getPosts());
  }, [posts,dispatch]);
  console.log(posts);


  return (
    <div>
     {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}

  </div>
  );
}
   
 












 