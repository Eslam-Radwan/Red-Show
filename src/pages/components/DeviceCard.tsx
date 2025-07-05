
interface DeviceCardInterface {
    icon:string, 
    platform: string,
    description: string
}

const DeviceCard = ({icon, platform, description}: DeviceCardInterface) => {
    return (
        <div className="from-[#0F0F0F] from-50% to-red-600/10 text-white p-10 bg-gradient-to-tr rounded-xl border border-gray-600/30 transition-all hover:-translate-y-3 ">
            <div className="flex gap-3 items-center mb-5">
                <img className="rounded-2xl bg-[#1A1A1A] p-3" src={icon}/>
                <h2 className="text-2xl ">{platform}</h2>
            </div>
            <p className="text-gray-200/60">{description}</p>
        </div>
    )

}
export default DeviceCard;