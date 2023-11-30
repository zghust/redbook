import { useEffect } from 'react'
import { hasToken } from '../utils/storage'
import { useNavigate } from 'react-router-dom'

function Authrouter({ children }) {
  const navigate = useNavigate()
  useEffect(() => {
    const islogin = hasToken()

    if (!islogin) {
      console.log('请登录')
      // navigate('/login')
    }
  }, [navigate])

  return children
}
export default Authrouter
