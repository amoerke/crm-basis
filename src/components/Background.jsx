import React from 'react'

export default function Background() {
  return (
    <svg 
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
        opacity: 0.6,
        backgroundColor: '#0f172a'
      }}
      viewBox="0 0 100 100" 
      preserveAspectRatio="xMidYMid slice" 
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5">
          <animate attributeName="fx" dur="34s" values="0%;3%;0%" repeatCount="indefinite"></animate>
          <stop offset="0%" stopColor="rgba(79, 70, 229, 0.7)"></stop>
          <stop offset="100%" stopColor="rgba(79, 70, 229, 0)"></stop>
        </radialGradient>
        <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5">
          <animate attributeName="fx" dur="23.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
          <stop offset="0%" stopColor="rgba(236, 72, 153, 0.7)"></stop>
          <stop offset="100%" stopColor="rgba(236, 72, 153, 0)"></stop>
        </radialGradient>
        <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5">
          <animate attributeName="fx" dur="21.5s" values="0%;3%;0%" repeatCount="indefinite"></animate>
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.7)"></stop>
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0)"></stop>
        </radialGradient>
      </defs>
      <rect 
        x="13.744%" 
        y="1.18473%" 
        width="100%" 
        height="100%" 
        fill="url(#Gradient1)" 
        transform="rotate(334.41 50 50)"
      >
        <animate attributeName="x" dur="20s" values="15%;0%;15%" repeatCount="indefinite"></animate>
        <animate attributeName="y" dur="21s" values="0%;15%;0%" repeatCount="indefinite"></animate>
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="27s" repeatCount="indefinite"></animateTransform>
      </rect>
      <rect 
        x="-2.17916%" 
        y="35.4267%" 
        width="100%" 
        height="100%" 
        fill="url(#Gradient2)" 
        transform="rotate(255.072 50 50)"
      >
        <animate attributeName="x" dur="23s" values="-15%;0%;-15%" repeatCount="indefinite"></animate>
        <animate attributeName="y" dur="24s" values="0%;25%;0%" repeatCount="indefinite"></animate>
        <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="22s" repeatCount="indefinite"></animateTransform>
      </rect>
      <rect 
        x="9.00483%" 
        y="14.5733%" 
        width="100%" 
        height="100%" 
        fill="url(#Gradient3)" 
        transform="rotate(139.903 50 50)"
      >
        <animate attributeName="x" dur="25s" values="0%;15%;0%" repeatCount="indefinite"></animate>
        <animate attributeName="y" dur="22s" values="0%;15%;0%" repeatCount="indefinite"></animate>
        <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="19s" repeatCount="indefinite"></animateTransform>
      </rect>
    </svg>
  )
}
