import Imagem from "./Imagem"

const Grupamento = () => (

    <div id="grupamento">
        <h1 className="titles">Grupamento Ambiental Maciço da Tijuca</h1>
        <h3 className="subtitle"> GAMT - RJ</h3>
        <p>
            O (G A M T) Grupamento Ambiental Maciço da Tijuca, é um grupo de profissionais especializados com
            ampla experiência em uma gamma de temas envolvendo o meio ambiente, atuamos principalmente nas áres de
            Combate e prevenção a incêndios florestais, educação ambiental, manejo,
            manutenção, elaboração, implementação e sinalização de trilhas, manejo de espécies
            exóticas de fauna e flora, construção de estruras em ambientes naturais como pontes,
            mirantes, decks, escadas entre outras.
            <br />
            Experiência conprovada de muitos anos trabalhando em parques referência em todo território nacional
            principalmente no Parque Nacional da Tijuca, Parque Nacional de Itatiaia, Serra dos Orgãos e outros.

        </p>
        <h5></h5>
        <p>
            O Grupamento Ambiental Macico da Tijuca é uma associação sem fins lucrativos, constituído em 09 de outubro de 2018,
            tem por finalidade resgistrado no nosso estatudo o desenvolvimento econômico e socio ambiental e combate a pobreza;
            a defesa preservação e conservação do meio ambiente e promoção do desenvolvimento sustentável;
            o combate e prevenção de incêndios florestais em todo território nacional; a implantação, manejo e remanejo de trilhas;
            manejo de remanejo de fauna e flora florestais; o treinamento e capacitação profissional socioambiental;
            e o desenvolvimento de pesquisa, normas técnicas e avaliação de tecnologias socioambientais.
            Obedecendo os princípios da legalidade, impessoalidade, moralidade, publicidade, economicidade e da eficiência e não
            fará qualquer discriminação de raça, cor gênero ou religião.
            <br />
        </p>

        <div className="img">
            <Imagem
                src="./static/slider/17.JPG"
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
            de serviços intermediários de apoio a outras organizações sem fins lucrativos e a órgãos so setor público que atuem em áreas afins.
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
