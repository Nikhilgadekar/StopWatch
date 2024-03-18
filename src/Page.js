import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
    const [timer, setTimer] = useState(.00)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const increment = useRef(null)

    const handleStart = () => {
        setIsActive(true)
        setIsPaused(true)
        increment.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handlePause = () => {
        clearInterval(increment.current)
        setIsPaused(false)
    }

    const handleResume = () => {
        setIsPaused(true)
        increment.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handleReset = () => {
        clearInterval(increment.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }
    console.log("this is paused", isPaused);
    console.log("this is active status", isActive);
    console.log("this is timer", timer);

    return (

        <div className="app">
            <h3>Stopwatch</h3>
            <div className='stopwatch-card'>
                <p>{formatTime()}</p>
                <div className='buttons'>
                    {
                        !isActive && !isPaused ?
                            <button className="relative inline-flex items-center justify-center p-0.5 m-3 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleStart}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    start
                                </span>
                            </button>
                            : (
                                isPaused ? <button className="relative inline-flex items-center justify-center p-0.5 m-3 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handlePause}>
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Pause
                                    </span>

                                </button> :
                                    <button className="relative inline-flex items-center justify-center p-0.5 m-3 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleResume}>
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">

                                            Resume
                                        </span>
                                    </button>
                            )
                    }
                    <button className="relative inline-flex items-center justify-center p-0.5 m-3 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={handleReset} disabled={!isActive}>
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Reset
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;