import React from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import ChatBot from "../../components/chatbot/ChatBot.jsx";
//import Calendar from "./assets/components/calendar/Calendar.jsx";
import TaskGoalList from "../../components/task_goal_list/TaskGoalList.jsx";
import "./Home.css"

const Home = () => {
    const { currentUser } = useAuth();

    return (
        <div className="homepage">
            <div className="home-content">
                <div>
                <h1>Welcome back!</h1>
                <Calendar />
                    <TaskGoalList />
                    < Calendar month={monthValue} setMonthValue={setMonthValue} />
                    < ChatBot />
                </div>
            </div>


        </div>
    )
}

export default Home;