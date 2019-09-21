import React from 'react'
import NotFound from '../../assets/img/404.png'

export default function StatsCard(props) {
  const { metric } = props

  function defaultNotFound(ev) {
    ev.target.src = NotFound
  }

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
                <p>{ metric.points.passed } of { metric.points.total } points</p>
              </div>
              <table className="table">
                <tbody>
                  {
                    Object.keys(metric.values).map(k => (
                      <tr key={k}>
                        <th>{k}</th>
                        <td>
                          {
                            k === "og:image" || metric.display_name.toLowerCase() === 'images' ?
                              <img src={metric.values[k]} onError={defaultNotFound} alt={k} width="150" /> :
                              <p>{metric.values[k]}</p>
                          }
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
