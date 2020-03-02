import React, {Component} from 'react';
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

    showItemsTwitter = () => {
        return this.state.infoLlamadaApi.map((elemento, index) =>
            <div className="carta col-11 col-md-5" key={index}>
                <h1>{elemento}</h1>
            </div>
        );
    };

    callAPI(palabra) {
        console.log('llamando API')
        fetch("http://localhost:9000/testAPI/" + palabra)
        .then(res => res.json())
        .then(res => this.setState({ 
            infoLlamadaApi: res 
        }))
        .catch(err => err)
        setTimeout(()=>{
            console.log(this.state.infoLlamadaApi)
        },2000)
    }

    componentDidMount() {
        this.callAPI(this.state.inputPalabraBuscar);
    }

    componentWillReceiveProps(newProps){
        if (newProps.inputPalabraBuscar != this.state.inputPalabraBuscar) {
            this.callAPI(newProps.inputPalabraBuscar);
        }
    }



    render(){
        return(
            this.showItemsTwitter()
        )        
    }

}

export default Twitter;