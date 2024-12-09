export default function ShippingForm()
{
    return(<>
       <div className="py-7">
                                <h2 className="text-base font-bold text-gray-900">Shipping Information</h2>

                                <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 gap-y-5 gap-x-6">
                                    <div>
                                        <label for="" className="text-sm font-medium text-gray-600"> First name </label>
                                        <div className="mt-2">
                                            <input type="text" id="" name="" placeholder="" className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" className="text-sm font-medium text-gray-600"> Last name </label>
                                        <div className="mt-2">
                                            <input type="text" id="" name="" placeholder="" className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label for="" className="text-sm font-medium text-gray-600"> Phone number </label>
                                        <div className="mt-2">
                                            <input type="text" id="" name="" placeholder="" className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label for="" className="text-sm font-medium text-gray-600"> Address line 1 </label>
                                        <div className="mt-2">
                                            <input type="text" id="" name="" placeholder="" className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900" />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label for="" className="text-sm font-medium text-gray-600"> Address line 2 </label>
                                        <div className="mt-2">
                                            <input type="text" id="" name="" placeholder="" className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" className="text-sm font-medium text-gray-600"> Country </label>
                                        <div className="mt-2">
                                            <select id="" name="" className="block w-full py-3 pl-4 pr-10 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900">
                                                <option value="">United States</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" className="text-sm font-medium text-gray-600"> City </label>
                                        <div className="mt-2">
                                            <input type="text" id="" name="" placeholder="" className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" className="text-sm font-medium text-gray-600"> State </label>
                                        <div className="mt-2">
                                            <input type="text" id="" name="" placeholder="" className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900" />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="" className="text-sm font-medium text-gray-600"> Postal code </label>
                                        <div className="mt-2">
                                            <input type="text" id="" name="" placeholder="" className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900" />
                                        </div>
                                    </div>
                                </div>
                            </div>
    </>);
}