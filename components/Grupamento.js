import Imagem from "./Imagem"

const Grupamento = () => (

    <div id="grupamento">
        <h1 className="titles">Grupamento Ambiental Maciço da Tijuca</h1>
        <h3 className="subtitle"> GAMT - RJ</h3>
        <p>
            O Grupamento Ambiental Maciço da Tijuca (GAMT) é uma associação sem fins lucrativos na
            forma jurídica de organização da sociedade civil, constituída em outubro de 2018, voltada
            para preservação ambiental e manejo sustentável, é composta por profissionais especializados
            com ampla experiência prática em desenvolver projetos envolvendo o meio ambiente, com foco
            nas áreas: de combate e prevenção a incêndios florestais; educação ambiental; formação de
            brigadistas e equipes de manejo de trilha; manejo sustentável; manutenção, elaboração, implementação
            e sinalização de trilhas; manejo de espécies nativas e exóticas de fauna e flora; construção
            de estruturas em ambientes naturais; instalação de facilitadores em trilha; construção de pontes
            mirantes, decks, escadas, passagens em áreas alagadas entre outras.
            <br />
            Experiência comprovada em muitos anos trabalhando em parques referência em todo território nacional
            a exemplo no Parque Nacional da Tijuca, Parque Nacional de Itatiaia, Serra dos Órgãos, Parque Nacional
            do Pantanal Matogrossense, Parque Nacional Sempre Vivas, Parque Nacional Marinho de Fernando de Noronha,
            Parque Nacional do Caparaó, Parque Nacional da Serra da Canastra, Parque Nacional da Serra do Cipó, entre
            outras unidades federais, estaduais e municipais.
        </p>
        <div className="img">
            <Imagem
                src="./static/images/noronha-praia-mini.jpg"
                alt="Manejo de trilha - Fernando de Noronha."
                horizontal={true}
            />
            <Imagem
                src="./static/images/canastra-cachoeira-mini.jpg"
                alt="Manejo de trilha - Serra da Canastra."
                horizontal={true}
            />
            <Imagem
                src="./static/images/sempre-vivas-mini.jpg"
                alt="Combate a incêndios - Parna Sempre Vivas."
                horizontal={true}
            />
            <Imagem
                src="./static/images/serra-cipo-mini.jpg"
                alt="Incêndios debelados em 10/2020 - Serra do Cipó."
                horizontal={true}
            />
            <Imagem
                src="./static/images/itatiaia-mini.jpg"
                alt="Manejo, combate e monitoramento - Parna Itatiaia."
                horizontal={true}
            />
            <Imagem
                src="./static/images/pantanal-mini.jpg"
                alt="Apoio no combate aos incêndios do Pantanal."
                horizontal={true}
            />
        </div>
        <p>
            O grupamento se dedica as atividades mediante execução direta de projetos, programas,
            planos de ações correlatas e por meio da doação de recursos físicos, materiais, humanos
            e financeiros, ou ainda pela prestação de serviços intermediários de apoio a outras
            organizações sem fins lucrativos e a órgãos do setor público que atuem em áreas afins.
            <br />
        </p>

        <div className="img">
            <Imagem
                src="./static/images/17-mini.jpg"
                alt="Vista aérea do morro do Tijuca Mirim"
                horizontal={true}
            />
            <Imagem
                src="./static/images/19-mini.jpg"
                alt="Ninho de Tapitis encontrados em trabalhos de prevenção"
                horizontal={true}
            />
        </div>
        <p>
            Atuante principalmente no Parque Nacional da Tijuca que é maior unidade de conservação
            em meio urbano do mundo, onde, inicialmente foi formada a experiência dos profissionais,
            que durante anos, aprenderam e desenvolveram técnicas de manejo de trilhas sustentáveis,
            criando métricas próprias, orientadas pelo serviço florestal dos Estados Unidos e
            orientações dos órgãos competentes, aplicando-as em várias outras unidades de conservação 
            que nos permitiu adquirir experiência em outros biomas brasileiros além da mata atlântica.
        </p>

        <div className="img">
            <Imagem
                src="./static/images/8-mini.jpg"
                alt="Preguiça recolhida em via e solta em floresta"
                horizontal={false}
            />
            <Imagem
                src="./static/images/20-mini.jpg"
                alt="Acompanhamento e suporte a pesquisas"
                horizontal={false}
            />
        </div>
    </div >
)

export default Grupamento
