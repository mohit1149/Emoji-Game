// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmojisList, emojiClick} = props
  const {emojiName, emojiUrl, id} = eachEmojisList
  const onClickEmoji = () => {
    emojiClick(id)
  }

  return (
    <li className="bg-container-emoji-card">
      <button className="emoji-button" type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
