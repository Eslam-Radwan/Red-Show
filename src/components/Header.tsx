import logo from '../assets/Logo.svg'

const Header = () => {
 return (
    <div className='absolute z-3 flex justify-between items-center w-[100%] p-5'>
    <img src={logo} alt="logo" />
    <ul className='flex text-white p-5 px-16 rounded-2xl gap-5 bg-gray-950 border-gray-500 border'>
        <li>Home</li>
        <li>Movies</li>
        <li>TV-Shows</li>
        <li>Register</li>   
    </ul>
    <span className='bg-white p-3 rounded-2xl'>profile</span>
    </div>
    )
}
export default Header;