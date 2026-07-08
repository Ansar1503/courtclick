import { Layout, Button } from "antd";
import navLogo from "@/public/navbarLogo.svg";
import userImage from "@/public/image.png"
import Image from "next/image";
import {
  AppstoreOutlined,
  TeamOutlined,
  CalendarOutlined,
  FileTextOutlined,
  MessageOutlined,
  IdcardOutlined,
  SettingOutlined,
  EllipsisOutlined
} from "@ant-design/icons";

const { Sider } = Layout;

const navLinks = [
  { id: "dashboard", icon: <AppstoreOutlined /> },
  { id: "clients", icon: <TeamOutlined /> },
  { id: "calendar", icon: <CalendarOutlined /> },
  { id: "documents", icon: <FileTextOutlined /> },
  { id: "messages", icon: <MessageOutlined /> },
  { id: "idcard", icon: <IdcardOutlined /> },
  { id: "settings", icon: <SettingOutlined /> },
  { id: "more", icon: <EllipsisOutlined /> },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <Sider
      width={80}
      style={{ backgroundColor: "#130614" }}
      className="h-screen sticky"
    >
      <div className="flex flex-col justify-between gap-80">
        <div className="flex flex-col items-center gap-8 w-full">
        <div className="relative flex items-center justify-center ">
          <Image
            src={navLogo}
            alt="Court Click Logo"
            width={100}
            height={50}
            priority
          />
        </div>

        <div className="w-full flex flex-col items-center gap-4">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;

            return (
              <div key={link.id} className="w-full relative flex items-center justify-center">
                {isActive && (
                  <div className="absolute left-0 top-1 bottom-1 w-1 bg-amber-500 rounded-r-md" />
                )}
                <Button
                  type="text"
                  icon={link.icon}
                  onClick={() => setActiveTab(link.id)}
                  className={`flex items-center justify-center border-none w-full h-11 ${isActive ? "!text-amber-500 !text-2xl" : "!text-gray-400 !text-2xl"
                    }`}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center ">
          <Image
            src={userImage}
            alt="User Profile Picture"
            width={40}
            height={40}
            className="rounded-full object-cover border border-gray-700/50"
          />
        </div>
      </div>
    </Sider>
  );
}