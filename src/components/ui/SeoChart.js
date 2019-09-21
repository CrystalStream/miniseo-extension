import React from 'react'
import { BarChart, Bar, Tooltip, XAxis, YAxis, LabelList } from 'recharts';

export default function SeoChart(props) {
  const maxValue = props.metrics
  .reduce((acc, cv) => {
    if (acc.uv > cv.uv) return acc.uv
    return cv
  }, props.metrics[0].uv)

  return (
    props.metrics ? (
      <div className="chart-container">
        <p className="points"><span>{props.points[0]}</span> of <span>{props.points[1]}</span> points</p>
        <progress className="progress is-success" value={props.points[0]} max={props.points[1]}>{props.points[1]}</progress>
        <BarChart width={400} height={250} data={props.metrics}>
          <XAxis dataKey="title" />
          <YAxis domain={[0, maxValue + 5]}/>
          <Tooltip label="name" />
          <Bar dataKey="uv">
            <LabelList dataKey="name" position="top" />
          </Bar>
        </BarChart>
      </div>
    ) : null
  )
}
