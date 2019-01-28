import React, { Component } from 'react';
import { Grid, Image, Header, Segment, Select, Button, Dropdown } from 'semantic-ui-react';

const Product = ({ picture, name, description, price, id, addToCart }) => {
	const options = [
		{ text: '1', value: '1' },
		{ text: '2', value: '2' },
		{ text: '3', value: '3' },
		{ text: '4', value: '4' },
		{ text: '5', value: '5' },
	]
	const quantity = 2
		return (
				<Grid verticalAlign='middle'>
					<Grid.Column width='8'>
						<Image src={picture} />
					</Grid.Column>
					<Grid.Column width='7' >
						<Header as='h1'>{name}</Header>
						<p>{description}</p>
						<h2>{price}€</h2>
						<Dropdown 
							selection 
							label='Quantity' 
							options={options} 
							placeholder='1' 
						/>
						<Button 
							icon='shop' 
							content='Add to cart' 
							className='btn-add' 
							color='green' 
							onClick={() => addToCart(id, name, picture, price)}
						/>
					</Grid.Column>
				</Grid>
		);
}

export default Product;