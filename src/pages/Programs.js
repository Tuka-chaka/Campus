import React from 'react'
import Header from '../components/Header'
import GraphInfo from '../components/GraphInfo'
import LineGraph from '../components/graphs/LineGraph'
import Navbar from '../components/Navbar'

const Programs = ({data}) => {

  console.log(data)
  return (
    <div className='layout'>
      <Header text = 'Программы фонда' subtext='Обзор информации о различных программ, реализуемых фондом'/>
      <div className='card'>
        <h3>Стипендиальная программа фонда</h3>
        <GraphInfo suptext='всего' count='34 990' sidetext='студентов получают данную стипендию' subtext='01 - 31 апр. 2023г.'/>
        <LineGraph data={data.participants}/>
      </div>
      <div className='card'>
        <h3>Льготное кредитование</h3>
        <GraphInfo suptext='всего' count='34 990' sidetext='студентов получают данную стипендию' subtext='01 - 31 апр. 2023г.'/>
        <LineGraph data={data.participants}/>
      </div>
      <div className='card'>
        <h3>Бонусная программа фонда</h3>
        <GraphInfo suptext='всего' count='34 990' sidetext='студентов получают данную стипендию' subtext='01 - 31 апр. 2023г.'/>
        <LineGraph data={data.participants}/>
      </div>
      <Navbar page='programs'/>
      <div className='spacer'/>
    </div>
  )
}

export default Programs
