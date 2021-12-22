import { useState } from "react"

const Imagem = ({ src, alt, horizontal }) => {
    const [fechar, setFechar] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const modal = () => {
        setFechar(true)
        
        console.log(src)
        if (fechar) {
            setShowModal(
                <div id="modal" className="modal" onClick={handleClose}>
                    <img src={src.replace("-mini", "")} />
                </div>
            )
        } else {
            setShowModal(<></>)
        }
    }
    const handleClose = () => {
        setShowModal(<></>) && setFechar(false)
    }

    return (
        <>
            {
                horizontal ?
                    <div >
                        <img className="imgHorizontal" src={src} alt={alt} onClick={modal} />
                        <span>{alt}</span>
                        {showModal}
                    </div>
                    :
                    <div >
                        <img className="imgVertical" onClick={modal} src={src} alt={alt} />
                        <span>{alt}</span>
                        {showModal}
                    </div>
            }

        </>
    )
}
export default Imagem
