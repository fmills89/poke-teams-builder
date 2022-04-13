import React from 'react';
import profOakNavi from "../assets/professoroak-navi.png";

function UserTeam() {
    return(
        <section>
            <div className='grid grid-flow-row auto-rows-max place-items-center'>
                <div className='w-1/3 md:h-[120px] h-40 mt-6 z-10 bg-zinc-200 drop-shadow-lg rounded-md'>
                    <div className='h-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-t-md'></div>
                        <div>
                            <p className='text-center mt-2 p-4'>Welcome to your team's page!</p>
                        </div>
                    </div>
                <div className='w-3/4 md:h-48 h-80 mt-6 z-10 bg-zinc-200 drop-shadow-lg rounded-md'>
                    <div className='h-2 bg-gradient-to-r from-yellow-500 to-red-500 rounded-t-md'></div>
                        <div className='flex'>
                            <div className='w-1/3'>
                                <img
                                    className='mx-2 mt-6'
                                    src={profOakNavi}
                                    alt='professor oak navi'
                                />
                            </div>
                            <div className='w-2/3'>
                                <p className='text-center mt-4 p-4 text:xs md:text-sm'>
                                    Here you can edit your team!
                                    Simply click the remove button
                                    and head back to the dashboard
                                    to add more pokemon!
                                </p>
                            </div>
                        </div>
                </div>
            </div>
            <div className='grid grid-col-1 md:grid-cols-3 gap-4 m-4 p-4  w-full h-screen'>
                <div className='card'>
                    <div className='container'>
                        <span>
                            <div>
                                Name:
                            </div>
                            <div>
                                Type:
                            </div>
                            <button>Remove</button>
                        </span>
                    </div>
                </div>
                <div className='card'>
                    <div className='container'>
                        <span>
                            <div>
                                Name:
                            </div>
                            <div>
                                Type:
                            </div>
                            <button>Remove</button>
                        </span>
                    </div>
                </div>
                <div className='card'>
                    <div className='container'>
                        <span>
                            <div>
                                Name:
                            </div>
                            <div>
                                Type:
                            </div>
                            <button>Remove</button>
                        </span>
                    </div>
                </div>
                <div className='card'>
                    <div className='container'>
                        <span>
                            <div>
                                Name:
                            </div>
                            <div>
                                Type:
                            </div>
                            <button>Remove</button>
                        </span>
                    </div>
                </div>
                <div className='card'>
                    <div className='container'>
                        <span>
                            <div>
                                Name:
                            </div>
                            <div>
                                Type:
                            </div>
                            <button>Remove</button>
                        </span>
                    </div>
                </div>
                <div className='card'>
                    <div className='container'>
                        <span>
                            <div>
                                Name:
                            </div>
                            <div>
                                Type:
                            </div>
                            <button>Remove</button>
                        </span>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default UserTeam;