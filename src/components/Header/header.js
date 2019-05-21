import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.scss"
import logo from "../../images/logo.svg"

const Header = () => {
  const menuItems = [
    { title: "Apresentação", tag: "apresentacao" },
    { title: "Últimos Artigos", tag: "ultimos-artigos" },
    { title: "Comunidade", tag: "comunidade" },
    { title: "Meetup", tag: "meetup" },
    { title: "Open-source", tag: "open-source" },
    { title: "Vídeos", tag: "videos" },
    { title: "Ajude", tag: "ajude", className: "button" },
  ]

  return (
    <header>
      <div className={styles.container}>
        <Link to="/">
          <img src={logo} alt="Logotipo do FloripaJS" className={styles.logo} />
        </Link>

        <nav class={styles.menu}>
          <ul class={styles.menuList}>
            {menuItems.map(item => (
              <li>
                <a href={`#${item.tag}`} className={item.className}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.headerTitle}>
          A maior comunidade front-end de Florianópolis
        </h1>
        <a href="#conheca" className="button">
          Conheça
        </a>
      </div>
    </header>
  )
}

export default Header
