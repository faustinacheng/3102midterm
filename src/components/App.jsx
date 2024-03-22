import React, { useState } from "react";

function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    function updateTime() {
        setTime(new Date().toLocaleTimeString());
    }

    setInterval(updateTime, 1000);

    return (
        <div className="container">
            <h1>{time}</h1>
            <button>Get Time</button>
        </div>
    );
}

export default App;
