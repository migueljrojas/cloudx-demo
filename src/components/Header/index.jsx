import { Container } from "react-bootstrap";

export function Header() {
  return (
    <header className="navbar sticky-top header bg-white">
      <Container fluid>
        <button className="navbar-toggler header__toggle" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="header__user-menu">
          <a href="#" className="header__user-menu-item">
            <i className="bi bi-person-fill" />
            <span>admin admin</span>
          </a>
          <a href="#" className="header__user-menu-item">
            <i className="bi bi-house-fill" />
            <span>Int_Website</span>
          </a>
        </nav>
      </Container>
    </header>
  )
}