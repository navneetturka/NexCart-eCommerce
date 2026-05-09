import AdminNavbar from "./AdminNavbar.jsx";
import Sidebar from "./Sidebar.jsx";

const AdminShell = ({ children }) => (
  <div className="flex min-h-screen flex-col bg-[#f3f4f6]">
    <AdminNavbar />
    <div className="flex flex-1 flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 overflow-auto p-4 sm:p-6 md:p-8">{children}</main>
    </div>
  </div>
);

export default AdminShell;
