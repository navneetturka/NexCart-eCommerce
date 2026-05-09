import { NavLink } from "react-router-dom";

const navClass = ({ isActive }) =>
  [
    "flex items-center gap-3 rounded-md border border-gray-200 px-4 py-3 text-sm text-gray-800 transition-colors",
    isActive
      ? "border-l-4 border-l-[#c2185b] bg-pink-50 pl-[13px]"
      : "hover:bg-gray-50",
  ].join(" ");

const IconPlus = () => (
  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-lg leading-none text-gray-600">
    +
  </span>
);

const IconList = () => (
  <span className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 text-gray-500">
    ☑
  </span>
);

const Sidebar = () => (
  <aside className="w-full shrink-0 border-r border-gray-200 bg-white p-4 sm:w-56 md:w-64">
    <nav className="flex flex-col gap-3">
      <NavLink to="/add" className={navClass}>
        <IconPlus />
        Add Items
      </NavLink>
      <NavLink to="/list" className={navClass}>
        <IconList />
        List Items
      </NavLink>
      <NavLink to="/orders" className={navClass}>
        <IconList />
        Orders
      </NavLink>
    </nav>
  </aside>
);

export default Sidebar;
