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
      <Link href="#header" as="/">
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
          <li id="menuimg"  onClick={handleClickMenu}>
              <img src={imageMenu} alt="Menu" />
          </li>
          <li>
            <a href="#navGrupamento" onClick={handleClickMenu}>GRUPAMENTO</a>
          </li>
          <li>
            <a href="#navBrigada" onClick={handleClickMenu}>BRIGADA</a>
          </li>
          <li>
            <a href="#navManejo" onClick={handleClickMenu}>MANEJO</a>
          </li>
          <li>
            <a href="#navTurismo" onClick={handleClickMenu}>TURISMO</a>
          </li>
          <li>
            <a href="#navContato" onClick={handleClickMenu}>CONTATO</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
