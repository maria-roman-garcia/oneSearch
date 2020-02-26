import React from 'react';
import './WikiCard.scss'

class WikiCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            titulo: this.props.inputPalabra
        }
    }



    render() {
        return (

            <div className="carta col-11 col-md-5">
                <h1 className="justify_center">{this.props.inputPalabra}</h1>
                <p>Lorem jsniwvniepvnobvpwrbnipbnbpw</p>
            </div>

        )

    }
}

export default WikiCard;