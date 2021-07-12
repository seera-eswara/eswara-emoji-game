import React, { useState } from "react"
import './index.css'
import NavBar from '../NavBar/'
import EmojiCard from '../EmojiCard/'
import WinOrLoseCard from '../WinOrLoseCard/'

interface Props{ 
    emojisList :   {id: number; emojiName: string; emojiUrl: string } [];
}



const EmojiGame: React.FC<Props> = (props) => {

    const [score,setScore]  = useState<number>(0)
    const [selectedEmojiList,setEmojiList] = useState<number[]>([])
    const [isWin,setWin] = useState<boolean>(false)
    const [isLose,setLose] = useState<boolean>(false)
    const [topScore, setTopScore] = useState<number>(0)
  const  onClickPlayAgain =  () => {
    setScore(0)
    setEmojiList([])
    setWin(false)
    setLose(false)

  }
    const onClickSetEmojiList = (id:number) =>{   

        if ( selectedEmojiList.indexOf(id) === -1 && score !== 11) {
            setEmojiList([...selectedEmojiList,id])
            setScore( score + 1 )           
        }else if( score === 11 ){
            setWin(true)
            setTopScore(score)
        }else{
            setLose(true)
            setTopScore(score)
        }
        
       
    }

   const {emojisList} = props
 const   suflledEmojiList = emojisList.sort(() => Math.random() - 0.5)
 
    return (<div className="bg">
        <NavBar isDisplayScore={!isLose && !isWin} score={score} topScore={topScore} />
        
       { !isLose && !isWin && <ul className="emojiItem">
        {suflledEmojiList.map((emoji) => <EmojiCard key={emoji.id} onClickSetEmojiList={onClickSetEmojiList} id={emoji.id} emojiName={emoji.emojiName} emojiUrl={emoji.emojiUrl} /> )}
        </ul> }
        { (isLose || isWin) &&
        <WinOrLoseCard onClickPlayAgain={onClickPlayAgain} isWon={isWin} isLose={isLose} score={score} />
}
        
        
    </div>)
}
export default EmojiGame