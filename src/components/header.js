import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="Logotipo do FloripaJS" />
        </Link>
      </h1>

      <nav id="menu" class="menu">
        <ul
          class="menu-list"
          style={{
            listStyle: "none",
            display: "flex",
            fontSize: ".77rem",
            fontFamily: `OdudoMono, monospace`,
            fontWeight: "bold",
          }}
        >
          <li style={{ marginLeft: "2em" }}>
            <a
              href="#apresentacao"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Apresentação
            </a>
          </li>
          <li style={{ marginLeft: "2em" }}>
            <a
              href="#ultimos-artigos"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Últimos Artigos
            </a>
          </li>
          <li style={{ marginLeft: "2em" }}>
            <a
              href="#comunidade"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Comunidade
            </a>
          </li>
          <li style={{ marginLeft: "2em" }}>
            <a href="#meetup" style={{ textDecoration: "none", color: "#000" }}>
              Meetup
            </a>
          </li>
          <li style={{ marginLeft: "2em" }}>
            <a
              href="#open-source"
              style={{ textDecoration: "none", color: "#000" }}
            >
              Open-source
            </a>
          </li>
          <li style={{ marginLeft: "2em" }}>
            <a href="#videos" style={{ textDecoration: "none", color: "#000" }}>
              Vídeos
            </a>
          </li>
          <li style={{ marginLeft: "2em" }}>
            <a
              class="btn"
              href="#ajude"
              style={{
                textDecoration: "none",
                color: "#000",
                backgroundColor: "#40db4e",
                padding: "0.5em 1.5em",
                textTransform: "uppercase",
              }}
            >
              Ajude
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
