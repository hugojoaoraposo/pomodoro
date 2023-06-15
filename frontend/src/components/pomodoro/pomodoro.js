

import logo from "../../../src/img/logo.png";
// import CountdownCircle from "../countdownCircle/CountdownCircle";
import NavBar from "../navbar/Navbar";
import Timer from "../timer/Timer";
import "./Pomodoro.css"
export default function Pomodoro() {
    //ler a rota atual


    
  return (
    <div className=" h-screen overflow-y-hidden pomodoro-container">
      <div className="flex flex-col pt-14 items-center overflow-y-hidden pb-8">
        <img src={logo} width={80} alt="Logo" />
      </div>
      <div >
        <Timer/>
       
        <NavBar pages={"pomodoro"} />
      </div>
    </div>
  );
}

