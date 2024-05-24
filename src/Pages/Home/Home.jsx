import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {

    const items = useLoaderData()
    const allProducts = items.products
    

    return (
        <>
            <div className=" container mx-auto flex flex-wrap justify-center items-center gap-5 p-7">
                {
                    allProducts.map((item, i) => {
                        return (
                            <div key={i} className=" bg-blue-400 p-7 rounded-lg text-center text-white w-[30%]">
                                <h1 className=" text-black font-bold text-lg"> Brand : {item.brand} </h1>
                                <h1 className=" text-black font-bold text-lg"> Category : {item.category} </h1>
                                <h1 className=" text-yellow-300 font-bold text-lg"> Title : {item.title} </h1>
                                <div className="btn py-1 mt-3 bg-green-700 rounded-md flex gap-2 justify-center items-center text-center">
                                    <Link  to={`/detels/${item.id}`} >  Details</Link>
                                    <h3 className=" text-sm font-serif"><FaArrowRightLong /></h3>
                                </div>
                            </div>
                        )

                    })
                }
            </div>

        </>
    );
};

export default Home;