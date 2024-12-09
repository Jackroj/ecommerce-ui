export default function Banner()
{
    const img = "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/Banner/Blog/Desktop_1920x694.webp 1x";
    const img1 = "https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/Banner/Blog/Desktop_1920x694.jpg 1x";
    return(<>
    <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">
    <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src="https://cdn.caratlane.com/media/static/images/V4/2024/CL/11_NOV/Banner/Blog/Desktop_1920x694.webp" alt="" />
    </div>

    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl bg-transparent">
        <div className="flex justify-end max-w-5xl mx-auto">
            <div className="overflow-hidden md:w-1/2">
                <div className="p-8 sm:py-10 sm:px-12">
                   
                    <p className="mt-6 text-base font-normal leading-7 text-gray-900"></p>
                    <div className="mt-16">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>);
}