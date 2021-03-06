import React from 'react';
import Aux from '../../../hoc/Aux.js';
const orderSummary = (props) => {
const ingredientSummary = Object.keys(props.ingredients)
.map(igKey => {
	return <li key={igKey}>
		<span style={{textTransform:'capitalize'}}>{igKey}
		</span>: {props.ingredients[igKey]}

		</li>
});

return (
	<Aux>
		<h3>your Order</h3>
		<p> A delicious burger with the fallowing ingredients:</p>
		<ul>
{ingredientSummary}
		</ul> 
		<p>Continue to Checkout?</p>
	</Aux>
)
};
export default orderSummary;