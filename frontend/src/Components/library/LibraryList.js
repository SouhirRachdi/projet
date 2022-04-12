import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'

import Library from './Library'
const LibraryList = () => {
    const labraries=useSelector(state=>state.libraryReducer.videos)
    console.log(labraries)
  return (
      <div>
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
   {labraries.map(el=><Library el={el} key={el._id} />)}
    </div>
    <Link to="/addtolab"><button>Add Video</button></Link>
    </div>
  );
}

export default LibraryList;
