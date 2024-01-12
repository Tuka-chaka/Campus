import React from 'react'
import Header from '../components/Header'
import GraphInfo from '../components/GraphInfo'
import LineGraph from '../components/graphs/LineGraph'
import Navbar from '../components/Navbar'
import formatThousands from '../utils/ThousandsFormatter'

const Programs = ({data}) => {

  console.log(data)
  return (
    <div className='layout'>
      <Header text = 'Программы фонда' subtext='Обзор информации о различных программ, реализуемых фондом'/>
      <div className='card'>
        <h3>Стипендиальная программа фонда</h3>
        <GraphInfo suptext='всего' count={formatThousands(data.participants.slice(-1)[0].amount)} sidetext='студентов получают данную стипендию' subtext='01 - 31 апр. 2023г.'/>
        <LineGraph data={data.participants}/>
      </div>
      <div className='card'>
        <h3>Льготное кредитование</h3>
        <GraphInfo suptext='всего' count={formatThousands(data.part2.slice(-1)[0].amount)} sidetext='студентов получают данную стипендию' subtext='01 - 31 апр. 2023г.'/>
        <LineGraph data={data.part2}/>
      </div>
      <div className='card'>
        <h3>Бонусная программа фонда</h3>
        <GraphInfo suptext='всего' count={formatThousands(data.part3.slice(-1)[0].amount)} sidetext='студентов получают данную стипендию' subtext='01 - 31 апр. 2023г.'/>
        <LineGraph data={data.part3}/>
      </div>
      <Navbar page='programs'/>
      <div className='spacer'/>
    </div>
  )
}

export default Programs
