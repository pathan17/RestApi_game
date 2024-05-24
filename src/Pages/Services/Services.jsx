
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Services = () => {

    const items = useLoaderData()
    console.log(items)
    const allproduct = items.products

    const [searchs , setSearch]= useState("")
    const allFilter = allproduct.filter((product)=>product.brand.toLowerCase().includes(searchs.toLowerCase())
            || product.category.toLowerCase().includes(searchs.toLowerCase())||
            product.title.toLowerCase().includes(searchs.toLowerCase()))

     const handleChange=(e)=>{
        setSearch(e.target.value)

     }

    return (
        <div>
            <div className=" container mx-auto p-7 ">
                <div className="search mb-6 flex gap-5">
                    <input value={searchs} onChange={handleChange} className=" border border-red-500 outline-none py-1 px-4 rounded-lg " type="text" placeholder=" Search" />
                    {/* <button className=" py-1 px-5 bg-green-400 rounded-md"> Search </button> */}
                </div>
                <div className="main flex flex-wrap justify-between">
                    {
                        allFilter.map((product, i) => (
                            <div className=" w-[30%] mb-8 bg-cyan-200 p-7 rounded-lg" key={i}>
                                <img className=" rounded-lg mb-3" src={product.images[0]} alt="" />
                                <div className=" text-center">
                                    <h1 className=" text-lg font-bold text-indigo-800"> Title : {product.title} </h1>
                                    <h1 className=" text-lg font-bold text-green-800"> Brand : {product.brand} </h1>
                                    <h1 className=" text-lg font-bold text-indigo-800"> Price : {product.price} </h1>
                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    );
};

export default Services;