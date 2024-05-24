import { useLoaderData } from "react-router-dom";


const About = () => {

    const items = useLoaderData()
  


    return (
        <>
            <div className=" container mx-auto flex justify-center items-center p-7 text-center text-lg font-bold text-black">
                <div>
                    <div>
                        <img  className=" rounded-lg" src={items.images[1]} alt="" />
                    </div>
                    <h1> {items.id} </h1>
                    <h1> {items.brand} </h1>
                    <h1> {items.category} </h1>
                    <h1> {items.description} </h1>
                    <h1> {items.discountPercentage} </h1>
                </div>
            </div>

        </>
    );
};

export default About;