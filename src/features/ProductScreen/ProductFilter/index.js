import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Formik } from "formik";


import Button from "@components/UI/Button";
import { default as Grid } from "@features/ProductScreen/ProductGrid";
import { CommonSection } from "@components/Form";
import FormikControl from "@components/Form/FormikControl";
import QuickViewProductModal from "../ProductItem/QuickViewProductModal";
import SuccessModal from "../ProductItem/SuccessModal";
import FilterPriceRange from "./FilterPriceRange";
import { productFilter as filter } from "@utils/constants";

function ProductFilter() {
  // const { products } = useRouteLoaderData('root');
  const products = useSelector((state) => state.products?.products);
  const [filterResult, setFilterResult] = useState([]);
  const [error, setError] = useState();
  const [isFiltering, setIsFiltering] = useState(false);
  const [rate, setRate] = useState();

  const quickViewModal = useSelector((state) => state.modal.quickViewModal);
  const successModal = useSelector((state) => state.modal.successModal);

  const initialValues = {
    checkboxes: [],
    minPrice: "",
    maxPrice: "",
    sale: "",
    rate: "",
  };

  useEffect(() => {
  }, [filterResult, isFiltering, rate]);

  const handleFilter = (values) => {
    const keys = Object.keys(values);
    const check = keys.every((key) => values[key].length === 0);
    console.log(
      "values",
      values
    );
    console.log("keys", keys);
    console.log("check", check);
    if (check) {
      setError("Please set at least one condition to filter");
    } else {
      console.log(
        "FD",
        products.filter((item) =>
          item.category.some((category) =>
            values?.checkboxes?.includes(category)
          ) &&
					item.label == values?.sale &&
					item.rating == values?.rate &&
					item.discount >= values?.minPrice && item.discount <= values?.maxPrice
        )
      );
      setFilterResult(
        products.filter((item) =>
          item.category.some((category) =>
            values?.checkboxes?.includes(category)
          )
        )
      );
      values["rate"].length > 0
        ? setRate(parseInt(values["rate"]))
        : setRate(false);

      setError();
      setIsFiltering(true);
    }
  };
  console.log("filterResult", filterResult);
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1  gap-8">
      <div className="lg:col-span-8">
        <div className="flex justify-between mb-10 max-lg:flex-col items-center">
          <h3 className="font-bold lg:text-2xl text-xl max-lg:mb-5">
            {isFiltering
              ? `Showing ${filterResult.length} ${
                  filterResult.length < 2 ? "result" : "results"
                }`
              : "All products"}
            {quickViewModal.status ? <QuickViewProductModal /> : null}

            {successModal.status ? (
              <SuccessModal type={successModal.type} />
            ) : null}
          </h3>
          <div className="">
            {/* <Tooltip content="Feature under development">
              <select className="font-bold bg-gray-50 -2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 ">
                <option value="1">Sort By Popularity</option>
                <option value="2">Sort By Price: From Hight to Low</option>
                <option value="3">Sort By Price: From Low to High</option>
              </select>
            </Tooltip> */}
          </div>
        </div>
        <Grid products={isFiltering ? filterResult : products} cols={3} />
      </div>
      <div className="lg:col-span-4 lg:-mt-8">
        <CommonSection title="Filter By">
          <Formik initialValues={initialValues} onSubmit={handleFilter}>
            {({ resetForm, handleSubmit, setFieldValue }) => (
              <form onSubmit={handleSubmit}>
                <div className="border-b pb-5">
                  <h4 className="font-bold mb-2">Type</h4>
                  <div className="flex flex-wrap">
                    <FormikControl
                      control="checkbox"
                      name="checkboxes"
                      options={filter.categories}
                    />
                  </div>
                </div>
                <div className="border-b py-5">
                  <h4 className="font-bold mb-2">Price</h4>
                  <FilterPriceRange setFieldValue={setFieldValue} />
                </div>
                <div className="border-b py-5">
                  <h4 className="font-bold mb-2">Sale program</h4>
                  <div className="flex flex-wrap">
                    <FormikControl
                      control="radio"
                      name="sale"
                      options={filter.labels}
                    />
                  </div>
                </div>
                <div className="border-b py-5">
                  <h4 className="font-bold mb-2">Popularity</h4>
                  <FormikControl
                    control="radio"
                    name="rate"
                    options={filter.rating}
                  />
                </div>
                {error && (
                  <span className=" inline-block my-3 py-2 px-4 rounded bg-red-100">
                    {error}
                  </span>
                )}
                <Button type="submit" btn="card" className="w-full">
                  Apply Filter
                </Button>
                <Button
                  btn="cancel"
                  type="submit"
                  onClick={() => {
                    setIsFiltering(false);
                    setError();
                    resetForm();
                  }}
                >
                  Clear All Filter
                </Button>
              </form>
            )}
          </Formik>
        </CommonSection>
      </div>
    </div>
  );
}

export default ProductFilter;
