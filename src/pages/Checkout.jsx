import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Checkout = () => {
  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        background: "linear-gradient(90deg, #f8fafc 60%, #fff 100%)",
        borderRadius: "24px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
        padding: "48px 24px"
      }}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "24px"}}>
          <AiFillCheckCircle style={{fontSize: "4rem", color: "#4caf50", marginBottom: "12px", boxShadow: "0 2px 12px rgba(76,175,80,0.10)", borderRadius: "50%"}} />
          <h2 style={{fontWeight:800, fontSize:"2.2rem", color:"#222", marginBottom: "8px"}}>Thank you for your order!</h2>
        </div>
        <span style={{fontSize: "1.15rem", color: "#555", textAlign: "center", maxWidth: "480px"}}>
          Your order is being processed and will be delivered as fast as possible.<br />
          <span style={{color: "#ff4c4c", fontWeight:600}}>Enjoy your meal!</span>
        </span>
      </div>
    </>
  );
};

export default Checkout;
