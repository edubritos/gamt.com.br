const Contato = () => (
    <div id="contato">
        <h2 className="titles">Contato</h2>
        <p>
            Entre em contato por e-mail, telefone, Whatasapp ou redes sociais e 
            tire suas dúvidas!
        </p>
        <div className="icons">
            <a href="https://www.facebook.com/gamt_rj/" target="_blank">
                <img src="../static/icons/facebook.png" height="80" width="80" alt="Facebook" />
            </a>
            <a href="https://instagram.com/gamt_rj" target="_blank">
                <img src="../static/icons/insta.png" height="80" width="80" alt="Twitter" />
            </a>
            <a href="mailto:gamtrj@gmail.com" target="_blank">
                <img src="../static/icons/email.png" height="80" width="80" alt="E-mail" />
            </a>
            <a href=" https://wa.me/+5521993588517" target="_blank">
                <img src="../static/icons/whatsapp.png" height="95" width="95" alt="Whatasapp" />
            </a>
        </div>
    </div>
)

export default Contato