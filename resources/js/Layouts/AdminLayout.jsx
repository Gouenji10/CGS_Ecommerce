import NavbarAdmin from "@/Components/AdminComp/Navbar";
import SidebarAdmin from "@/Components/AdminComp/Sidebar";

export default function Admin({ user, header, children }) {
    return (
        <div className="content-wrapper">
            <NavbarAdmin />
            <div className="flex overflow-hidden bg-gray-50 dark:bg-gray-900">
                <SidebarAdmin />
                <div className="relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900">
                    <main className="bg-white overflow-hidden shadow-sm">
                        <div className="text-gray-900">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
