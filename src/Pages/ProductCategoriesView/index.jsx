import { useParams } from "react-router";
import CheckBox from "../../Component/CheckBox";
import Layout from "../Layout";
import Products from "./Products";

export default function ProductCategoryView() {
    let params = useParams();
  return (
    <>
      <Layout>
        <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="md:flex md:items-end md:justify-between">
              <div className="sm:max-w-md">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                 {params.type.toLocaleUpperCase()}
                </h1>
                <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  faucibus massa dignissim tempus.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  className="items-center justify-center hidden px-4 py-2 text-sm font-bold text-gray-700 transition-all duration-200 border border-gray-300 rounded-md md:inline-flex hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
                >
                  Sort Items
                  <svg
                    className="w-4 h-4 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center w-full px-4 py-3 mt-6 text-sm font-bold text-gray-700 transition-all duration-200 border border-gray-300 rounded-md md:hidden hover:bg-gray-50 hover:text-gray-900 focus:outline-none"
                >
                  All Filters
                  <svg
                    className="w-4 h-4 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 mt-6 md:mt-10 lg:grid-cols-4 gap-x-8 gap-y-10">
              <div className="hidden space-y-8 lg:block">
                <button
                  type="button"
                  className="inline-flex items-center p-1 -m-1 text-base font-bold text-gray-900 transition-all duration-200 focus:outline-none group"
                >
                  <svg
                    className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  Reset All Filters
                </button>

                <hr className="mt-5 border-gray-200" />

                <div className="flow-root mt-5">
                  <div className="-my-6 divide-y divide-gray-200">
                    <div className="py-6 space-y-7">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full p-1 -m-1 text-base font-bold text-gray-900 transition-all duration-200 group focus:outline-none"
                      >
                        Category
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      </button>

                      <div className="space-y-6">
                        <CheckBox text={"Admin Template"} enable={true}/>
                        <CheckBox text={"SaaS UI Kit"}/>
                        <CheckBox text={"Landing UI Kit"}/>
                        <CheckBox text={"Blog UI Kit"}/>
                        <CheckBox text={"Ecommerce UI Kit"}/>
                      </div>
                    </div>

                    <div className="py-6 space-y-7">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full p-1 -m-1 text-base font-bold text-gray-900 transition-all duration-200 group focus:outline-none"
                      >
                        Date Added
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="bg-white border-2 border-gray-200 border-dashed rounded-md h-96 lg:h-full">
                  <Products type={params.type} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
