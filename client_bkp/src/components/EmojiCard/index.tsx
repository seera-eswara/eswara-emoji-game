
import React from "react"
import './index.css'

interface Props{
    id: number; emojiName: string; emojiUrl: string ; onClickSetEmojiList: (id: number) => void;
}

const EmojiCard: React.FC <Props>  = ({id,emojiName,emojiUrl,onClickSetEmojiList}) => {

    const selectEmoji = () => { onClickSetEmojiList(id)}

    return (

    <li className="emojiCont" onClick={selectEmoji}>
    <img className="emojiImg" alt={emojiName} src={emojiUrl} />
   </li>
    


    )
}

export default EmojiCard