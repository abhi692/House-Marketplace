import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  const auth = getAuth()
  const [formData,setFormData] =useState({
    name: auth.currentUser.displayName,
    emial: auth.currentUser.email
  })
  const {name,email}=formData

  const navigate = useNavigate()
  const onLogout = ()=>{
    auth.signOut()
    navigate("/")
  }

    return (
    <div className="profile">
      <header className="profileHeader">My Profile</header>
      <button type="button" className="logOut" onClick={onLogout}>Logout</button>
    </div>
    )
  }
  
  export default Profile;
  