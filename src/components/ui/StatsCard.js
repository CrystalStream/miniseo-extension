import React from 'react'

export default function StatsCard(props) {
  const { metric } = props

  return (
    <div className="columns">
      <div className="column">
        <div className={`card ${props.color}`}>
          <header className="card-header">
            <p className="card-header-title">
              { metric.display_name }
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              <div className="score has-text-centered">
                <p>{ metric.points.passed } / { metric.points.total }</p>
              </div>
              <table className="table">
                <tbody>
                  {
                    Object.keys(metric.values).map(k => (
                      <tr key={k}>
                        <th>{k}</th>
                        <td>
                          <p>{metric.values[k]}</p>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
