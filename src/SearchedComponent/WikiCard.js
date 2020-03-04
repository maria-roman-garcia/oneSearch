import React, { Component } from "react"; import './WikiCard.scss'

class WikiCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // wikipedia
            infoLlamadaApi: [],
            inputPalabraBuscar: props.inputPalabraBuscar
        }
    }

    showItemsWikipedia = () => {
        return this.state.infoLlamadaApi.map((elemento, index) =>
            <div className="carta col-11 col-md-5" key={index}>
                <h1>{elemento.title}</h1>
                <p>{elemento.snippet.replace(/<span class=|"searchmatch|">/g, '').replace(/<\/span>/g, '')}</p>
                {/* target = "_blank" hace que nos abra la pagina de wikipedia en una pagina aparte a la nuestra */}
                <a target="_blank" rel="noopener noreferrer" href={`https://es.wikipedia.org/wiki/${elemento.title}`} >
                    <button>
                        Ir a Wikipedia
                    </button>
                </a>
            </div>
        );
    };

    makeApiCallWikipedia = (palabraBuscarOpcional) => {

        // https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&titles=casa&prop=pageimages&format=json&piprop=original&origin=*&utf8=&srsearch=casa

        let primeraFetchUrl = "https://es.wikipedia.org/w/api.php?action=query&list=search&srprop=snippet&titles=";
        let segundaFetchUrl = "&prop=pageimages&format=json&piprop=original&origin=*&utf8=&srsearch=";

        primeraFetchUrl += palabraBuscarOpcional||this.props.inputPalabraBuscar;
        segundaFetchUrl += palabraBuscarOpcional||this.props.inputPalabraBuscar;

        let totalFetchUrl = `${primeraFetchUrl}${segundaFetchUrl}`;

        fetch(totalFetchUrl)
            //fetch actua como si fuera una promesa. Con el .then forzamos a que espere a la respuesta y que sea sincrono
            .then(fetchInfo => {
                //.json() es un metodo que convierte la informacion del argumento (fetchInfo) a formato Json
                return fetchInfo.json();
            })
            .then(jsonInfo => {

                this.setState(
                    //El primer argumento es un objeto en el que vamos a indicar lo que queremos cambiar del estado
                    //jsonInfo.query.search
                    {
                        inputPalabraBuscar: palabraBuscarOpcional || this.state.inputPalabraBuscar,
                        infoLlamadaApi: [...jsonInfo.query.search],
                    },
                    //El segundo argumento es una funcion call back function. Se va a ejecutar solo cuando el estado se termine de actualizar
                    () => {
                        this.showItemsWikipedia();
                    }
                );
            });
    };

    componentDidMount() {
        this.makeApiCallWikipedia();
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.inputPalabraBuscar != this.state.inputPalabraBuscar) {
            this.makeApiCallWikipedia(newProps.inputPalabraBuscar);
        }
    }

    render() {
        return (
            this.showItemsWikipedia()
        )
    }
}

export default WikiCard;