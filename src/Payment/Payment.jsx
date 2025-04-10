import axios from "axios";
import { handleError } from "../utils";

const checkoutHandle = async (amount, navigate) => {
  let accessCookie = (name) => {
    let cookie = `${document.cookie}`;
    if (!cookie || cookie.length === 0) return null;
    return cookie.split("=")[1];
  };

  const isLoggedIn = accessCookie("Token");

  if (!isLoggedIn) {
    handleError("You are not LoggedIn");
    navigate("/login");
    return;
  }

  try {
    const {
      data: { key },
    } = await axios.get("https://techmate-backend.vercel.app/payment/api/getkey");

    const {
      data: { order },
    } = await axios.post("https://techmate-backend.vercel.app/payment/checkout", { amount });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Techmate",
      description:
        "A dynamic startup offering expert graphic design, exclusive electronic deals, and tailored tech solutions.",
      image: "https://avatars.githubusercontent.com/u/96648429?s=96&v=4",
      order_id: order.id,
      callback_url: "https://techmate-backend.vercel.app/payment/paymentverification",
      prefill: {
        name: "Techmate",
        email: "payment@techmate.com",
      },
      notes: {
        address: "RGIPT,Jais,Amethi,U.P",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  } catch (error) {
    handleError("Payment initialization failed");
    console.error(error);
  }
};

export default checkoutHandle;
