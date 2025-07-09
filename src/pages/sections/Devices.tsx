import DeviceCard from "../components/DeviceCard";
import phoneIcon from '../../assets/phoneIcon.svg'
import gamingIcon from '../../assets/gamingIcon.svg'
import tabletIcon from '../../assets/tabletIcon.svg'
import vrIcon from '../../assets/vrIcon.svg'
import tvIcon from '../../assets/tvIcon.svg'
import laptopIcon from '../../assets/laptopIcon.svg'

const Devices = () => {
    return (
        <div className="max-w-[1440px] mx-auto my-[100px]">
            <h1 className="text-5xl mb-5">Explore our wide variety of categories</h1>
            <p>
                Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
            </p>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8 my-10">
                < DeviceCard
                    icon={phoneIcon}
                    platform="Smartphone"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
                < DeviceCard
                    icon={tabletIcon}
                    platform="Tablet"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
                < DeviceCard
                    icon={tvIcon}
                    platform="TV"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
                < DeviceCard
                    icon={laptopIcon}
                    platform="Laptop"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
                < DeviceCard
                    icon={gamingIcon}
                    platform="Gaming"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
                < DeviceCard
                    icon={vrIcon}
                    platform="VR"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
            </div>
        </div>
    )
}


export default Devices;