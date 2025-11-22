import React from "react";

export default function SampleNav() {
    return (
        <nav className="container mx-auto flex justify-between items-center">
            <div className="flex w-100 h-full flex-2 gap-5 items-center">
                <img
                    className="w-24"
                    src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_black_24889e30-925c-4185-a028-9fef497a8e44.svg?v=1732879339"
                    alt=""
                    srcSet=""
                />

                <ul className="flex flex-row flex-nowrap gap-10 items-center">
                    <li className="relative h-12 parent-cat group">
                        <div className="h-full flex flex-col items-center justify-center">
                            <span className="flex">
                                Categories
                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect x="0" fill="none" width="24" height="24" />
                                    <g>
                                        <path d="M7 10l5 5 5-5" />
                                    </g>
                                </svg>
                            </span>
                            <ul className="child-cat bg-black text-white px-5 py-3 absolute top-[45px] hidden group-hover:flex flex-col gap-5">
                                <li>Categories1</li>
                                <li>Categories1</li>
                                <li>Categories1</li>
                                <li>Categories1</li>
                                <li>Categories1</li>
                            </ul>
                        </div>
                    </li>

                    <li>boAt Personalisation</li>
                    <li>Corporate Orders</li>

                    <li className="relative">
                        <div className="parent-cat group">
                            <span className="flex">
                                Gifting Store
                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect x="0" fill="none" width="24" height="24" />
                                    <g>
                                        <path d="M7 10l5 5 5-5" />
                                    </g>
                                </svg>
                            </span>
                            <ul className="child-cat w-42 bg-black text-white px-5 py-3 absolute top-[35px] hidden group-hover:flex flex-col gap-5">
                                <li>Gifting Store</li>
                                <li>Gifting Store</li>
                                <li>Gifting Store</li>
                                <li>Gifting Store</li>
                                <li>Gifting Store</li>
                            </ul>
                        </div>
                    </li>

                    <li className="relative">
                        <div className="parent-cat group">
                            <span className="flex">
                                More
                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect x="0" fill="none" width="24" height="24" />
                                    <g>
                                        <path d="M7 10l5 5 5-5" />
                                    </g>
                                </svg>
                            </span>
                            <ul className="child-cat w-42 bg-black text-white px-5 py-3 absolute top-[35px] hidden group-hover:flex flex-col gap-5">
                                <li>Gifting Store</li>
                                <li>Gifting Store</li>
                                <li>Gifting Store</li>
                                <li>Gifting Store</li>
                                <li>Gifting Store</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="flex flex-row gap-5 items-center">
                <div className="relative w-64">
                    <input
                        type="text"
                        placeholder="Earbuds"
                        className="w-full bg-blue-100 rounded-2xl py-2 pl-10 pr-4 focus:outline-none"
                    />
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                    >
                        <path d="M46,40.02c0.005-0.262-0.092-0.526-0.293-0.727l-9-9c-0.391-0.391-1.023-0.391-1.414,0L35,30.586l-1.953-1.953 C34.287,26.362,35,23.764,35,21c0-0.289,0-1.615,0-2c0-8.822-7.178-16-16-16S3,10.178,3,19c0,0.338,0,1.662,0,2 c0,8.822,7.178,16,16,16c3.285,0,6.34-0.998,8.884-2.702l2.409,2.409L30.586,37l-0.293,0.293c-0.391,0.391-0.391,1.023,0,1.414 l7.274,7.274c0.671,0.671,1.552,1.006,2.433,1.006s1.762-0.335,2.433-1.006l3.274-3.274C45.902,42.512,46,42.256,46,42 C46,41.744,45.995,40.269,46,40.02z" />
                    </svg>
                </div>

                <div className="account">
                    <svg
                        width="25"
                        height="25"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        id="svgkp"
                    >
                        <path
                            d="M22.9129 12.935L13.7571 23.0474C13.5348 23.2929 13.1284 23.1084 13.1669 22.7794L14.0816 14.9731H10.6991C10.4034 14.9731 10.2484 14.6219 10.4478 14.4035L20.3133 3.59739C20.5589 3.32834 20.9984 3.58134 20.8891 3.92887L18.2354 12.3664H22.6607C22.9557 12.3664 23.1109 12.7163 22.9129 12.935Z"
                            fill="#FEA203"
                        />
                        <path
                            id="svgkp-path"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.6079 5.35819C16.4805 5.1933 16.3421 5.03582 16.1932 4.8869C15.2702 3.96387 14.0183 3.44531 12.7129 3.44531C11.4075 3.44531 10.1556 3.96387 9.2326 4.8869C8.30957 5.80993 7.79102 7.06183 7.79102 8.36719C7.79102 9.67255 8.30957 10.9244 9.2326 11.8475C9.48368 12.0986 9.75909 12.3197 10.0533 12.5086L11.0235 11.4503C10.7335 11.2914 10.4649 11.0911 10.227 10.8531C9.56766 10.1938 9.19727 9.29959 9.19727 8.36719C9.19727 7.43479 9.56766 6.54057 10.227 5.88127C10.8863 5.22196 11.7805 4.85156 12.7129 4.85156C13.6453 4.85156 14.5395 5.22196 15.1988 5.88127C15.3636 6.04604 15.5103 6.22549 15.6377 6.41654L16.6079 5.35819ZM20.6413 18.6497L19.6746 19.7132C20.1676 20.4122 20.4473 21.2264 20.4473 22.0781V23.8359C20.4473 24.2243 20.7621 24.5391 21.1504 24.5391C21.5387 24.5391 21.8535 24.2243 21.8535 23.8359V22.0781C21.8535 20.7863 21.4016 19.6103 20.6413 18.6497ZM12.3111 17.5078H10.3026C7.27113 17.5078 4.97852 19.6394 4.97852 22.0781V23.8359C4.97852 24.2243 4.66372 24.5391 4.27539 24.5391C3.88707 24.5391 3.57227 24.2243 3.57227 23.8359V22.0781C3.57227 18.6922 6.67684 16.1016 10.3026 16.1016H12.4885L12.3111 17.5078Z"
                            fill="currentColor"
                            stroke="currentColor"
                        />
                    </svg>
                </div>

                <div className="shopping-cart">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        viewBox="0 0 22 22"
                        xmlSpace="preserve"
                        height="22"
                        width="22"
                        className="blank_cart"
                    >
                        <style>{`.st0{fill-rule:evenodd;clip-rule:evenodd; fill:#fff;} @media(min-width: 768px){ .st0{fill:#000 !important;} }`}</style>
                        <path
                            className="st0 header_cart_icon_svg"
                            d="M14,6.1v1.2C14,7.6,14.4,8,14.7,8c0.4,0,0.7-0.3,0.7-0.7V6.1h1.4c0.6,0,1.1,0.4,1.2,1l1.4,12.2  c0.1,0.6-0.4,1.2-1,1.3c0,0-0.1,0-0.1,0H3.7c-0.6,0-1.2-0.5-1.2-1.2c0,0,0-0.1,0-0.1L4,7.1c0.1-0.6,0.6-1,1.2-1h1.4v1.2  C6.6,7.6,6.9,8,7.3,8S8,7.6,8,7.3V6.1H14z M15.4,4.7V4.4C15.4,2,13.5,0,11,0S6.6,2,6.6,4.4v0.2H5.2c-1.3,0-2.4,1-2.6,2.3L1.2,19.1  C1,20.5,2,21.8,3.4,22c0.1,0,0.2,0,0.3,0h14.5c1.4,0,2.6-1.2,2.6-2.6c0-0.1,0-0.2,0-0.3L19.4,7c-0.2-1.3-1.3-2.3-2.6-2.3H15.4z   M11,1.4c-1.7,0-3,1.4-3,3l0,0v0.2H14V4.4C14,2.8,12.7,1.4,11,1.4L11,1.4z"
                        />
                    </svg>
                </div>
            </div>
        </nav>
    );
}