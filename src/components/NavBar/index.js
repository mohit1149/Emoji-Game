// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {topScore, currentScore, isCurrentHide} = this.props

    return (
      <navbar className="navbar-container">
        <div className="left-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="emoji">Emoji Game</h1>
        </div>

        {isCurrentHide && (
          <div className="right-container">
            <p className="emoji">Score: {currentScore}</p>
            <p className="emoji">Top Score: {topScore}</p>
          </div>
        )}
      </navbar>
    )
  }
}

export default NavBar
