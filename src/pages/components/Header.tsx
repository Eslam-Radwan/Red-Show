import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.svg'

const Header = () => {
    return (
        <div className='max-w-[1440px] relative mx-auto'>
            <div className='absolute z-3 flex justify-between items-center w-[100%] py-8'>
                <img src={logo} alt="logo" />
                <ul className='flex text-white py-7 px-10 sm:px-2 rounded-2xl gap-5 bg-black border-[#1A1A1A] border-6 absolute left-[50%] -translate-x-[50%]'>
                    <li><NavLink to='/' className={({isActive}) => isActive? 'bg-[#1A1A1A] py-[16px] px-[24px] rounded-2xl':''}>Home</NavLink></li>
                    <li><NavLink to='/movie' className={({isActive}) => isActive? 'bg-[#1A1A1A] py-[16px] px-[24px] rounded-2xl':''}>Movies</NavLink></li>
                    <li><NavLink to='/show' className={({isActive}) => isActive? 'bg-[#1A1A1A] py-[16px] px-[24px] rounded-2xl':''}>TV-Shows</NavLink></li>
                    <li><NavLink to='/signup' className={({isActive}) => isActive? 'bg-[#1A1A1A] py-[16px] px-[24px] rounded-2xl':''}>Register</NavLink></li>
                </ul>
                <span className='bg-white text-black p-3 rounded-2xl'>profile</span>
            </div>
        </div>
    )
}
export default Header;