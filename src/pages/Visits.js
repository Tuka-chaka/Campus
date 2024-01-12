import React from 'react'
import Header from '../components/Header'
import Dropdown from '../components/ui/Dropdown'
import GraphInfo from '../components/GraphInfo'
import LineGraph from '../components/graphs/LineGraph'
import PagesBarChart from '../components/graphs/PagesBarChart'
import Navbar from '../components/Navbar'

const Visits = ({data}) => {
  console.log(data)
  return (
    <div className='layout'>
      <Header text = 'Посещаемость' subtext='Информация о посещаемости и активности пользователей'/>
      <div className='card'>
        <div className='dropdown_container'>
          <Dropdown text='Текущий месяц'/>
          <Dropdown text='моб. прил.'/>
        </div>
        <h3>Посещения</h3>
        <GraphInfo suptext='в среднем' count='3867' sidetext='посетителей' subtext='01 - 31 апр. 2023г.'/>
        <LineGraph data={data.participants}/>
        <div className='bordered'/>
        <h3>Часто просматриваемые разделы</h3>
        <GraphInfo suptext='часто просматриваемый раздел' count='Раздел 1'/>
        <PagesBarChart/>
        <div className='bordered'/>
        <h3>Пользователи по регионам</h3>
        <GraphInfo suptext='всего' count='500 000' sidetext='63% с прошлого месяца'/>
        <PagesBarChart/>
      </div>
      <Navbar page='visits'/>
      <div className='spacer'/>
    </div>
  )
}

export default Visits
