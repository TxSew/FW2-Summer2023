import { useNavigate } from 'react-router-dom'

function AuthenticationNav() {
     const nav = useNavigate()
      return nav('/')
 }

export default AuthenticationNav