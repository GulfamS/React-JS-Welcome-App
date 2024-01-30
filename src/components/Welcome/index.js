import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  buttonText = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getButton = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttonText = this.getButton()
    return (
      <div className="container">
        <h1 className="welcome-heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div>
          <button className="button" type="button" onClick={this.buttonText}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
