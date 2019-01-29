import React, { Component } from 'react';
import { Table, Button, Image } from 'semantic-ui-react';


class ProductsList extends Component {
	render() {
		return (
			<Table celled striped>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell colSpan='8'>Products</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					<Table.Row>
						<Table.Cell>
							<Image src='' size='mini' />
						</Table.Cell>
						<Table.Cell>
							name
						</Table.Cell>
						<Table.Cell>
							description
						</Table.Cell>
						<Table.Cell>
							Stock
						</Table.Cell>
						<Table.Cell>
							Price
						</Table.Cell>
						<Table.Cell>
							Date
						</Table.Cell>
						<Table.Cell>
							reference
						</Table.Cell>
						<Table.Cell textAlign='right'>
							<Button icon='edit' color='blue' />
							<Button icon='close' color='red' />
						</Table.Cell>
					</Table.Row>
				</Table.Body>
				
			</Table>
		);
	}
}

export default ProductsList;