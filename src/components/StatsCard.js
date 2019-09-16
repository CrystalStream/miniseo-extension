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
              <div className="score has-text-centered">
                <p>10 / 10</p>
              </div>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Tag</th>
                    <td>Values</td>
                  </tr>
                  <tr>
                    <th>Tag</th>
                    <td>Values</td>
                  </tr>
                  <tr>
                    <th>Tag</th>
                    <td>Values</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
