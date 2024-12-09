export default function ContactForm() {
  return (
    <>
      <div className="py-7">
        <h2 className="text-base font-bold text-gray-900">
          Contact Information
        </h2>

        <div className="mt-6">
          <label for="" className="text-sm font-medium text-gray-600">
            {" "}
            Email address{" "}
          </label>
          <div className="mt-2">
            <input
              type="email"
              id=""
              name=""
              placeholder=""
              className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
            />
          </div>
        </div>
      </div>
    </>
  );
}
