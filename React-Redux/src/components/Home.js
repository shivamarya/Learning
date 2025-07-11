import React from "react";

function Home(){
    return(
        <div style={{padding:"20px"}}>
            <div className="add-to-cart">
                <img src="../../addcart.png" />
            </div>
            <h1>Home Components</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="../../iphone.png" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-phone
                    </span>
                    <span>
                        Price : $1000
                    </span>

                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>

                </div>

            </div>
        </div>
    )
}


export default Home;