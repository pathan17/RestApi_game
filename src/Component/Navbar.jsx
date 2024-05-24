import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'GesingGame', link: '/game' }
    ];

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="bg-cyan-500 py-7">
            <div className="container mx-auto">
                <div className="main_items flex justify-between items-center">
                    <div className="log">
                        <h1 className=" text-4xl text-white font-bold">Logo</h1>
                    </div>
                    <div className="menu flex items-center gap-5">
                        <ul className={`flex gap-4 ${showMenu ? 'block' : 'hidden'} `}>
                            {menuItems.map((item, i) => (
                                <li key={i} className=" text-lg font-serif text-white">
                                    {/* <Link to={item.link}>{item.name}</Link> */}
                                    <NavLink to={item.link} className={ ({ isActive}) => isActive ? "active" : ""} >  {item.name} </NavLink>

                                </li>
                            ))}
                        </ul>
                        <div className="div text-4xl">
                            {
                                showMenu ?
                                    (
                                        <button onClick={toggleMenu} >
                                            <MdClose />
                                        </button>
                                    )
                                    :
                                    (
                                        <button onClick={toggleMenu} >
                                            <IoMenu />
                                        </button>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
