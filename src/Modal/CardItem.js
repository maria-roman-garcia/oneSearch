// import React from 'react';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';

// const CardItem = (props) => {
//   return (
//     <div className="containerCard">
//       <Card className="">
//         <CardImg top width="100%" src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>María</CardTitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <a href="http://www.google.com"><Button>LinkedIn</Button></a>
//         </CardBody>
//       </Card><br></br>

//       <Card className="">
//         <CardImg top width="100%" src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Leire</CardTitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <a href="http://www.google.com"><Button>LinkedIn</Button></a>
//         </CardBody>
//       </Card><br></br>

//       <Card className="">
//         <CardImg top width="100%" src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Natalia</CardTitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <a href="http://www.google.com"><Button>LinkedIn</Button></a>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default CardItem;

import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
const Example = (props) => {
  return (
    <CardGroup>
      <Card col-3>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>María</CardTitle>
          {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText> */}
          <a href="http://www.google.com"><Button>LinkedIn</Button></a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>Leire</CardTitle>
          {/* <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText> */}
          <a href="http://www.google.com"><Button>LinkedIn</Button></a>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        <CardBody>
          <CardTitle>Natalia</CardTitle>
          {/* <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText> */}
          <a href="http://www.google.com"><Button>LinkedIn</Button></a>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Example;

