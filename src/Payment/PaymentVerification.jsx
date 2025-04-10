import React from "react";

function PaymentVerification() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center max-w-md w-full">
        <div className="flex items-center justify-center bg-green-100 rounded-full h-24 w-24 mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-12 w-12 text-green-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Payment Successful!
        </h2>


        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your payment has been successfully
          processed. You will receive a confirmation email shortly.
        </p>

        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
          <p className="text-sm text-gray-500">Order ID:</p>
          <p className="text-lg font-medium text-gray-800">#1234567890</p>
          <p className="text-sm text-gray-500 mt-2">Amount Paid:</p>
          <p className="text-lg font-medium text-gray-800">₹1,999.00</p>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none">
            Go to Dashboard
          </button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-300 focus:outline-none">
            Feedback
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentVerification;
