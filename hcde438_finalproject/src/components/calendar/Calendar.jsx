import React from 'react';
import Calendar from 'react-calendar';
import "./Calendar.css"

//const [weekValue, setWeekValue] = React.useState(new Date());
//const [monthValue, setMonthValue] = React.useState(new Date());

const getStartOfWeek = (date) => {
    const copy = new Date(date); // Avoid mutating the original date
    const day = copy.getDay();
    copy.setDate(copy.getDate() - day);
    return copy;
};

const Calendar = ({weekValue, setWeekValue, monthValue, setMonthValue}) =>
        {   const start = getStartOfWeek(weekValue);
            const weekDays = Array.from({ length: 7 }, (_, i) => {
                const d = new Date(start);
                d.setDate(start.getDate() + i);
                return d;
            });

            return (
                <div className="calendar-section">
                    <div className="weekly-calendar">
                        <h2>This Week</h2>
                        <div className="week-row">
                            {weekDays.map((date) => (
                                <div key={date.toISOString()} className="day-box">
                                    {date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" })}
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="monthly-calendar">
                        <h2>Month Name</h2>
                        <Calendar value={monthValue} onChange={setMonthValue} />
                    </div>
                </div>
            );
        };

export default Calendar;