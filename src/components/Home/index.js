// Write your code here
import {Component} from 'react'

import './index.css'

import Message from '../Message'

import Logout from '../Logout'

import Login from '../Login'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  changeHeadingAndButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    console.log(isLoggedIn)

    const buttonTxt = isLoggedIn ? <Logout /> : <Login />

    return (
      <div className="bg-container">
        <div className="inner-card">
          <Message isLoggedIn={isLoggedIn} />

          <button
            className="button"
            type="button"
            onClick={this.changeHeadingAndButton}
          >
            {buttonTxt}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
