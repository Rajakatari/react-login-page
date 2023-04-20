import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  console.log(isLoggedIn)

  const text = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1>{text}</h1>
}

export default Message
