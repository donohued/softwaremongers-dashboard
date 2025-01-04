import ScroteNav from "./components/nav";
import "98.css";
import { Outlet } from "react-router-dom";
import HomeHeader from "../home/header";


export default function ScrotePage() {
  return (
    <>
      <div style={{ width: "100%" }}>

        <HomeHeader />

        <div style={{ display: 'flex' }}>

          <ScroteNav />

          <Outlet />

        </div>
      </div>

      
    </>
  )
}
