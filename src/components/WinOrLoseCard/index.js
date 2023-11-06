// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {clickedEmojisLengths, playAgainButt} = props
  const playAgainButton = () => {
    playAgainButt()
  }

  let image = ''
  let heading = ''
  let alter = ''
  let paragraphText = ''
  if (clickedEmojisLengths === 12) {
    image = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    heading = 'Won'
    alter = 'win or lose'
    paragraphText = 'Best Score'
  } else {
    image = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    heading = 'Lose'
    alter = 'win or lose'
    paragraphText = 'Score'
  }

  return (
    <div className="bg-won-container">
      <div className="left-container">
        <h1 className="won-heading"> You {heading}</h1>
        <p className="won-paragraph">{paragraphText}</p>
        <p className="score">{clickedEmojisLengths}/12</p>
        <button
          className="start-again-button"
          type="button"
          onClick={playAgainButton}
        >
          Play Again
        </button>
      </div>
      <img className="won-lose-image" alt={alter} src={image} />
    </div>
  )
}

export default WinOrLoseCard
