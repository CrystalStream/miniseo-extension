import React from 'react'

export default function StatsCard(props) {

  return (
    <div className="column">
      <div className={`card ${props.color}`}>
        <header className="card-header">
          <p className="card-header-title">
            Component
          </p>
          <a href="#" className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
      </div>
    </div>
  )
}
