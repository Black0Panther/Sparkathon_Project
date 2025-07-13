const Feedback = () => {
  return (
    <div className="bg-slate-50 min-h-screen p-4 text-gray-800">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold mb-6">Feedback & Support</h1>

        {/* Rating Section */}
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Rate your experience</h3>
          <div className="flex gap-2 text-2xl cursor-pointer">
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          <textarea
            placeholder="Share your feedback"
            className="w-full h-20 mt-3 p-2 border border-gray-300 rounded-lg resize-y text-sm"
          ></textarea>
        </section>

        {/* Actions Section */}
        <div className="flex flex-wrap gap-4 mt-4">
          <button className="bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-md text-sm">
            Report an issue
          </button>
          <button className="bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-md text-sm">
            Request a return/refund
          </button>
        </div>

        {/* Open Tickets Section */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Open Tickets</h3>
          <div className="flex gap-2 mt-2">
            <button className="bg-slate-200 font-semibold px-4 py-2 rounded-md text-sm">
              Pending
            </button>
            <button className="bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-md text-sm">
              Resolved
            </button>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-start bg-slate-50 border border-slate-200 p-3 rounded-lg">
              <span className="text-2xl mr-3">📦</span>
              <div>
                <strong className="text-sm">Order #123458 - Item not received</strong>
                <p className="text-xs text-gray-500 mt-1">Pending</p>
              </div>
            </div>
            <div className="flex items-start bg-slate-50 border border-slate-200 p-3 rounded-lg">
              <span className="text-2xl mr-3">📦</span>
              <div>
                <strong className="text-sm">Order #789012 - Damaged product</strong>
                <p className="text-xs text-gray-500 mt-1">Pending</p>
              </div>
            </div>
          </div>
        </section>

        {/* Submit Issue Section */}
        <section className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Submit an Issue</h3>
          <select className="w-full p-2 mt-3 border border-gray-300 rounded-lg text-sm">
            <option disabled selected>
              Select issue type
            </option>
            <option>Item not received</option>
            <option>Damaged product</option>
            <option>Wrong item</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Describe your issue"
            className="w-full h-20 mt-3 p-2 border border-gray-300 rounded-lg resize-y text-sm"
          ></textarea>
          <div className="flex justify-end">
            <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
              Submit
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feedback;