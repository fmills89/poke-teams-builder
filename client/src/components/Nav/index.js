import React from 'react';

function Nav() {
    return (
    <div className="bg-red-700 shadow-lg">
       <div className="container mx-auto">
           <div className="sm:flex justify-around">
               <a href="#" className="hover:text-white text-3xl font-bold p-3">Dashboard</a>

               <ul className="text-white-400 sm:self-center textxl border-t sm:border-none">
                    <li className="sm:inline-block">
                        <a href="#" className="p-3 hover:text-white">Login</a>
                    </li>
                    <li className="sm:inline-block">
                        <a href="#" className="p-3 hover:text-white">Sign-up</a>
                    </li>
               </ul>
           </div>
       </div>
    </div>
    )
}

export default Nav;