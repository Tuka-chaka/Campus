import React from 'react'
import Header from '../components/Header'
import GraphInfo from '../components/GraphInfo'
import LineGraph from '../components/graphs/LineGraph'
import Navbar from '../components/Navbar'
import formatThousands from '../utils/ThousandsFormatter'
import sortMonths from '../utils/MonthsSorter'

const Programs = ({data}) => {

  return (  data ? 
    <>
    <div className='layout'>
      <Header text = 'Программы фонда' subtext='Обзор информации о различных программ, реализуемых фондом' data={data}/>
      <div className='card'>
        <h3>Стипендиальная программа фонда</h3>
        <GraphInfo suptext='всего' count={formatThousands(sortMonths(data.fundStipend).slice(-1)[0].amount)} sidetext='студентов получают данную стипендию'/>
        <LineGraph data={data.fundStipend}/>
      </div>
      <div className='card'>
        <h3>Льготное кредитование</h3>
        <GraphInfo suptext='всего' count={formatThousands(sortMonths(data.fundPrivilege).slice(-1)[0].amount)} sidetext='студентов получают данную стипендию'/>
        <LineGraph data={data.fundPrivilege}/>
      </div>
      <div className='card'>
        <h3>Бонусная программа фонда</h3>
        <GraphInfo suptext='всего' count={formatThousands(sortMonths(data.fundBonus).slice(-1)[0].amount)} sidetext='студентов получают данную стипендию'/>
        <LineGraph data={data.fundBonus}/>
      </div>
      <div className='spacer'/>
    </div>
    <Navbar page='programs'/>
    </>
  : <></>)
}

export default Programs
