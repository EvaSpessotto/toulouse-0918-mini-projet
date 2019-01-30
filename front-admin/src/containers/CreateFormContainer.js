import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Grid,
  Form,
  Checkbox,
  Button,
  TextArea,
  Input,
  Select
} from "semantic-ui-react";

class CreateFormContainer extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Brand"
              placeholder="First name"
              required
            />
            <Form.Field
              control={Input}
              label="Name"
              placeholder="Last name"
              required
            />
            <Form.Field
              control={Input}
              label="Reference"
              placeholder="Reference"
              required
            />
          </Form.Group>
          <Form.Field
            control={Input}
            label="Picture"
            placeholder="Picture url"
            required
          />

          <Form.Field
            control={TextArea}
            label="About"
            placeholder="What's about this new product ?"
            required
          />
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="Price"
							placeholder="Price"
							type="number"
              required
            />
            <Form.Field
              control={Input}
              label="Stock"
							placeholder="Stock"
							type="number"
              required
            />
          </Form.Group>

          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps)(CreateFormContainer);
