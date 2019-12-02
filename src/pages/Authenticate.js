import React, { useEffect, useState } from 'react'
import {
  Card,
  Button,
  Flex,
  Box,
  Text,
  Image,
  Heading,
  Sidebar,
  Spinner,
  Input,
} from '../primitives'
import Utils from '../components/Utils'

const Login = ({ actions, location, history }) => {
  const cPage = location.pathname

  const [state, setState] = useState({
    token: '',
  })
  const [loading, setLoading] = useState(false)

  const handleInput = prop => e => {
    const value = e.target.value
    // console.log(prop, value)
    setState({
      ...state,
      [prop]: value,
    })
  }

  const Submit = () => {
    setLoading(true)
    return actions
      .me(state)
      .then(user => {
        setLoading(false)
        actions.setLocalStorage('token', state.token)
        history.push('/profile')
        window.location.reload()
      })
      .catch(e => {
        setLoading(false)
        console.error('REGISTER ERROR:', state, e)
      })
  }

  return (
    <Flex
      flexDirection="column"
      width={1}
      p={4}
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Heading> Token Login </Heading>
      <Text color="primary" p={2}>
        To protect your identity, we only require your token to login.
      </Text>
      <Flex
        flexDirection="column"
        width={[1, 1 / 2]}
        alignItems="center"
        justifyContent="center"
        p={2}
      >
        <Input
          disabled={loading}
          label="Token: "
          value={state.token}
          onChange={handleInput('token')}
        />
        <Button
          disabled={state.token.length < 1}
          m={3}
          type="primary"
          onClick={Submit}
        >
          LOGIN
        </Button>
      </Flex>
    </Flex>
  )
}

const Register = ({ actions, location, user, token, history }) => {
  const cPage = location.pathname

  const [state, setState] = useState({
    username: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleInput = prop => e => {
    const value = e.target.value
    setState({
      ...state,
      [prop]: value,
    })
  }

  const Submit = () => {
    setLoading(true)
    return actions
      .registerUsername(state)
      .then(({ user, token }) => {
        setLoading(false)
        actions.setLocalStorage('token', token.id)
        history.push('/profile')
        window.location.reload()
      })
      .catch(e => {
        setLoading(false)
        console.error('REGISTER ERROR:', state, e)
        setError(e.message)
      })
  }

  return (
    <Flex
      flexDirection="column"
      width={1}
      p={4}
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Heading> Username Registration </Heading>
      <Text color="primary" p={2}>
        {error ? error : 'To protect your identity, we only require a username to register.'}
      </Text>
      <Flex
        flexDirection="column"
        width={[1, 1 / 2]}
        alignItems="center"
        justifyContent="center"
        p={2}
      >
        <Input
          disabled={loading}
          label="Username: "
          value={state.username}
          onChange={handleInput('username')}
        />
        <Button
          disabled={state.username.length < 3}
          m={3}
          type="primary"
          onClick={Submit}
        >
          REGISTER
        </Button>
      </Flex>
    </Flex>
  )
}

const Authenticate = p => {

  if (p.user) {
    p.history.push('/profile')
    return <Text>Redirecting...</Text>
  }

  const r = <Register {...p} />
  const l = <Login {...p} />

  const [page, setPage] = useState(null)
  

  if (page) return page
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      p={4}
      width={[1, 2 / 3]}
    >
      <Heading>Have you been here before?</Heading>
      <Card flexDirection="column" m={2}>
        <Button type="simple" onClick={e => setPage(r)}>
          I need to register my username.
        </Button>
        <Button type="simple" onClick={e => setPage(l)}>
          I already have a account.
        </Button>
      </Card>
    </Flex>
  )
}

export default Authenticate
