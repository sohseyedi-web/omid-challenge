import { NavLink } from "react-router-dom";

const CustomNavlink = ({ children, to }) => {
  const navlinkClass =
    "flex items-center gap-x-4 hover:bg-slate-100 px-4 py-3 rounded-xl transition-all duration-300";

  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${navlinkClass} bg-[#ffe5f1] text-[#FF0072] font-semibold active-link`
            : `${navlinkClass} text-gray-600`
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default CustomNavlink;
