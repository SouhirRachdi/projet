import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { commentPost } from "../../Redux/Actions/postaction";
import "./Post.css";

const CommentSection = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  console.log(posts)
  const dispatch = useDispatch();
 // const user = useSelector((state) => state.userReducer.currentUser);
  const token = localStorage.getItem("token");
  const { _id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    // eslint-disable-next-line no-console

   dispatch(commentPost(e.target[0].value, posts._id));
    console.log(e.target[0].value);
  };

  return (
   <>
      <div > 
   
          <div className="card">
            <img
              src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/4/0/940b22eda6_50170334_code-informatique.jpg"
              className="card__image"
              alt="brown couch"
            />
            <div className="card__content">
            <span className="card__title"> {posts.find((post) => post._id == _id).title}  </span>
              <span className="card__question"> </span>
               
              
            </div>
          </div>

        
         <section>
            <div className="container">
              <div className="row" >
                <div className="col-sm-5 col-md-6 col-12 pb-4">
                  <h1>Comments</h1>
                  <div className="comment mt-4 text-justify float-left">
                    {" "}
                    <img
                      src="https://i.imgur.com/yTFUilP.jpg"
                      alt
                      className="rounded-circle"
                      width={40}
                      height={40}
                    />
                    <h4>Jhon Doe</h4> <span>- 20 October, 2018</span> <br />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusamus numquam assumenda hic aliquam vero sequi velit
                      molestias doloremque molestiae dicta?
                    </p>
                  </div>
                  <div className="text-justify darker mt-4 float-right">
                    {" "}
                    <img
                      src="https://i.imgur.com/CFpa3nK.jpg"
                      alt
                      className="rounded-circle"
                      width={40}
                      height={40}
                    />
                    <h4>Rob Simpson</h4> <span>- 20 October, 2018</span> <br />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusamus numquam assumenda hic aliquam vero sequi velit
                      molestias doloremque molestiae dicta?
                    </p>
                  </div>
                  <div className="comment mt-4 text-justify">
                    {" "}
                    <img
                      src="https://i.imgur.com/yTFUilP.jpg"
                      alt
                      className="rounded-circle"
                      width={40}
                      height={40}
                    />
                    <h4>Jhon Doe</h4> <span>- 20 October, 2018</span> <br />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusamus numquam assumenda hic aliquam vero sequi velit
                      molestias doloremque molestiae dicta?
                    </p>
                  </div>
                  <div className="darker mt-4 text-justify">
                    {" "}
                    <img
                      src="https://i.imgur.com/CFpa3nK.jpg"
                      alt
                      className="rounded-circle"
                      width={40}
                      height={40}
                    />
                    <h4>Rob Simpson</h4> <span>- 20 October, 2018</span> <br />
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Accusamus numquam assumenda hic aliquam vero sequi velit
                      molestias doloremque molestiae dicta?
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4">
                  <form id="algin-form">
                    <div className="form-group">
                      <h4>Leave a comment</h4>{" "}
                      <label htmlFor="message">Message</label>{" "}
                      <textarea
                        name="msg"

                        cols={30}
                        rows={5}
                        className="form-control"
                        style={{ backgroundColor: "white" }}
                      />
                    </div>

                    <div className="form-group">
                      {" "}
                      <label htmlFor="email">Email</label>{" "}
                      <input
                        type="text"
                      
                        name="user"
                        id="email"
                        className="form-control"
                      />{" "}
                    </div>

                    <div className="form-group">
                      {" "}
                      <button
                        type="button"
                        id="post"
                        className="btn"
                        onClick={handleSubmit}
                      >
                        Post Comment
                      </button>{" "}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section> 
      </div> 

    
    </>  
  );
};

export default CommentSection;

//
