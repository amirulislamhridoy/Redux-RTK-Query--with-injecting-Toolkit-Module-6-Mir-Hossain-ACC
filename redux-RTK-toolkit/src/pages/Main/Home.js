import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { stockStatus, filterChoose, clearAll } from '../../redux-toolkit-or-app/features/filterSlice';
import {useGetProductQuery} from '../../redux-RTK-Query/features/productSlice'
import ProductCard from "../../components/ProductCard";

const Home = () => {
  const activeClass = "text-white bg-indigo-500 border-white";
  const dispatch = useDispatch()
  const {data: products} = useGetProductQuery(null, {refetchOnMountOrArgChange: true})

  let content;
  if (products?.length) {
    content = products.map((product) => (
      <ProductCard key={product.model} product={product} />
    ));
  }
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <button
          onClick={() => dispatch(stockStatus())}
          className={`border px-3 py-2 rounded-full font-semibold `}
          // className={`border px-3 py-2 rounded-full font-semibold ${stock && activeClass}`}
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(filterChoose('amd'))}
          className={`border px-3 py-2 rounded-full font-semibold`}
          // className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('amd') ? activeClass : null}`}
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(filterChoose('intel'))}
          className={`border px-3 py-2 rounded-full font-semibold`}
          // className={`border px-3 py-2 rounded-full font-semibold ${brands.includes('intel') ? activeClass : null}`}
        >
          Intel
        </button>
        <button
          onClick={() => dispatch(clearAll())}
          className={`border px-3 py-2 rounded-full font-semibold`}
        >
          Clear All
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14'>
        {content}
      </div>
    </div>
  );
};

export default Home;
