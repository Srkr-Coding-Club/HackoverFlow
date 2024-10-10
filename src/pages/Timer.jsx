'use client'

import { useState, useEffect } from 'react'
import ReactConfetti from 'react-confetti'

export default function Timer() {
  const [timerState, setTimerState] = useState('idle')
  const [timeLeft, setTimeLeft] = useState(24*60*60) // 24 hours in seconds
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const storedTimerState = localStorage.getItem('timerState')
    const storedStartTime = localStorage.getItem('startTime')
    const storedTimeLeft = localStorage.getItem('timeLeft')

    if (storedTimerState && storedStartTime && storedTimeLeft) {
      const currentTime = Math.floor(Date.now() / 1000)
      const elapsedTime = currentTime - parseInt(storedStartTime)

      if (storedTimerState === 'running' && elapsedTime < parseInt(storedTimeLeft)) {
        setTimerState('running')
        setTimeLeft(parseInt(storedTimeLeft) - elapsedTime)
      } else if (elapsedTime >= parseInt(storedTimeLeft)) {
        setTimerState('completed')
        setTimeLeft(0)
      }
    }

    const updateWindowDimensions = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    updateWindowDimensions()
    window.addEventListener('resize', updateWindowDimensions)

    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])

  useEffect(() => {
    let interval

    if (timerState === 'running' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    } else if (timerState === 'running' && timeLeft === 0) {
      setTimerState('completed')
      localStorage.removeItem('timerState')
      localStorage.removeItem('startTime')
      localStorage.removeItem('timeLeft')
    }

    return () => clearInterval(interval)
  }, [timerState, timeLeft])

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const startTimer = () => {
    setTimerState('running')
    // setTimeLeft() // Reset the 24-hour timer
    setShowConfetti(true)

    // Store start time and timer state in localStorage
    const startTime = Math.floor(Date.now() / 1000)
    localStorage.setItem('startTime', startTime.toString())
    localStorage.setItem('timeLeft', (24 * 60 * 60).toString())
    localStorage.setItem('timerState', 'running')

    // Hide confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg text-center">
        {timerState === 'idle' && (
          <>
            <h1 className="text-4xl font-bold mb-6">24 Hour Timer</h1>
            <button
              onClick={startTimer}
              className="px-10 py-3 bg-white text-gray-900 font-bold rounded-full shadow-lg hover:bg-gray-900 hover:text-white hover:border-white hover:border-2 transition-colors duration-300 cursor-pointer"
            >
              Start Timer
            </button>
          </>
        )}
        {timerState === 'running' && (
          <div className="text-6xl font-bold">{formatTime(timeLeft)}</div>
        )}
        {timerState === 'completed' && (
          <div className="text-4xl font-bold text-red-500 animate-pulse">
            Time Completed!
          </div>
        )}
      </div>
      {showConfetti && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
        />
      )}
    </div>
  )
}