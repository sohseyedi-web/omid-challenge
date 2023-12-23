import * as RiIcon from "react-icons/ri";
import { useQuery } from '@tanstack/react-query';

const Navbar = ({ active, setActive }) => {

  

  return (
    <header className="flex items-center justify-between py-2 w-full border-b lg:border-transparent ">
      <h3 className="text-2xl text-[#4d4d4d]">ورزشکاران من</h3>
      <span
        className="lg:hidden block cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 3H4V5H22V3Z" fill="#616161" />
          <path d="M22 19H4V21H22V19Z" fill="#616161" />
          <path d="M22 11H4V13H22V11Z" fill="#616161" />
        </svg>
      </span>
    </header>
  );
};

export default Navbar;
