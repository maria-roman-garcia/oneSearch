import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CardItem = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>María</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>Leire</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>Natalia</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardItem;

