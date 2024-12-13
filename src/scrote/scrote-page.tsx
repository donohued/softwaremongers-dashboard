import ScroteNav from "./nav";
import ScroteHeader from "./header";
import ScroteSubmissions from "./submissions";
import "98.css";
import { Outlet } from "react-router-dom";


export default function ScrotePage() {
  return (
    <>
      <div style={{ width: "100%" }}>

        <ScroteHeader />

        <div style={{ display: 'flex' }}>

          <ScroteNav />

          <Outlet />

        </div>
      </div>

      
    </>
  )
}
