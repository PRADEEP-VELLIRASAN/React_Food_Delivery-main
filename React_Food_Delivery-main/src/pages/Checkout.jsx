import "../styles/checkout.css";
import "../styles/modern-checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Checkout = () => {
  return (
    <div className="modern-checkout-container">
      <div className="modern-checkout-content animate-scale-in">
        <div className="success-icon-container">
          <div className="success-icon-background">
            <AiFillCheckCircle className="modern-checkout-icon" />
          </div>
          <div className="success-ripple"></div>
        </div>
        <div className="checkout-message-content">
          <h1 className="checkout-title">Order Confirmed!</h1>
          <h3 className="checkout-subtitle">Thank you for your order!</h3>
          <p className="checkout-description">
            Your delicious pizza is being prepared with love and will be delivered as fast as possible.
          </p>
          <div className="order-timeline">
            <div className="timeline-item active">
              <div className="timeline-dot"></div>
              <span>Order Confirmed</span>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <span>Preparing</span>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <span>On the way</span>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <span>Delivered</span>
            </div>
          </div>
          <button className="modern-order__btn track-order-btn">
            Track Your Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
