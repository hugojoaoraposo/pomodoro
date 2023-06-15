

import pic from "../../img/gustavosantos.png"
import DayIcon from "../../icons/today_icon.png"
import WeekIcon from "../../icons/week_icon.png"
import MonthIcon from "../../icons/month_icon.png"
import './Profile.css'




export default function Profile() {
  return (
    <div >
      <div className="flex flex-col items-center pt-20">
        <img className="rounded-full " src={pic} width={80} alt="pic" />
        <h1 className="pt-5">user name</h1>
        <div className=" w-screen h-72 flex items-center ">
          <u className="space-y-10 list-none no-underline">
            <li>Today:</li>
            <li>This Week:</li>
            <li>This Month:</li>
          </u>
        </div>
      </div>
      <NavBar pages={"profile"}/>
    </div>
  )
}
