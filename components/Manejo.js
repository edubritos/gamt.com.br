import Imagem from "./Imagem"

const Manejo = () => (

    <div id="manejo">
        <h1 className="titles">Manejo</h1>
        <h5 className="subtitle">A importância do manejo de trilhas</h5>
        <p>
            O Ecoturismo e as demais atividades praticadas junto a natureza
            tendem a se massificar, gerando como consequência o aumento do
            impacto e a descaracterização de muitos atrativos, tanto pelo
            aumento das infraestruturas de suporte, quanto da perda da
            biodiversidade e das características responsáveis pela vocação
            ecoturística local.
            <br /><br />
            As trilhas são caminhos existentes ou estabelecidos, com diferentes
            formas, comprimentos e larguras, que possuam o objetivo aproximar o
            visitante ao ambiente natural, ou conduzi-lo a um atrativo
            específico, possibilitando seu entretenimento ou educação através
            de sinalizações ou de recursos interpretativos.
            <br /><br />
            As trilhas podem ser classificadas quanto a função (vigilância,
            recreativa, educativa, interpretativa e de travessia), quanto à
            forma (circular, oito, linear e atalho), quanto ao grau de
            dificuldade (caminhada leve, moderada e pesada) e quanto à
            declividade do relevo (ascendentes, descendentes ou irregulares).
        </p>
        <div className="img">
            <Imagem
                src="./static/images/35-mini.jpg"
                alt="Sinalização de trilhas."
                horizontal={true}
            />
            <Imagem
                src="./static/images/18-mini.jpg"
                alt="Reaproveitamento de madeira caída."
                horizontal={true}
            />
        </div>
        <h5 className="subtitle">Profissionais capacitados</h5>
        <p>
            Profissionais treinados e capacitados em área florestal, especializados em
            manejo de espécies exóticas, manejo de animais silvestres, manejo e
            poda arbórea, limpeza de áreas, replantio, recuperação de áreas degradadas,
            entre outras.
        </p>
        <div className="img">
            <Imagem
                src="./static/images/32-mini.jpg"
                alt="Remoção de abelhas com e sem ferrão."
                horizontal={true}
            />
            <Imagem
                src="./static/images/33-mini.jpg"
                alt="Treinamento em primeiros socorros."
                horizontal={true}
            />
            <Imagem
                src="./static/images/34-mini.jpg"
                alt="Podas arbóreas."
                horizontal={true}
            />
            <Imagem
                src="./static/images/15-mini.jpg"
                alt="Tratamento de madeira para móveis rústicos."
                horizontal={true}
            />
        </div>
        
        <h5 className="subtitle">Construção de estruturas</h5>
        <p>
            Ao decorrer do trabalho de manejo de trilha para que possa haver
            um equilíbrio entre a visitação, manutenção e preservação, em trechos
            alagados, erodidos, em transposição de rios ou riachos, trechos com difícil acesso, existem estruturas
            que facilitam o acesso a visitação, como por exemplo: pontes, escadas, passadas, mirantes,
            facilitadores (correntes, cabos de aço, degraus), essas estruturas garantem
            a segurança e a preservação gerando mínimo impacto possível.
        </p>
        <div className="img">
            <Imagem
                src="./static/images/24-mini.jpg"
                alt="Passada em área alagada."
                horizontal={false}
            />
            <Imagem
                src="./static/images/25-mini.jpg"
                alt="Ponte em madeira."
                horizontal={false}
            />
            <Imagem
                src="./static/images/28-mini.jpg"
                alt="Construção de ponte pênsil."
                horizontal={true}
            />
            <Imagem
                src="./static/images/29-mini.jpg"
                alt="Conclusão de ponte pênsil."
                horizontal={true}
            />
            <Imagem
                src="./static/images/26-mini.jpg"
                alt="Escada de madeira em terreno erodido."
                horizontal={true}
            />
            <Imagem
                src="./static/images/31-mini.jpg"
                alt="Conclusão de estrutura."
                horizontal={false}
            />
        </div>
    </div >
)


export default Manejo