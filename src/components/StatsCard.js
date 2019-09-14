import React from 'react'

export default function StatsCard(props) {

  return (
    <div className="columns">
      <div className="column">
        <div className={`card ${props.color}`}>
          <header className="card-header">
            <p className="card-header-title">
              Component
            </p>
            {/* <span className="card-header-icon">
              <span className="icon">
                <span className="icon-check-square"></span>
                <span className="icon-x-square"></span>
              </span>
            </span> */}
          </header>
          <div className="card-content">
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}