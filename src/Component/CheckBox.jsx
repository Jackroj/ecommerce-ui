export default function CheckBox({text, enable=false})
{
    return (<>
     <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              className="w-5 h-5 text-gray-900 border-gray-300 rounded-sm focus:ring-gray-900"
                              checked={enable}
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              for=""
                              className="text-sm font-medium text-gray-700"
                            >
                              {text}
                              {" "}
                            </label>
                          </div>
                        </div>
    </>);
}