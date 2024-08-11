"use client";
import { useSearchParams } from "next/navigation";

const Payment = () => {
  const searchParams = useSearchParams();
  const membership = searchParams?.get("membership") || "Unknown Membership";
  const price = searchParams?.get("price") || "0";

  return (
    <div className="container mx-auto py-12 px-4 md:px-0">
      <div className="max-w-xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Payment for {membership}
        </h1>
        <p className="text-2xl text-center text-gray-600 mb-4">
          Price: <span className="text-green-500">${price}</span> per month
        </p>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Payment Details
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="cardNumber" className="block text-gray-600">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiryDate" className="block text-gray-600">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  className="w-full p-3 border  border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-gray-600">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full p-3 border  border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                  placeholder="123"
                />
              </div>
            </div>
            <div>
              <label htmlFor="cardHolder" className="block text-gray-600">
                Card Holder Name
              </label>
              <input
                type="text"
                id="cardHolder"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
                placeholder="John Doe"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-red-600 text-white font-bold rounded-lg  hover:bg-red-700  transition-colors"
            >
              Confirm Payment
            </button>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>Secure payment with SSL encryption.</p>
          <p>All transactions are encrypted.</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
