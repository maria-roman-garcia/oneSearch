import React from 'react';
import {Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody} from 'reactstrap';
import './CardItem.css';
const Example = (props) => {
  return (


    <CardGroup id="contenedor">
      <Card id="tarjeta">
        <CardImg top height="100%" id="foto1" src="https://media-exp1.licdn.com/dms/image/C4E03AQGg1NtjJ-gGrw/profile-displayphoto-shrink_100_100/0?e=1588809600&v=beta&t=LNohA5StKaxgJ6yoq5YrqSIB9Ecj3ScwSn4xvdJYKsA" alt="Card image cap" />
        <CardBody>
          <CardTitle className="col-12 justify_center">María Román</CardTitle>
          <div className="justify_center">
            <a target="_blank" href="https://www.linkedin.com/in/mar%C3%ADarom%C3%A1ngarc%C3%ADa-4587a6184/"><Button id="miBoton">LinkedIn</Button></a>
          </div>
        </CardBody>
      </Card>
      <Card id="tarjeta">
        <CardImg top height="100%" id="foto2" src="https://media-exp1.licdn.com/dms/image/C4D03AQGS2TYO49PNBA/profile-displayphoto-shrink_100_100/0?e=1588809600&v=beta&t=8L36rOfWMqWlEULjaHD7UrmZaYVq0XHT3e6yfMEP2Os" alt="Card image cap" />
        <CardBody id="bodyCarta">
          <CardTitle className="col-12 justify_center">Leire Díez</CardTitle>
          <div className="col-12 justify_center">
            <a target="_blank" href="https://www.linkedin.com/in/leirediez/"><Button id="miBoton" className="segundaCard">LinkedIn</Button></a>
          </div>
        </CardBody>
      </Card>
      <Card id="tarjeta">
        <CardImg top height="100%" id="foto3"  src="https://media-exp1.licdn.com/dms/image/C4D03AQHyGpvqsFu1pQ/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=8X4MRM2YB3wQMtagML89UmmyHcDWbtM6OosV3YHQF2E" alt="Card image cap" />
        <CardBody>
          <CardTitle className="col-12 justify_center">Natalia Tutor</CardTitle>
          <div className="justify_center">
            <a target="_blank" href="https://www.linkedin.com/in/nataliatutorg/"><Button id="miBoton">LinkedIn</Button></a>
          </div>
        </CardBody>
      </Card>
    </CardGroup>
   );
};
export default Example;




