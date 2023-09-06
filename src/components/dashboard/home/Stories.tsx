import React, { useRef } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Select } from "antd";

const Stories = () => {
    const scrollContainerRef = useRef<any>(null);
    const scrollToLeft = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = 100;
            const currentScroll = scrollContainerRef.current.scrollLeft;
            scrollContainerRef.current.scrollTo({
                left: currentScroll - scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const scrollToRight = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = 100;
            const currentScroll = scrollContainerRef.current.scrollLeft;
            scrollContainerRef.current.scrollTo({
                left: currentScroll + scrollAmount,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className='mt-10 relative bg-white rounded-lg py-4 md:px-5'>

            <div className='flex md:flex-row flex-col justify-center md:justify-between items-center flex-wrap'>
                <h1 className='font-bold text-lg'>Stories</h1>
                <div className='space-x-2'>
                    <Select className='md:w-auto w-[140px]' defaultValue={"Your stories"} />
                    <Select className='md:w-auto w-[140px]' defaultValue={"Impressioin"} />
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className='overflow-hidden  flex flex-nowrap items-center transition-all'
                style={{ marginLeft: '0', marginRight: '0' }}
            >
                {
                    Array.from({ length: 20 }).map((_, index) => (
                        <div key={index} style={{ flex: '0 0 auto' }} className='mt-10 mx-5'>
                            <h1 className='text-lg'>Impression <span className='font-bold text-lg'>18</span></h1>
                            <div className='w-[296px] mt-3 flex flex-col justify-end items-center h-[526px] rounded-md relative' style={{ background: "url(https://s3-alpha-sig.figma.com/img/f4a4/afb0/2f21db6a7211ded80e5820be2b825032?Expires=1694995200&Signature=asjCg1VxbTBja7gF6GJwc1EdF06Qm4sHqaj537Gx47aaE~z6vP0ZJyWdPstAdr16eO37LWLf2zUYi7IKFWkhG8lDLi3sgenXJH8UOzzjdwbImnhAKWA5sN3SbCBimtWvje6SA~fYX5d1P7txacQnjGl4AefaHMRc63NaqSWMKCtCc9B6ZWyBxwnywpyBBA4AmeLmvMjGSSf48GmIKCs2Mj8hVpQbI5wIdYo1faSpHvEGbBu8JWDgdGiGe1KUELHlD5NaypwnhGx7S9tq11--LC6Ly5QOTGLeted7Hfjuu88uliALE9oZcDr3Uvk1-TJ9hGmCySsNIGZ8wMpHEZntLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4), lightgray 0px 0px / 100% 100% no-repeat", backgroundSize: "cover" }}>
                                <div className='w-[250px] p-4 mb-2  rounded-[15px] bg-[#fff]' style={{ boxShadow: "4px 4px 20px 0px rgba(36, 36, 80, 0.10)" }}>
                                    <div className='flex gap-4'>
                                        <div className='border p-2 flex justify-center'>
                                            <div className='w-[60px]  h-[60px]' style={{ background: "url(https://s3-alpha-sig.figma.com/img/73f1/ec9d/d18063f32e748d5fa798713064f4c57c?Expires=1694995200&Signature=pyYq06AjPjzmWU9Q3doLXsM6KG-M2JRg7oeSeM6b0v7VBHJvP8wz1USTceLw4i92YMDYDnlDpTbVKgV6jg804nSIaeoqBe~g0hLgKCxkhqmh2TvkC~utrhmmeY-Ur3JSWPHkv4nvpv1eEU62sQC9785vdZSJTaxMLDZ6VkCYjavtkMFLpUAnL-nU5EdjB39bb1Yq0jEdtRZ9O5xV~qw6S4aa1hoZ9jbMQAytvqEFQbKedGkGx63HDkQOtz6fw78-hdGohOBJmBCMyrEr8UihV1wGfD5Xz8u7vW-C-~ykfQ0vmN-FUyHHxy2lDcAJMI7qNeDy9GW~TocEId-x-V9q~g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4), lightgray 0px 0px / 100% 100% no-repeat", backgroundSize: "cover" }}></div>

                                        </div>
                                        <div className='flex-1 ml-5'>
                                            <h1>Sweet Chili-Peanut Sauce</h1>
                                            <button className='px-1 mt-2 py-2 bg-black text-white rounded-md'>Add Meal</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className='text-center mt-1 text-lg w-[296px]'>Sweet Chili-Peanut Sauce</p>
                        </div>
                    ))
                }
            </div>

            <div className='bg-white left-4  md:left-5 absolute bottom-[42%] transform -translate-y-1/2 rounded-full text-black border py-2 px-3 cursor-pointer'>
                <LeftOutlined onClick={scrollToLeft} className='text-xl' />
            </div>
            <div className='bg-white right-4  md:right-5 absolute bottom-[42%] transform -translate-y-1/2 rounded-full text-black border py-2 px-3 cursor-pointer'>
                <RightOutlined onClick={scrollToRight} className='text-xl' />
            </div>

        </div>
    )
}

export default Stories