import React, { Component } from 'react';
import './Twitter.scss'

class Twitter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // twitter
            infoLlamadaApi: [],
            inputPalabraBuscar: props.inputPalabraBuscar,
        }
    }

    callAPI(palabra) {
        console.log('llamando API')
        fetch("https://onesearch-backend.herokuapp.com/testAPI/" + palabra)
            .then(res => res.json())
            .then(res => this.setState(
                {
                    infoLlamadaApi: res
                }
            ))
            .catch(err => err)
    }

    componentDidMount() {
        this.callAPI(this.state.inputPalabraBuscar);
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        if (newProps.inputPalabraBuscar != this.state.inputPalabraBuscar) {
            this.callAPI(newProps.inputPalabraBuscar);
        }
    }

    render() {
        return this.state.infoLlamadaApi.length === 0
            ? null
            : this.state.infoLlamadaApi.statuses.map((elemento, index) =>
                <div className="carta col-11 col-md-5" key={index}>
                    <div className="row">
                        <div className="col-2">
                            <img className="imgPerfilTwitter" src={elemento.user.profile_image_url_https} alt="img" />
                        </div>
                        <div className="col-10">
                            <p className="textoFechaTwitter">{elemento.created_at}</p>
                            <p>{elemento.user.name} dice:</p>
                        </div>
                    </div>
                    <div className="row">
                         <p className="textoTwitter">{elemento.text}</p>
                    </div>
                </div>)
    }
}

export default Twitter;