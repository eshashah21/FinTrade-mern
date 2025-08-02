import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:3002/orders", {
          withCredentials: true,
        });

        // Ensure it's an array
        if (Array.isArray(res.data)) {
          setOrders(res.data);
        } else {
          console.error("Orders response is not an array:", res.data);
          setOrders([]); // fallback to empty array
        }
      } catch (error) {
        console.error("Failed to fetch orders", error);
        setOrders([]); // fallback to empty array on error
      }
    };

    fetchOrders();
    window.addEventListener("orderPlaced", fetchOrders);

    // Optional: clean up the event listener
    return () => {
      window.removeEventListener("orderPlaced", fetchOrders);
    };
  }, []);


  return (
    <div className="orders-container">
      <h3 className="title">Orders ({orders.length})</h3>
      {orders.length === 0 ? (
        <p className="no-orders">You haven't placed any orders today</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price}</td>
                <td className={order.mode === "BUY" ? "buy" : "sell"}>
                  {order.mode}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Orders;
