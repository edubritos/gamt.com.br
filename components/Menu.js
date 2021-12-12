import Link from 'next/link'
import React, { useState } from 'react'

const close = "../static/icons/close.png"
const menu = "../static/icons/menu.png"

const Menu = () => {
  const [imageMenu, setImageMenu] = useState(menu)
  const [hideMenu, setHideMenu] = useState("submenu hide")

  const handleClickMenu = () => {
    if (imageMenu === menu) {
      setImageMenu(close)
      setHideMenu("submenu")
    } else {
      setImageMenu(menu)
      setHideMenu("submenu hide")
    }
  }

  return (
    <div>
      <Link href="/" as="/">
        <a title="Topo">
          <img
            className="logo"
            src="../static/icons/logo.png"
            width="100" height="100"
            alt="Logotipo"
          />
        </a>
      </Link>
      <nav className="menu" >
        <ul className={hideMenu}>
          <li id="menuimg" onClick={handleClickMenu}>
            <img src={imageMenu} alt="Menu" />
          </li>
          <li>
            <a href="#grupamento" onClick={handleClickMenu}>GRUPAMENTO</a>
          </li>
          <li>
            <a href="#brigada" as="/" onClick={handleClickMenu}>BRIGADA</a>
          </li>
          <li>
            <a href="#manejo" onClick={handleClickMenu}>MANEJO</a>
          </li>
          <li>
            <a href="#turismo" onClick={handleClickMenu}>TURISMO</a>
          </li>
          <li>
            <a href="#contato" onClick={handleClickMenu}>CONTATO</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
