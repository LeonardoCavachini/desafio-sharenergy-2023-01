import { useEffect } from "react"
import Form from "../components/Form"
import Header from '../components/Header'
import { SectionContainer } from '../components/SectionContainer'

const Login = () => {
  useEffect(() => {
    localStorage.clear()
  },[])

  return (
    <>
      <SectionContainer>
        <Form />
      </SectionContainer>
    </>
  )
}

export default Login