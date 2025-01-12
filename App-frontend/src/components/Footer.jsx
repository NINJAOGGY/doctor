import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='mt-[2cm] md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my10 '>
                {/* left section */}
                <div>
                    <img src={assets.logo} alt="" />
                    <p className="w-full md:w-2/3 text-gray-600 leading-6 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/* center section */}
                <div>
                    <p className="text-xl font-medium mb-2">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li></ul>
                </div>


                {/* right section */}
                <div>
                    <p className="text-xl font-medium mb-2">Get In Touch</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+123-456-789</li>
                        <li>Oggy-and-Jack@gmail.com</li>
                    </ul>
                </div>

            </div>
            <div>
                {/* just a line */}
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024 @Health - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
