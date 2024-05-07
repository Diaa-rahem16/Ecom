import React from 'react';
import ProductCard from './../../components/ProductCard2';


const SellerStore = () => {
    return (
        <div id='seller-store'>
            <section id='store-info'>
                <h2>Store information</h2>
                <hr/>
                <div className="seller-card">
                    <img src="../../images/pfp-alternative.png" alt="Seller Profile"/>
                    <div>
                        <h4 className="name">TheWhite</h4>
                        <p className="type">Individual</p>
                        <p className="rating">Rating: 8/10 <span className='type'>(250 person)</span></p>
                        <p className="email">theWhite@gmail.com</p>
                    </div>
                </div>
            </section>
            <section id='store-prod'>
                <h2>Products</h2>
                <button>Add product  +</button>
                <hr/>
                <div className='products'>
                    {/* Corrected props */}
                    <ProductCard 
                        id = "" //? data.id
                        data={{
                            photos:"https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7",
                            sellerName:"dior",
                            name:"Sauvage perfume",
                            discrtiption:"100ml of eau de toilette of perfume of Dior",
                            price:"2500"
                        }}
                        />
                        <ProductCard 
                        id = "" //? data.id
                        data={{
                            photos:"https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7",
                            sellerName:"dior",
                            name:"Sauvage perfume",
                            discrtiption:"100ml of eau de toilette of perfume of Dior",
                            price:"2500"
                        }}
                        />
                        <ProductCard 
                        id = "" //? data.id
                        data={{
                            photos:"https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7",
                            sellerName:"dior",
                            name:"Sauvage perfume",
                            discrtiption:"100ml of eau de toilette of perfume of Dior",
                            price:"2500"
                        }}
                        />
                        <ProductCard 
                        id = "" //? data.id
                        data={{
                            photos:"https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7",
                            sellerName:"dior",
                            name:"Sauvage perfume",
                            discrtiption:"100ml of eau de toilette of perfume of Dior",
                            price:"2500"
                        }}
                        />
                        <ProductCard 
                        id = "" //? data.id
                        data={{
                            photos:"https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7",
                            sellerName:"dior",
                            name:"Sauvage perfume",
                            discrtiption:"100ml of eau de toilette of perfume of Dior",
                            price:"2500"
                        }}
                        />
                        <ProductCard 
                        id = "" //? data.id
                        data={{
                            photos:"https://th.bing.com/th/id/OIP.jrKrNsvgofEEYALTBxhPlwHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.6&pid=1.7",
                            sellerName:"dior",
                            name:"Sauvage perfume",
                            discrtiption:"100ml of eau de toilette of perfume of Dior",
                            price:"2500"
                        }}
                        />
                </div>
            </section>
        </div>
    );
};

export default SellerStore;
