import { useLoaderData } from "react-router-dom";


const HomeDetels = () => {

    const data = useLoaderData()


    return (
        <div className=" text-center p-9 text-lg">
            <div className="img container mx-auto flex justify-center items-center p-7">
                <img className=" rounded-lg" src={data.images[0]} alt="" />
            </div>
            <h1 className=" text-black font-bold"> Title : {data.title} </h1>
            <h1> Brand :{data.brand} </h1>
            <h1 className=" text-red-600"> Price : ${data.price} </h1>
            <h1> Rating : {data.rating} </h1>
            <h1> Category : {data.category}</h1>
        </div>
    );
};

export default HomeDetels;