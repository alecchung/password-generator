import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BoltIcon from '@mui/icons-material/Bolt';
import './app.css'

function App() {
  const [password, setPassword] = useState('Password')
  const [length, setLength] = useState(16)
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const number = "0123456789"
  const symbol = "@#$%^&*()_+~{}|[]-="
  const allChars = upperCase + lowerCase + number + symbol

  const createPassword = () => {
    let psw = ''
    psw += upperCase[Math.floor(Math.random() * upperCase.length)]
    psw += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    psw += number[Math.floor(Math.random() * number.length)]
    psw += symbol[Math.floor(Math.random() * symbol.length)]
    while (psw.length < length) {
      psw += allChars[Math.floor(Math.random() * allChars.length)]
    }
    (document.querySelector('#password')! as HTMLInputElement).value = psw
    setPassword(psw)
  }

  const copyPassword = () => {
    (document.querySelector('#password')! as HTMLInputElement).select()
    // document.execCommand('copy')
    navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div className="container">
        <h1>
          Generate a <br />
          <span>Random Password</span>
        </h1>
        <div className="display">
          <input type="text" id="password" placeholder={password} />
          <ContentCopyIcon
            onClick={copyPassword}
            sx={{
              width: 50,
              cursor: "pointer",
              color: "#019f55"
            }} />
        </div>
        <div className="length">
          <span>Length: </span>
          <input type="number" id="length" defaultValue={16} onChange={e => { setLength(+e.target.value), createPassword() }} />
        </div>
        <button onClick={createPassword}>
          <BoltIcon
            sx={{
              width: "28px",
              marginRight: "10px"
            }} />
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
