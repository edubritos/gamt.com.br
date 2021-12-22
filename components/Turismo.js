import Imagem from "./Imagem"

const Turismo = () => (
    <div id="turismo">
        <h2 className="titles">Turismo</h2>
        <h4 className="subtitle">Guiamentos</h4>
        <p>
            A GAMT organiza lindos passeios privados nas mais interessantes trilhas 
            do Rio de Janeiro. Nos diferenciamos por levar você, junto com sua 
            família e amigos, na data de sua escolha, para trilhar caminhos 
            inesquecíveis com nossa especializada e experiente equipe de campo.
            Nosso foco é oferecer oportunidade de lazer em ambientes naturais 
            para pessoas que desejam explorar a mata com segurança, tranquilidade 
            e respeito ao meio ambiente.
            Todo tipo de público é bem-vindo em nossos passeios, desde crianças 
            até os mais aventureiros, já que oferecemos diversos roteiros
            especiais, que podem ser leves caminhadas ou subida dos principais 
            picos do Rio.
            <br /><br />
            Conheça nossos roteiros e escolha uma data!
            <br />
        </p>
        <br />
        <div className="img">
            <Imagem
                src="./static/images/40-mini.jpg"
                alt="Vista do mirante da Cascatinha no setor floresta, parque nacional da Tijuca."
                horizontal={true}
            />
            <Imagem
                src="./static/images/36-mini.jpg"
                alt="Vista da Pedra Bonita para pedra da Gávea."
                horizontal={true}
            />
            <Imagem
                src="./static/images/37-mini.jpg"
                alt="Agulha do Diabo, vista do mirante do Inferno."
                horizontal={true}
            />
            <Imagem
                src="./static/images/38-mini.jpg"
                alt="Nascer do sol na Pedra o Sino."
                horizontal={true}
            />
        </div>
    </div>
)

export default Turismo