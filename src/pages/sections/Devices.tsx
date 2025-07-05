import DeviceCard from "../components/DeviceCard";
import phoneIcon from '../../assets/phoneIcon.svg'
import gamingIcon from '../../assets/gamingIcon.svg'
import tabletIcon from '../../assets/tabletIcon.svg'
import vrIcon from '../../assets/vrIcon.svg'
import tvIcon from '../../assets/tvIcon.svg'
import laptopIcon from '../../assets/laptopIcon.svg'

const Devices = () => {
    return (
        <div className="max-w-[1440px] mx-auto">

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8">
                < DeviceCard
                    icon={phoneIcon}
                    platform="Smartphone"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
                < DeviceCard
                    icon={tabletIcon}
                    platform="Smartphone"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
                < DeviceCard
                    icon={tvIcon}
                    platform="Smartphone"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
                < DeviceCard
                    icon={laptopIcon}
                    platform="Smartphone"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
                < DeviceCard
                    icon={gamingIcon}
                    platform="Smartphone"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
                < DeviceCard
                    icon={vrIcon}
                    platform="Smartphone"
                    description="StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store" />
            </div>
        </div>
    )
}


export default Devices;