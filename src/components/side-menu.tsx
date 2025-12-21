import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { IconCode, IconCopyright, IconLayoutSidebarLeftCollapseFilled, IconLayoutSidebarRightCollapse, IconSettings, IconUser } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { Link, useMatchRoute } from "@tanstack/react-router"

// Menu items.
const items = [
    {
        title: "Profile",
        url: "/profile",
        icon: IconUser,
    },
    {
        title: "Projects",
        url: "/projects",
        icon: IconCode,
    },

    // {
    //     title: "Settings",
    //     url: "#",
    //     icon: IconSettings,
    // },
]

export function SideMenu() {
    const matchRoute = useMatchRoute()
    const isMobile = useIsMobile()
    const [open, setOpen] = useState(true)
    return (
        <SidebarProvider open={isMobile ? false : open} onOpenChange={setOpen} disableMobile>
            <Sidebar collapsible="icon">
                <SidebarHeader>
                    <div className="flex items-center justify-between p-2 group-data-[collapsible=icon]:justify-center">
                        {open && !isMobile && (
                            <>
                                <span className="font-bold text-xl truncate group-data-[collapsible=icon]:hidden">
                                    Pradyumn Daga
                                </span>
                                <Button variant="ghost" size="icon" onClick={() => setOpen((prev) => !prev)}>
                                    <IconLayoutSidebarLeftCollapseFilled />
                                </Button>
                            </>
                        )}

                        {!open && !isMobile && (
                            <Button variant="ghost" size="icon" onClick={() => setOpen((prev) => !prev)}>
                                <IconLayoutSidebarRightCollapse />
                            </Button>
                        )}
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <Link to={item.url} className="flex items-center gap-2">
                                            <SidebarMenuButton tooltip={item.title} className={`mb-2 ${matchRoute({ to: item.url }) ? 'bg-gray-700'
                                                : 'text-muted-foreground'}`} render={<a href={item.url} />}>
                                                <item.icon />
                                                <span className="text-lg">{item.title}</span>
                                            </SidebarMenuButton>
                                        </Link>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <p className="flex items-center gap-2 justify-center group-data-[collapsible=icon]:hidden"> <IconCopyright /> 2026 Pradyumn</p>
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    )
}