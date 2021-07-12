
import React from "react"
import './index.css'

interface Props{
    isDisplayScore: boolean;
    score: number;
    topScore: number
}

const NavBar : React.FC<Props>  = ({isDisplayScore,score,topScore}) => {
    console.log(isDisplayScore)

    return (
        <div className="navBarCont">
            <div className="leftNavCont">
            <img alt="logo" src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png" />
            <p>Emoji Game</p>
            </div>
          { isDisplayScore &&
           <div className="leftNavCont">
            <p className="score" >Score: {score}</p>
            <p className="score" >Top Score: {topScore}</p>
            </div>
          }
        </div>
    )

}

export default NavBar