const Footer = () => {
    return (
        <div className=" bg-black text-white">
            <div className="h-[300px] max-w-[1440px] mx-auto p-10 flex justify-center gap-[100px]">
                <div>
                    <h1 className="mb-5 text-2xl">Home</h1>
                    <ul className="text-gray-400 flex flex-col gap-5">
                        <li>Categories</li>
                        <li>Devices</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-5 text-2xl">Movies</h1>
                    <ul className="text-gray-400 flex flex-col gap-5">
                        <li>Genres</li>
                        <li>Trending</li>
                        <li>Now Release</li>
                        <li>Popular</li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-5 text-2xl">Shows</h1>
                    <ul className="text-gray-400 flex flex-col gap-5">
                        <li>Genres</li>
                        <li>Trending</li>
                        <li>Now Release</li>
                        <li>Popular</li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-5 text-2xl">Support</h1>
                    <ul className="text-gray-400 flex flex-col gap-5">
                        <li>Contact US</li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-5 text-2xl">Subscription</h1>
                    <ul className="text-gray-400 flex flex-col gap-5">
                        <li>plans</li>
                        <li>features</li>
                    </ul>
                </div>
                <div>
                    <h1 className="mb-5 text-2xl">Connect with us</h1>
                    <ul className="text-gray-400 flex flex-col gap-5">
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </div>
            <div className="w-[1440px] mx-auto h-[1px] bg-white/30"></div>
            <div className="w-[1440px] mx-auto flex justify-between text-white/60 p-10">
                <p>@2023 streamvib, All Rights Reserved</p>
                <ul className="flex gap-5">
                    <li>terms of use</li>
                    <li>privacy policy</li>
                    <li>cookie policy</li>
                </ul>
            </div>
        </div>
    )
}
export default Footer;