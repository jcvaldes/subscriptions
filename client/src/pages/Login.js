import React, { useState, useContext } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { UserContext } from '../context'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // context
  const [state, setState] = useContext(UserContext)
  const navigate = useNavigate()
  const handleClick = async (e) => {
    // console.log("email and password", email, password);
    try {
      e.preventDefault()
      const { data } = await axios.post('/login', {
        email,
        password
      })
      console.log(data)

      if (data.error) {
        toast.error(data.error)
      } else {
        setEmail('')
        setPassword('')
        setState(data)
        localStorage.setItem('auth', JSON.stringify(data))
        navigate('/account')
      }
    } catch (err) {
      console.log(err)
      toast.error('Something went wrong. Try again')
    }
  }

  return (
    <div className="d-flex justify-content-center" style={{ height: '80vh' }}>
      <div className="align-items-center d-flex container">
        <div className="row col-md-6 offset-md-3 text-center">
          <h1 className="fw-bold pt-5">Login</h1>
          <p className="lead pb-4">
            Access your subscriptions. Anytime. Anywhere.
          </p>

          <div className="form-group">
            <Input
              label="Email"
              type="email"
              value={email}
              setValue={setEmail}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              setValue={setPassword}
            />

            <div className="d-grid">
              <Button
                handleClick={handleClick}
                type="danger"
                text="Login"
                size="sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
