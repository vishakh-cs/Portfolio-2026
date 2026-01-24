import React from "react";
import Image from "next/image";
import proImage from "../../../public/images/vishkah-img.jpg";

export default function ProfileSection() {
    return (
        <div>
            <div className='flex-shrink-0 relative'>
                <div className="flex">
                    <div className='bg-amber-300 w-24 h-24 rounded-full flex items-center justify-center overflow-hidden'>
                        <Image
                            src={proImage}
                            width={96}
                            height={96}
                            alt='profile'
                            className='rounded-full object-cover w-24 h-24'
                        />
                    </div>

                    <div>
                        <div className='relative inline-block'>
                            <div className='bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-sm'>
                                Good {new Date().getHours() < 12 ? "Morning!" : "Afternoon!"}
                            </div>
                            <div className='absolute -bottom-1 left-5 rotate-45 w-3 h-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-bl-full'></div>
                        </div>
                    </div>

                </div>
                <p className='text-gray-700 font-semibold text-sm leading-relaxed'>
                    I’m{" "}
                    <span className='font-bold text-lg text-black relative inline-block'>
                        Vishakh
                        <svg
                            className='absolute -bottom-1 left-0 w-full h-3 text-blue-500'
                            viewBox='0 0 100 20'
                            preserveAspectRatio='none'
                        >
                            <path
                                d='M0,10 C20,20 40,0 60,10 80,20 100,0 120,10'
                                stroke='currentColor'
                                strokeWidth='3'
                                fill='transparent'
                            />
                        </svg>
                    </span>
                    , an enthusiastic Software Developer from Kerala, India, with 2+ years of hands-on experience.
                </p>
            </div>
        </div>
    );
}
