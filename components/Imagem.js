import Modal from "./Modal"

const Imagem = ({ src, alt, horizontal }) => {
    const modalImage = () => {
        <Modal url={src} legenda={alt}/>
    }

    return (
        <>
            {
                horizontal ?
                    <div >
                        <img className="imgHorizontal" onClick={modalImage} src={src} alt={alt} />
                        <span>{alt}</span>
                    </div>
                    :
                    <div >
                        <img className="imgVertical" onClick={modalImage} src={src} alt={alt} />
                        <span>{alt}</span>
                    </div>
            }

        </>
    )
}
export default Imagem
