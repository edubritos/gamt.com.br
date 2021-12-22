import Imagem from "./Imagem"

const Brigada = () => (
    <div id="brigada">
        <h1 className="titles">Brigada</h1>
        <h5 className="subtitle">Combate a Incêndios Florestais</h5>
        <p>
            O Combate e a prevenção a incêndios florestais são o conjunto de medidas
            tomadas no sentido de minimizar e prevenir os riscos de ocorrência de
            incêndios florestais, por intermédio de sua completa extinção
            ou de se impedir sua propagação, como por exemplo: construção e manutenção
            de aceiros, operação de sistemas de vigilância e detecção, monitoramento
            terrestres, estabelecimento de calendários de queima com os produtores rurais
            e um trabalho permanente de educação ambiental das populações entorno das
            unidades de conservação.
            <br />
        </p>
        <div className="img">
            <Imagem
                src="./static/images/16-mini.jpg"
                alt="Trabalhos conjuntos"
                horizontal={true}
            />
            <Imagem
                src="./static/images/10-mini.jpg"
                alt="Área queimada"
                horizontal={true}
            />
        </div>
        <h5 className="subtitle">Brigada de incêndios florestais</h5>
        <p>
            Atuamos veementemente na prevenção, controle, pré-supressão e combate a
            incêndios no parque nacional da Tijuca há mais de dez anos, trabalhamos
            com monitoramento por drones de área sensíveis e mapeamento de áreas queimadas,
            participamos em trabalhos de combate e prevenção em outras unidades de
            conservação como por exemplo:
            parque nacional da Serra dos Órgãos (RJ), parque nacional do Itatiaia (RJ),
            parque estadual Serra do Papagaio (MG), parque nacional Sempre Vivas (MG),
            parque nacional do Mato Grosso (MS) entre outros.
            Temos brigadas apostas 24h prontas para um eventual acionamento a incêndio
            florestal, devidamente estruturada, preparada e experiente em diversos biomas.
        </p>
        <div className="img">
            <Imagem
                src="./static/images/13-mini.jpg"
                alt="Queima controlada de expansão"
                horizontal={true}
            />
            <Imagem
                src="./static/images/21-mini.jpg"
                alt="Monitoramento no PARNA Sempre Vivas (MG)"
                horizontal={true}
            />
        </div>
    
        <p>
            Por <strong>prevenção</strong> entende-se como todas as medidas, normas ou atividades
            destinadas a evitar incêndios florestais, tais como educação ambiental,
            fomento de culturas que não dependam do uso do fogo, fomento de técnicas
            alternativas ao uso do fogo (plantio direto), rondas, a avaliação antecipada
            de fatores de risco e outros (prevenção de riscos) e aquelas adotadas para
            impedir a propagação do fogo em setores coberto com vegetação, isto é, aceiros
            (prevenção de perigo).
            <br /><br />
            A pré-supressão inclui as ações ou operações para a organização dos recursos
            necessários para o combate a incêndios que eventualmente possam ocorrer. Nela
            devem ser consideradas a detecção, a capacitação e o treinamento de pessoal,
            a disponibilização de ferramentas e equipamentos, a organização de estrutura de
            comando e logística, o estabelecimento de normas e procedimentos e a mobilização
            oportuna dos recursos requeridos para o combate e a extinção dos incêndios.
        </p>
        <div className="img">
            <Imagem
                src="./static/images/1-mini.jpg"
                alt="Queima controlada de expansão"
                horizontal={true}
            />
            <Imagem
                src="./static/images/30-mini.jpg"
                alt="Vista aérea de queima controlada."
                horizontal={true}
            />
        </div>

    </div>
)

export default Brigada