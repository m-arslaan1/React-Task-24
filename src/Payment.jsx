import React from "react";

function Payment() {
  return (
    <div className="w-[100vw] h-full flex items-center justify-start p-4">
      <div className="payment-container bg-white p-6 rounded-lg shadow-xl w-full max-w-lg sm:w-4/5 md:w-3/5 lg:w-2/5">
        <div className="flex gap-8 mb-8">
          <label className="font-semibold text-gray-700" htmlFor="cashOption">
            <input 
              className="mr-2" 
              type="radio" 
              name="option" 
              id="cashOption" />
            Cash on Delivery
          </label>
          <label className="font-semibold text-gray-700" htmlFor="cardOption">
            <input
              className="mr-2"
              type="radio"
              name="option"
              id="cardOption"
              checked
            />
            Credit Card
          </label>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Payment Details</h2>
          <form className="flex flex-col gap-6 border-2 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-blue-200 shadow-lg">
            <div className="flex flex-col gap-3">
              <label className="text-gray-600 text-sm">Enter your Card Number: </label>
              <input
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Card Number"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-gray-600 text-sm">Enter your Card Expiry: </label>
              <input
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Expiry Date"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-gray-600 text-sm">Enter your CVV Number: </label>
              <input
                className="border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="CVV"
              />
            </div>
            <button
              type="submit"
              className="mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
            >
              Complete Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
