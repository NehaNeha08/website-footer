import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='navbar'>
    <img src="https://lietalwar.org/wp-content/uploads/2021/11/Liet-Logo-new-500x500-1-1.png" alt="liet alwar"/>
    <ul>
      <li>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Courses</a>
        <a href="#">Admission</a>
        <a href="#">Contact us</a>
        <a href="#">Login 
        <i class="fa fa-user" aria-hidden="true"></i>
        </a>
      </li>
      </ul>  
    </div>
    {/* <div className="Navbar">
     <ul>
      <li>
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Courses</a>
        <a href="#">Admission</a>
        <a href="#">Contact us</a>
        <a href="#">Login</a>
      </li>
      </ul>  
    </div> */}
    <div className="mainfooter">
    <div className="firstfooter">
    <h1>Laxmi Devi institute of</h1>
     <h1> Engineering $ Technology</h1>
    <p> Alwar-Tijara-Delhi Highway</p> 
     <p>chikani.Alwar.Rajasthan</p>
     <p>India-301028</p>
     <p>+91-7073477274</p>
     <p>+91-9829103101</p>
     <a href="">director@lietalwar.org</a>


    </div>

     <div className="secondfooter">
     <h2>Quick links</h2>
     <hr></hr>
     <p>About us</p>
     <p>Admission</p>
     <p>Apply @ LIET</p>
     <p>Board of management</p>
     <p>Grievonce Redressal</p>
     </div>

     <div className="thirdfooter">
     <h2>Courses</h2>
     <hr></hr>
     <p>B.Tech</p>
     <p>M.Tech</p>
     <p>MBA</p>
     <p>Polytechnic</p>
     </div>

     <div className="fourthfooter">
     <h2>External Links</h2>
     <hr></hr>
     <p>AICTE</p>
     <p>BTU</p>
     <p>BTER</p>
     <p>DELNET</p>
     </div>


    </div>

    
    </>
  )
}

export default App
