import React, { useEffect, useState } from 'react';
import "./loggedin.css";
import "./responsive.css";
import { RiImageAddLine } from "react-icons/ri";
import AdminDestinations from './AdminDestinations';
import { db } from "../database";
import { onValue, ref } from 'firebase/database';
import CreateModal from './CreateModal';

const LoggedIn = ({ logOut }) => {

  const [featuredDestinations, setFeaturedDestinations] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [id, setId] = useState([])

  useEffect(() => {
    onValue(ref(db, '/destinations'), (snapshot) => {
      const data = snapshot.val(); 
      if (data !== null) {
        setId(Object.keys(data));
        setFeaturedDestinations(Object.values(data))
      }
    })
  }, [])

  return (
    <div className='logged-in flex-center-center content'>
      <CreateModal setShowCreateModal={setShowCreateModal} showCreateModal={showCreateModal} />
      <nav className='flex-center-between'>
        <p className='default-text'>Welcome Back, EatWind</p>
        <button className='default-button' onClick={() => {logOut()}}>Sign Out</button>
      </nav>
      <div className='update flex-center-start'>
        <div className='create flex-center-end'><div className='flex-center-center default-button' onClick={() => setShowCreateModal(true)}><RiImageAddLine />Create New</div></div>
        <div className='list flex-center-start'>
        {
          featuredDestinations && 
          featuredDestinations.map((destination, i) => {
            return (
              <AdminDestinations key={i} data={destination} id={id[i]} />
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default LoggedIn