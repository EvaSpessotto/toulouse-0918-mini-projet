import React, { Component } from "react";
import {
  Container,
  Header
} from "semantic-ui-react";
class Home extends Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Container textAlign="center">
          <Header as="h3">Welcome on Super Chaussettes's admin page !</Header>
        </Container>
      </div>
    );
  }
}

export default Home;
