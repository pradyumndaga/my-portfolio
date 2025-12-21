import { Outlet } from "@tanstack/react-router";
import { SideMenu } from "./side-menu";

export const Dashboard = () => {
    return (
        <div className="flex h-svh w-screen overflow-hidden">
            <div className="border-r-2 h-full"><SideMenu /></div>
            <div className="flex-1 m-4 p-2 border-2 border-gray-500 rounded-xl shadow-sm overflow-y-auto">
                <Outlet />
            </div>
        </div>
    )

};