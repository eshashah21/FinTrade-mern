import React, { useState, useContext } from "react";
import axios from "axios";
import { GeneralContext } from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
    const { closeSellWindow } = useContext(GeneralContext);
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    
    const handleSellClick = async () => {
        try {
            const res = await axios.post(
                "http://localhost:3002/newOrder",
                {
                    name: uid,
                    qty: stockQuantity,
                    price: stockPrice,
                    mode: "SELL",
                },
                {
                    withCredentials: true,
                }
            );
            console.log("Sell order successful:", res.data);
            window.dispatchEvent(new Event("orderPlaced"));
            closeSellWindow();
        } catch (error) {
            console.error("Sell order failed:", error.response?.data || error.message);
            alert("Sell order failed. Make sure you're logged in.");
        }
    };

    const handleCancelClick = () => {
        closeSellWindow();
    };

    return (
        <div className="container" id="buy-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <button className="btn btn-blue" onClick={handleSellClick}>
                        Sell
                    </button>
                    <button to="" className="btn btn-grey" onClick={handleCancelClick}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;
