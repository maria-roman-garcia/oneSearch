
import React, { Component } from "react";
import { isElementOfType } from "react-dom/test-utils";

class WikiCommons extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // wikipediaCommons
            inputPalabraBuscar: props.inputPalabraBuscar,
        }
    }

    makeApiCallWikipediaCommons = (palabraBuscarOpcional) => {

        //Primera url API: https://commons.wikimedia.org/w/api.php?action=query&prop=images&imlimit=20&redirects=1&origin=*&titles=flor

        let firstUrl = "https://commons.wikimedia.org/w/api.php?action=query&prop=images&imlimit=20&redirects=1&origin=*&titles=";
        let secondFetchUrl = "&format=json"

        firstUrl += palabraBuscarOpcional || this.props.inputPalabraBuscar;
        let totalUrl = `${firstUrl}${secondFetchUrl}`
        console.log(totalUrl)

        fetch(totalUrl)
            //fetch actua como si fuera una promesa. Con el .then forzamos a que espere a la respuesta y que sea sincrono
            .then(fetchInfo => {
                //.json() es un metodo que convierte la informacion del argumento (fetchInfo) a formato Json
                return fetchInfo.json();
            })
            .then(jsonInfo => {

                // Segunda URL API: https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&redirects&format=json&iiurlwidth=250&titles=File:Cherry%20Tomato.JPG
                console.log(jsonInfo);

                const idNumber = Object.keys(jsonInfo.query.pages)[0].toString();

                let segundaUrl = "https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&redirects&format=json&iiurlwidth=250&origin=*&titles=";

                if (idNumber !== '-1') {
                    let arrayApis2 = jsonInfo.query.pages[idNumber].images.map(e => segundaUrl + e.title);
                    // se van a cargar todas las urls de las apis2 para ejecutarlas a la vez
                    Promise.all(arrayApis2.map(url => fetch(url))).then(responses =>
                        // Promise.all(responses.map(res => res.text()))
                        Promise.all(responses.map(res => res.json()))
                    ).then(jsons => {
                        let allImages = jsons.map(element => {
                            let idNumberEachElement = Object.keys(element.query.pages)[0].toString();
                            return (
                                // (((element.query.pages.idNumberEachElement || {}).imageinfo || [])[0] || {}).thumburl
                                (element.query.pages[idNumberEachElement] || { imageinfo: [{}] }).imageinfo[0].thumburl
                            )
                        });
                        this.setState({
                            allImages
                        })
                    })
                }else{
                    this.setState({
                        allImages: ["https://media.giphy.com/media/S25yCLKmbZOhi/giphy.gif"]
                    })
                }
            })
    }

    componentDidMount() {
        this.makeApiCallWikipediaCommons();
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.inputPalabraBuscar != this.state.inputPalabraBuscar) {
            this.makeApiCallWikipediaCommons(newProps.inputPalabraBuscar);
        }
    }

    render() {
        console.log(this.state.allImages)
        return (
            (this.state.allImages||[]).map(imagen=>{
                return(
                    <img src={imagen} alt ="img"/> 
                )
            })
        )
    }
}

export default WikiCommons;