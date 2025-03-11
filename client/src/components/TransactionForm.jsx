import React from "react";

export default function TransactionForm() {

const handleSubmit = (e)=>{
    e.preventDefault();
}
  return (
    <form
      className="w-full max-w-lg flex flex-col gap-5 px-3"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-wrap">
        <div className="w-full">
          <label
            htmlFor="description"
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          >
            Transaction
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3  px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            id="description"
            name="description"
            placeholder="Rent, Groceries, Salary, etc."
            
          />
        </div>
      </div>

      {/* payment Type */}
      <div className="flex flex-wrap gap-3">
        <div className="w-full flex-1 mb-6 md:mb-0">
          <label
            htmlFor="paymentType"
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          >
            Payment Type
          </label>
          <div className="relative">
            <select
              name="paymentType"
              id="paymentType"
              className="block apperance-none w-full bg-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500"
             
            >
              <option value="card">Card</option>
              <option value="cash">Cash</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* category  */}
        <div className="w-full flex-1 mb-6 md:mb-0">
          <label
            htmlFor="category"
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
          >
            Category
          </label>
          <div className="relative">
            <select
              name="category"
              id="category"
              className="block apperance-none w-full bg-gray-200 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-white focus:border-gray-500"
             
            >
              <option value="saving">Saving</option>
              <option value="expense">Expense</option>
              <option value="investment">Investment</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Amount   */}
        <div className="w-full flex-1 mb-6 md:mb-0">
          <label
            className="block uppercase text-white text-xs font-bold mb-2"
            htmlFor="amount"
          >
            Amount($)
          </label>

          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="150"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3  px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
             
          />
        </div>
      </div>

      {/* Location  */}

      <div className="flex flex-wrap gap-3">
        <div className="w-full flex-1 mb-6 md:mb-0">
          <label
            className="block uppercase text-white text-xs font-bold mb-2"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Breilly"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3  px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
           
          />
        </div>

        {/* Date  */}
        <div className="w-full flex-1">
          <label
            className="block uppercase text-white text-xs font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Select date"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3  px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
             
          />
        </div>
      </div>

      {/* submit Button  */}
      <button
        className="text-white font-bold w-full rounded px-4 py-2 bg-gradient-to-br
      from-pink-500 to-pink-500 hover:from-pink-600 hover:to-pink-600 hover:cursor-pointer"
      >
        Add Transaction
      </button>
    </form>
  );
}
