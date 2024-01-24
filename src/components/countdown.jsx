import React, { useState, useEffect } from 'react';

const CountdownTimer = (props) => {
    const initialTime = props.timeinsec; // Initial time in seconds
    const [seconds, setSeconds] = useState(initialTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Decrement the seconds
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, props.time);

        // Clear the interval when component is unmounted
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // Check if the countdown has reached zero
        if (seconds === 0) {
            // Reset the countdown to the initial time
            setSeconds(initialTime);
        }
    }, [seconds, initialTime]);

    // Format seconds into MM:SS
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const remainingSeconds = time % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <div>
            <small><b>Count Down</b></small>
            <h1 className='mt-1'><b>{formatTime(seconds)}</b></h1>
        </div>
    );
};

export default CountdownTimer;
