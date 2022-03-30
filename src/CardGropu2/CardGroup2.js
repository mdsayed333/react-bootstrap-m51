import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {
    const products = [
        {id: 1, name: 'Laptop Pro', price: 29000},
        {id: 2, name: 'Taptop Pro', price: 29000},
        {id: 3, name: 'Gaptop Pro', price: 29000},
    ]
    return (
        <div>
            <CardGroup>
            {
                products.map(product => <Card2
                key={product.id}
                product={product}
                ></Card2>)
            }
            </CardGroup>
        </div>
    );
};

export default CardGroup2;