import Imagem from "./Imagem"

const Grupamento = () => (

    <div id="grupamento">
        <h1 className="titles">Grupamento Ambiental Maciço da Tijuca</h1>
        <h3 className="subtitle"> GAMT - RJ</h3>
        <p>
            O Grupamento Ambiental Maciço da Tijuca (GAMT), é composto por profissionais especializados com
            ampla experiência em uma gama de temas envolvendo o meio ambiente, atuamos principalmente nas áreas de
            Combate e prevenção a incêndios florestais, educação ambiental, manejo,
            manutenção, elaboração, implementação e sinalização de trilhas, manejo de espécies
            exóticas de fauna e flora, construção de estruturas em ambientes naturais como pontes,
            mirantes, decks, escadas entre outras.
            <br />
            Experiência comprovada de muitos anos trabalhando em parques referência em todo território nacional
            a exemplo no Parque Nacional da Tijuca, Parque Nacional de Itatiaia, Serra dos Órgãos, Pantanal, Sempre Vivas
            Marinho de Fernando de Noronha, Caparaó, Serra da Canastra, Serra do Cipó, entre outros.

        </p>
        <div className="img">
            <Imagem
                src="./static/slider/noronha-praia.jpg"
                alt="Manejo de trilha - Fernando de Noronha."
                horizontal={true}
            />
            <Imagem
                src="./static/slider/canastra-cachoeira.jpg"
                alt="Manejo de trilha - Serra da Canastra."
                horizontal={true}
            />
            <Imagem
                src="./static/slider/sempre-vivas.JPG"
                alt="Combate a incêndios - Parna Sempre Vivas."
                horizontal={true}
            />
            <Imagem
                src="./static/slider/serra-cipo.jpg"
                alt="Incêndios debelados em 10/2020 - Serra do Cipó."
                horizontal={true}
            />
            <Imagem
                src="./static/slider/itatiaia.jpg"
                alt="Manejo, combate e monitoramento - Parna Itatiaia."
                horizontal={true}
            />
            <Imagem
                src="./static/slider/pantanal.jpg"
                alt="Apoio no combate aos incêndios do Pantanal."
                horizontal={true}
            />
        </div>
        <p>
            O Grupamento Ambiental Maciço da Tijuca é uma associação sem fins lucrativos, constituído em 09 de outubro de 2018 e 
            tem por finalidade registrado em nosso estatuto:<br />
            O desenvolvimento econômico e socio ambiental e combate a pobreza;<br />
            A defesa preservação e conservação do meio ambiente e promoção do desenvolvimento sustentável;<br />
            O combate e prevenção de incêndios florestais; a implantação, manejo e remanejo de trilhas;<br />
            Manejo de remanejo de fauna e flora florestais; o treinamento e capacitação profissional socioambiental;<br />
            O desenvolvimento de pesquisa, normas técnicas e avaliação de tecnologias socioambientais.<br />
            Obedecendo os princípios da legalidade, impessoalidade, moralidade, publicidade, economicidade e da eficiência e não
            fará qualquer discriminação de raça, cor gênero ou religião.
            <br />
        </p>

        <div className="img">
            <Imagem
                src="./static/slider/17.jpg"
                alt="Vista aérea do morro do Tijuca Mirim"
                horizontal={true}
            />
            <Imagem
                src="./static/slider/19.jpg"
                alt="Ninho de Tapitis encontrados em trabalhos de prevenção"
                horizontal={true}
            />
        </div>
        <p>
            A associação se dedica às suas atividades mediante execução direta de projetos, programas, planos de ações
            correlatas e por meio da doação de recursos físicos, materiais, humanos e financeiros, ou ainda pela prestação
            de serviços intermediários de apoio a outras organizações sem fins lucrativos e a órgãos do setor público que atuem em áreas afins.
        </p>

        <div className="img">
            <Imagem
                src="./static/slider/8.jpg"
                alt="Preguiça recolhida em via e solta em floresta"
                horizontal={false}
            />
            <Imagem
                src="./static/slider/20.jpg"
                alt="Acompanhamento e suporte a pesquisas"
                horizontal={false}
            />
        </div>
    </div >
)

export default Grupamento
