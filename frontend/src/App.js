
import './App.css';
import NavBar from "./Components/NavBar";
import NavBarProf from "./Components/NavBarProf";
import SignIn from './Components/SignIn';
import {Routes,Route} from "react-router-dom";
import SignUp from './Components/SignUp';
import Profil from './Components/Profil/Profil';
import { getUser } from './Redux/Actions/Useraction';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DashboardContent from './Components/dashboard/dashboard';
import DashboardProf from './Components/dashboardProf/dashboardProf'
import PrivateRoute from './Components/privateRoutes/PrivateRoutes';
import Calendar from './Components/Calendar';
import ResponsiveDrawer from './Components/Cours/Cours';
import AddCours from './Components/AddCours';
import AuthProf from './Components/AuthProf';
import Student from './Components/Student';

import NavBarPost from './Components/NavBarPost';
import Menu  from '../src/Components/menu/Menu';
import { getPosts } from './Redux/Actions/postaction';
import PostList from './Components/post/PostList';


import AddPost from './Components/menu/AddPost'
//import AddLibrary from './Components/library/AddLibrary';
import AddLab from './Components/library/AddLab';
import LibraryList from './Components/library/LibraryList';

import Library from './Components/library/Library'
import { getAllVideos } from './Redux/Actions/Libraryaction';
function App() {


  const dispatch = useDispatch();

  
useEffect(() => {
  dispatch(getUser())
}, [])

useEffect(() => {
  dispatch(getPosts());
}, []);

useEffect(() => {
  dispatch(getAllVideos());
}, []);



  return (
    <div className="App">
     
     <Routes>
     
     <Route path="/signup" element={<SignUp/>}/>
     <Route  path="/" element={<SignIn/>}/>
     <Route  path="/dashboard" element={<div><PrivateRoute><NavBar/><DashboardContent /></PrivateRoute></div>}/>
     <Route  path="/calendar" element={<div><PrivateRoute><NavBar/><Calendar /></PrivateRoute></div>}/>
     <Route path="/profil" element={<div><PrivateRoute><NavBar/><Profil/></PrivateRoute></div>}/>
     <Route  path="/cours" element={<div><PrivateRoute><NavBar/><ResponsiveDrawer/></PrivateRoute></div>}/>
     <Route  path="/dashboardProf" element={<div><NavBarProf/><DashboardProf /></div>}/>
     <Route  path="/student" element={<div><AuthProf><NavBarProf/><Student/></AuthProf></div>}/>
     <Route path="/addCour" element={<AddCours/>}/>
     <Route path="/addPost" element={<div><NavBarPost/><Menu/></div>}/>
     <Route path="/library" element={<div><NavBar/><LibraryList/></div>}/>
     <Route path="/addtolab" element={<div><NavBar/><AddLab/></div>}/>
     <Route path="/PostList" element={<div><NavBarPost/><PostList/></div>}/>
     <Route path="/postDetails/:id"  element={<div><NavBarPost/><AddPost/></div>}/>

     </Routes>
    </div>
  );
}

export default App;
