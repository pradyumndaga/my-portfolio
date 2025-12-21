import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { IconBrandGithub, IconBrandLinkedin, IconCode, IconCopyright, IconLayoutSidebarLeftCollapseFilled, IconLayoutSidebarRightCollapse, IconMail, IconSend, IconUser } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "./ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { Link, useMatchRoute } from "@tanstack/react-router"
import { DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose, Drawer } from "./ui/drawer"

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

const contacts = [
    {
        name: "Email",
        url: "mailto:pradyumndaga28@gmail.com",
        icon: IconMail,
    },
    {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/pradyumn-daga-7642a213a/",
        icon: IconBrandLinkedin,
    },
    {
        name: "Github",
        url: "https://github.com/pradyumndaga",
        icon: IconBrandGithub,
    },
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
                    <Drawer>
                        <div className="flex items-center gap-2 w-full justify-center" >
                            <DrawerTrigger className="flex items-center gap-2 bg-blue-500 text-white p-2 rounded-md">
                                <SidebarMenuButton tooltip="Contact" render={<a href="#" />}>
                                    <IconSend size={20} />
                                    <span className="text-lg">Contact</span>
                                </SidebarMenuButton>
                            </DrawerTrigger>
                        </div>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Contact me:</DrawerTitle>
                                <DrawerDescription>Choose you means to communicate</DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                                {/* <Button>Submit</Button>
                                <DrawerClose>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose> */}
                                <div className="flex gap-4 justify-center">
                                    {
                                        contacts.map((contact) => (
                                            <DrawerClose key={contact.name}>
                                                <Button variant="outline" className="w-16 h-16 rounded-full">
                                                    <contact.icon className="w-24 h-24" />
                                                </Button>
                                            </DrawerClose>
                                        ))
                                    }
                                </div>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                    <p className="flex items-center gap-2 justify-center group-data-[collapsible=icon]:hidden"> <IconCopyright /> 2026 Pradyumn</p>
                </SidebarFooter>
            </Sidebar>
        </SidebarProvider>
    )
}