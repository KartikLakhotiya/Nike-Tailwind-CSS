import React from 'react'

const Footer = () => {
    return (
        <section className="bg-black padding-x padding-t pb-8">
            <footer className="max-container">
                <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                    <div className="flex flex-col items-start">
                        <a href="/">
                            <img src="/footer-logo.svg" alt="logo" width={150} height={46} className="m-0" />
                        </a>
                        <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
                            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
                        </p>
                        <div className="flex items-center gap-5 mt-8">
                            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                                <img src="/facebook.svg" alt="facebook logo" width={24} height={24} />
                            </div>
                            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                                <img src="/twitter.svg" alt="twitter logo" width={24} height={24} />
                            </div>
                            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                                <img src="/instagram.svg" alt="instagram logo" width={24} height={24} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                        <div>
                            <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">Products</h4>
                            <ul>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="/">Air Force 1</a>
                                </li>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="/">Air Max 1</a>
                                </li>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="/">Air Jordan 1</a>
                                </li>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="/">Air Force 2</a>
                                </li>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="/">Nike Waffle Racer</a>
                                </li>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="/">Nike Cortez</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">Help</h4>
                            <ul>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="/">About us</a>
                                </li>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="/">FAQs</a>
                                </li>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="/">How it works</a>
                                </li>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="/">Privacy policy</a>
                                </li>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="/">Payment policy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">Get in touch</h4>
                            <ul>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="mailto:customer@nike.com">customer@nike.com</a>
                                </li>
                                <li className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                                    <a href="tel:+92554862354">+92554862354</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                    <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                        <img src="/copyright-sign.svg" alt="copyright sign" width={20} height={20} className="rounded-full m-0" />
                        <p>Copyright. All rights reserved.</p>
                    </div>
                    <p className="font-montserrat cursor-pointer">Terms &amp; Conditions</p>
                </div>
            </footer>
        </section>


    )
}

export default Footer