import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  changeSearch = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="inner">
          <div className="innertext">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="search" className="label">
              Enter the Phrase
            </label>
            <input
              type="search"
              id="search"
              placeholder="Enter the Phrase"
              className="search"
              onChange={this.changeSearch}
            />
            <div className="count">
              <p>No.of letters: {count}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="logo"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
