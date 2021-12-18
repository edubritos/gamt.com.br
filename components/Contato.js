const Contato = () => (
    <div id="contato">
        <h2 className="titles">Contato</h2>
        <p>
            Entre em contato por e-mail, telefone, Whatasapp ou redes sociais e 
            converse conosco!
        </p>
        <div className="icons">
            <a href="https://fb.me/gamtrj/" target="_blank">
                <img src="../static/icons/facebook.png" height="80" width="80" alt="Facebook" />
            </a>
            <a href="https://instagram.com/gamt_rj/" target="_blank">
                <img src="../static/icons/insta.png" height="80" width="80" alt="Twitter" />
            </a>
            <a href="mailto:gamtrj@gmail.com" target="_blank">
                <img src="../static/icons/email.png" height="80" width="80" alt="E-mail" />
            </a>
            <a href=" https://wa.me/+5521993588517" target="_blank">
                <img src="../static/icons/whatsapp.png" height="95" width="95" alt="Whatasapp" />
            </a>
        </div>
        <h4 className="subtitle" style={{textAlign:"center"}}>Apoio</h4>
        <div className="parceiras">
            <a href="https://www.icmbio.gov.br/portal/" >
                <img src="../static/icons/icmbio.jpg" 
                height="100" 
                alt="Instituto Chico Mendes da Biodiversidade" 
                 />
            </a>
            <a href="https://prefeitura.rio/">
                <img src="../static/icons/prefeitura-rio.png" 
                height="100" 
                alt="Prefeitura do Rio"
                className="border" />
            </a>
            <a href="http://www.inea.rj.gov.br/">
                <img src="../static/icons/inea.jpg" 
                height="100" 
                alt="Inea" 
                />
            </a>
            <a href="http://mosaico-carioca.blogspot.com/">
                <img src="../static/icons/mosaico-carioca.png" 
                height="100" 
                alt="Mosaico Carioca"
                />
            </a>
            <a href="https://www.instagram.com/ibs_bikes/">
                <img src="../static/icons/ibs.jpg" 
                height="100" 
                alt="IBS" 
                />
            </a>
            <a href="https://parquenacionaldatijuca.rio/">
                <img src="../static/icons/pnt.png" 
                height="100" 
                alt="Parque Nacional da Tijuca" 
                />
            </a>
        </div>
    </div>
)

export default Contato