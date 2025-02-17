import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { useCart } from "./hooks/useCart";

function App() {
    const {
        data,
        cart,
        addToCart,
        removeFromCart,
        decreaseQuantiy,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    } = useCart();


    type Guitar = {
    id : number;
    name : string;
    image: string;
    description: string;
    price : number;
}

    return (
        <>
            <Header
                cart={cart}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantiy}
                clearCart={clearCart}
                isEmpty={isEmpty}
                cartTotal={cartTotal}
            />

            <main className="container-xl mt-5">
                <h2 className="text-center">Nuestra Colección</h2>

                <div className="row mt-5">
                    {data.map((guitar:Guitar) => (
                        <Guitar
                            key={guitar.id}
                            guitar={guitar}
                            addToCart={addToCart}
                        />
                    ))}
                </div>
            </main>

            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">
                        Guitar House - Juan Ortiz
                    </p>
                </div>
            </footer>
        </>
    );
}

export default App;
