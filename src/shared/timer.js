import React, { useEffect, useState } from 'react';

const DigitalClock = (props) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <div id='timer'>
            <h2>The time now is {time.toLocaleTimeString()}</h2>
        </div>
    )
};

export default DigitalClock;