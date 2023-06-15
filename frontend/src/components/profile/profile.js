import pic from "../../img/RENATO.jpg"
import DayIcon from "../../icons/today_icon.png"
import WeekIcon from "../../icons/week_icon.png"
import MonthIcon from "../../icons/month_icon.png"
import tomatO from "../../img/tomatesuave.png"
import './Profile.css'

export default function Profile() {
  return (

<div className="profile-container">
  <div className="flex flex-col items-center pt-10">
    <img className="rounded-full" src={pic} width={90} alt="Profile Picture" />
    <h1 className="pt-5 text-2xl font-bold">Renato Ribeiro </h1>
    <div className="w-screen h-72 flex items-center divide-x">
      <div className="flex-1 flex-col">
        <ul className="space-y-8 ml-4 list-none">
          <li className="flex items-center">
            <img src={DayIcon} className="h-6 w-6 mr-2" alt="Day Icon" />
            <span className="text-lg">Today:</span>
            <span className="ml-2 text-gray-500">1h 15min</span>
          </li>
          <li className="flex items-center">
            <img src={WeekIcon} className="h-6 w-6 mr-2" alt="Week Icon" />
            <span className="text-lg">This Week:</span>
            <span className="ml-2 text-gray-500">3h 20min</span>
          </li>
          <li className="flex items-center">
            <img src={MonthIcon} className="h-6 w-6 mr-2" alt="Month Icon" />
            <span className="text-lg">This Month:</span>
            <span className="ml-2 text-gray-500">14h 35min</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="flex justify-center">
  <div>
    <span className="inline-block border border-gray-400 rounded-s px-5 py-1 text-xl font-extralight text-red-500">
      Task List
    </span>
  </div>
</div>
<div className="flex justify-center mt-2">
  <input type="text" placeholder="+   create task " className="border border-gray-500 rounded px-4 py-2 focus:outline-none focus:border-blue-500" />
</div> 
  <div className="absolute bottom-5 right-12 m-50">
   <a href="http://localhost:3000/pomodoro">
        <button className= "shadow-sm">
      <img src={tomatO} alt="Button Image" className="tomato-profile w-12 h-12 shadow-s" />
     </button>
    </a>
  </div>
</div>
 
  );

}
