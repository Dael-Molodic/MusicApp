import React from 'react'
import { NavLink } from 'react-router-dom'
import "./AnotherOptionButton.css"

function AnotherOptionButton( {action, questionTxt} ) {
  return (<>
    <div className="section-line"></div>
    <div className="question-txt">{questionTxt}</div>
    <NavLink className='AnotherOptionButton' to={`/Conect/${action.replace(" ", "_")}`} replace>{action}</NavLink>
    </>)
}

export default AnotherOptionButton
