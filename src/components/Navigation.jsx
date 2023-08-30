import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <div>
        <Link to={'/home'}>
        <h1>Tempo UTT</h1>
        </Link>
        <Link to='/register'> Register </Link>    
    </div> 
  )
}

