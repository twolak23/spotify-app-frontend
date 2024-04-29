import { Fragment } from "react"
import { Link } from "react-router-dom"


const StartPage = () => {
  return (
    <Fragment>
      <Link to="/register"><button>Register</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/dashboard"><button>Dashboard</button> </Link>
    </Fragment>
  )
}
export default StartPage;