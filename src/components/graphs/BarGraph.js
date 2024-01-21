import React from 'react'
import { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import sortMonths from '../../utils/MonthsSorter'

const BarGraph = ({data, secondDataset = null}) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] })

    useEffect(() => {
        setChartData(secondDataset? {labels: sortMonths(data).map((data) => data.month).slice(-10), datasets: [{
          label: 'Веб',
          data: sortMonths(data).map((data) => data.amount).slice(-10),
          borderColor: '#F52D30',
          backgroundColor: '#F52D30',
        }, {
          label: 'Моб. приложение',
          data: sortMonths(secondDataset).map((data) => data.amount).slice(-10),
          borderColor: '#FE7D81',
          backgroundColor: '#FE7D81',
        }]}
        :
        {labels: sortMonths(data).map((data) => data.month).slice(-10), datasets: [{
          label: 'Количество',
          data: sortMonths(data).map((data) => data.amount).slice(-10),
          borderColor: '#F52D30',
          backgroundColor: '#F52D30',
        }]})
      }, [data, secondDataset])
  
    return (
        <div className='graph_container'>
        <Bar
            data={chartData}
            options={
              {scales: {
                x: {
                  stacked: true,
                  grid: {
                    display: false,
                  }
                },
                y: {
                  stacked: true,
                  grid: {
                    display: false,
                  }
                }
             },
              barThickness: 16,
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

export default BarGraph
