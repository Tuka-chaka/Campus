import React, { useEffect } from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import { useState } from 'react';

const CampusMembersGraph = ({data}) => {

  const [chartData, setChartData] = useState({ labels: [], datasets: [] })

  useEffect(() => {
    setChartData({labels: data.map((data) => data.month).slice(-6), datasets: [{
      label: 'label',
      data: data.map((data) => data.amount).slice(-6)
    }]})
  }, [data])


  return (
    <div className='graph_container'>
      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  )
}

export default CampusMembersGraph
