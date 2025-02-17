import { useState } from "react";

import type {Guitar} from '../types'

type GuitarProps = {
    guitar : Guitar, 
    addToCart: (item: Guitar) => void
}

export default function Guitar({guitar, addToCart}:GuitarProps) {

    const { name, image, description, price } = guitar;

    const [buttonText, setButtonText] = useState("Agregar al Carrito");

    const handleAddToCart = () => {
        addToCart(guitar);
        setButtonText("¡Agregado al carrito!");

        setTimeout(() => {
            setButtonText("Agregar al Carrito");
        }, 1000);
    };

    return (
        <div className="col-md-6 col-lg-6 my-6 row align-items-center">
            <div className="col-4">
                <img
                    className="img-fluid"
                    src={`/img/${image}.jpg`}
                    alt="imagen guitarra"
                />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">
                    {name}
                </h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">${price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={handleAddToCart}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};


