import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../Redux/Actions/Useraction";
import { useNavigate } from "react-router-dom";

import "./Profil.css";

function Profil() {
   const Input = styled("input")({
    display: "none",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = React.useState("");
  const oldUser = useSelector((state) => state.userReducer.currentUser);
  const [newuser, setNewuser] = React.useState(oldUser);
  React.useEffect(() => {
    setNewuser(oldUser);
  }, [oldUser]);
  const handelSave = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", image);
    console.log(data.get("file"));
    data.append("newuser", newuser);
    console.log(data);
    dispatch(editUser(oldUser._id, data, navigate));
  };
 

  return (
    <div>
      <div>
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <form>
              <div className="col-md-3 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                  <img
                    className="rounded-circle mt-5"
                    width="150px"
                    src={newuser && newuser.image}
                  />
                  <Stack direction="row" alignItems="center" spacing={2}>
                <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    name="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Stack>
                  <span className="font-weight-bold">Edogaru</span>
                  <span className="text-black-50">edogaru@mail.com.my</span>
                  <span> </span>
                </div>
              </div>
              
              

              <div className="col-md-5 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">FirstName</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        defaultValue={oldUser && oldUser.firstName}
                        onChange={(e) =>
                          setNewuser({ ...newuser, firstName: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">LastName</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={oldUser && oldUser.lastName}
                        onChange={(e) =>
                          setNewuser({ ...newuser, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="labels">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="country"
                        defaultValue
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">State/Region</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue
                        placeholder="state"
                      />
                    </div>
                  </div>
                  <div className="mt-5 text-center">
                    <button
                      className="btn btn-primary profile-button"
                      onClick={handelSave}
                      type="button"
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="col-md-4">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience">
                  <span>Edit Experience</span>
                  <span className="border px-3 p-1 add-experience">
                    <i className="fa fa-plus" />
                    &nbsp;Experience
                  </span>
                </div>
                <br />
                <div className="col-md-12">
                  <label className="labels">Experience in Designing</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="experience"
                    defaultValue
                  />
                </div>{" "}
                <br />
                <div className="col-md-12">
                  <label className="labels">Additional Details</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="additional details"
                    defaultValue
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
