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
				<Form.Group widths='equal'>
          <Form.Field control={Input} label='Brand' placeholder='First name' />
          <Form.Field control={Input} label='Name' placeholder='Last name' />
          <Form.Field control={Input} label='Reference' placeholder='Reference' />
        </Form.Group>

          <Form.Field>
            <label>Picture</label>
            <input placeholder="Picture" />
          </Form.Field>
          <Form.Field>
            <label>Reference</label>
            <input placeholder="Reference" />
          </Form.Field>
          <Form.Field
            control={TextArea}
            label="About"
            placeholder="Tell us more about you..."
          />
          <Form.Field>
            <label>Price</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>Stock</label>
            <input placeholder="Last Name" />
          </Form.Field>

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
