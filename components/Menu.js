import Link from 'next/link'
import React, {useState} from 'react'

const close = "../static/icons/close.png"
const menu = "../static/icons/menu.png"

const Menu = () => {
  const [imageMenu, setImageMenu] = useState(menu)
  const [hideMenu, setHideMenu] = useState("submenu hide")
  const [rotate, setRotate] = useState("rotate")
  
  const handleClickMenu = () => {
    if (imageMenu === menu) {
      setImageMenu(close)
      setHideMenu("submenu")
    } else{
      setImageMenu(menu)
      setHideMenu("submenu hide")
    }
  }
  const handleClickRotate = (props) => {
    props.className = "rotate"
    setRotate(props.className)
    console.log(rotate)
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
        <div className={hideMenu}>
          <a id="menuimg" onClick={handleClickMenu}>
            <img src={imageMenu} alt="Menu" className={rotate}/>
          </a>
          <a href="#navGrupamento" >GRUPAMENTO</a>
          <a href="#navBrigada" >BRIGADA</a>
          <a href="#navManejo" >MANEJO</a>
          <a href="#navTurismo" >TURISMO</a>
          <a href="#navContato" >CONTATO</a>
        </div>
      </nav>
    </div>
  )
}

export default Menu
