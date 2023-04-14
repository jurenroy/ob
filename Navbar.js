import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <img className='mini' style={{width: "15%", height: "12%", paddingTop: 10, paddingLeft: 10}} src={require('./Images/mini.png')} />
      <ul>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/enroll">Enroll</CustomLink>
        <CustomLink to="/enrollees">Enrollees</CustomLink>
        <CustomLink to="/profile">Profile</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}