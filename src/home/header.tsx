import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export default function HomeHeader() {
  const navigate = useNavigate();
  const handleLogout = () => {
    
  };
  return (
    <div className='title-bar' style={{ }}>
      <div className="title-bar-text">SoftwareMongers</div>
                    <div className="title-bar-controls">
                        <select defaultValue={"Home"} style={{color: 'black', height: '20px', marginTop:'-2px'}} onChange={(e) => navigate(e.target.value)}>
                            <option value={"/"}>Home</option>
                            <option value={"/scrote"}>Scrote.org</option>
                            <option value={"/srsnix"}>SeriouslyNIX.com</option>
                            <option value={"/"}>Tss.place</option>
                            <option value={"/"}>Softwaremongers.com</option>
                            <option value={"/"}>Orgorglorg.org</option>
                        </select>
                        <div style={{width: "50px"}}></div>
                        <button aria-label="Close" style={{height:"16px"}}></button>
                    </div>
      </div>
  )
}
