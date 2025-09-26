import { useState } from "react";
import {
  BookOpen,
  Upload,
  Video,
  Home,
  Users,
  FileText,
  Calculator,
  Globe,
  Languages,
  Beaker,
  Book,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Upload Assignment", url: "/upload", icon: Upload },
  { title: "Class Recordings", url: "/recordings", icon: Video },
  { title: "My Assignments", url: "/assignments", icon: FileText },
];

const subjectItems = [
  { title: "Kannada", url: "/subjects/kannada", icon: Languages },
  { title: "English", url: "/subjects/english", icon: Book },
  { title: "Hindi", url: "/subjects/hindi", icon: Languages },
  { title: "Social Studies", url: "/subjects/social", icon: Globe },
  { title: "Science", url: "/subjects/science", icon: Beaker },
  { title: "Mathematics", url: "/subjects/maths", icon: Calculator },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const isCollapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium shadow-md" 
      : "hover:bg-primary/10 hover:text-primary transition-all duration-200";

  return (
    <Sidebar
      collapsible="icon"
    >
      <SidebarContent className="bg-gradient-to-b from-primary/5 to-secondary/5">
        <div className="p-4 border-b">
          <h2 className={`font-bold text-lg text-primary ${isCollapsed ? "hidden" : "block"}`}>
            Lurn
          </h2>
          {isCollapsed && <BookOpen className="h-8 w-8 text-primary" />}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Subjects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {subjectItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="h-4 w-4" />
                      {!isCollapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}