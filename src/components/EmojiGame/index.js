/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    currentStatus: false,
    clickedEmojisList: [],
    currentScore: 0,
    isCurrentHide: true,
    topScore: 0,
  }

  playAgainButtons = () => {
    this.setState({
      currentStatus: false,
      clickedEmojisList: [],
      currentScore: 0,
      isCurrentHide: true,
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  shuffledEmojisLists = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state

    const isEmojiPresent = clickedEmojisList.includes(id)

    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
      this.setState(prevState => ({currentStatus: !prevState.currentStatus}))
      this.setState({currentScore: clickedEmojisLength + 1})
    }
  }

  finishGameAndSetTopScore(clickedEmojisLengths) {
    const {topScore} = this.state
    let newTopScore = topScore

    if (clickedEmojisLengths > topScore) {
      newTopScore = clickedEmojisLengths
    }

    this.setState(prevState => ({
      currentScore: clickedEmojisLengths,
      isCurrentHide: !prevState.isCurrentHide,
      topScore: newTopScore,
    }))
  }

  render() {
    const currentEmojiType = this.shuffledEmojisList()
    const {currentScore, isCurrentHide, topScore} = this.state

    return (
      <div className="bg-container">
        <NavBar
          currentScore={currentScore}
          isCurrentHide={isCurrentHide}
          topScore={topScore}
        />
        <div className="background">
          {isCurrentHide ? (
            <ul className="unorder-list">
              {currentEmojiType.map(eachEmojisList => (
                <EmojiCard
                  key={eachEmojisList.id}
                  eachEmojisList={eachEmojisList}
                  emojiClick={this.shuffledEmojisLists}
                />
              ))}
            </ul>
          ) : (
            <WinOrLoseCard
              clickedEmojisLengths={currentScore}
              playAgainButt={this.playAgainButtons}
            />
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
