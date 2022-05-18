import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../LoginSignupPage/useAuthHook";
import styles from "./CustomerOrder.module.css";

const CustomerOrder = () => {
  const [items, setItems] = useState([]);
  const { isLoggedIn } = useAuth();
  const email = isLoggedIn.email;

  const loginNavigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://sheltered-crag-23788.herokuapp.com/customerOrderMenu?email=${email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("idToken")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          loginNavigate("/login");
        }
      })
      .then((data) => {
        // console.log(data)
        setItems(data);
      });
  }, [email, loginNavigate]);
  // console.log(items)
  const customerViewOrderNavigate = useNavigate();
  const handleViewCustomerOrder = (id) => {
    // console.log(id);
    customerViewOrderNavigate(`/customerOrderViewNavigate/${id}`);
  };
  return (
    <div className="container">
      <h5>Your Ordered Items</h5>

      {items.map((singleItem, index) => (
        <div
          onClick={() => handleViewCustomerOrder(singleItem._id)}
          className={styles.cursor}
          key={Math.random()}
        >
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-12">
                <div className="card-body">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button className="card-title btn btn-sm btn-dark disabled me-1">
                      Order: {index + 1}
                    </button>
                  </div>
                  <p className="card-text">
                    Status:{" "}
                    <strong className="text-primary">
                      {singleItem.status}
                    </strong>
                  </p>
                  <p className="card-text">
                    Amount: {singleItem.Bill} Tk <strong>Paid</strong>{" "}
                  </p>
                  <p className="card-text">
                    Hello, foodie don't be worry your order is ready for
                    approvel. When your order is approve it's show be to your
                    status <strong>Order Approved</strong>. For check order
                    details please click to view your order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerOrder;
