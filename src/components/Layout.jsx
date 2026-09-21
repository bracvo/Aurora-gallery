import { NavLink } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">Aurora Gallery</div>
        <nav className="main-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/collections">Collections</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main className="page animate-in">
        {children}
      </main>
    </div>
  )
}
