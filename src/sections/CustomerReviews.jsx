import React from 'react'
import { reviews } from '../constants'

const CustomerReviews = () => {
    return (
        <section className='max-conatiner'>
            <h3 className='font-palanquin text-center text-4xl font-bold'>What Our
                <span className='text-coral-red'> Customers </span>
                Say?
            </h3>
            <p className='info-text m-auto mt-4 max-w-lg text-center'>Here Geniuine Stories from our customers.</p>
            <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
                <div className="flex justify-center items-center flex-col">
                    <img
                        src="/customer1.jpeg"
                        alt="customer"
                        className="rounded-full object-cover w-[120px] h-[120px]"
                    />
                    <p className="mt-6 max-w-sm text-center info-text">
                        The attention to detail and the quality of the product exceeded my expectations. Highly recommended!
                    </p>
                    <div className="mt-3 flex justify-center items-center gap-2.5">
                        <img
                            src="/star.svg"
                            width={24}
                            height={24}
                            alt="rating star"
                            className="object-contain m-0"
                        />
                        <p className="text-xl font-montserrat text-slate-gray">(4.5)</p>
                    </div>
                    <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">Morich Brown</h3>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <img
                        src="/customer2.svg"
                        alt="customer"
                        className="rounded-full object-cover w-[120px] h-[120px]"
                    />
                    <p className="mt-6 max-w-sm text-center info-text">
                        The product not only met but exceeded my expectations. I'll definitely be a returning customer!
                    </p>
                    <div className="mt-3 flex justify-center items-center gap-2.5">
                        <img
                            src="/star.svg"
                            width={24}
                            height={24}
                            alt="rating star"
                            className="object-contain m-0"
                        />
                        <p className="text-xl font-montserrat text-slate-gray">(4.5)</p>
                    </div>
                    <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">Lota Mongeskar</h3>
                </div>
            </div>

        </section>
    )
}

export default CustomerReviews