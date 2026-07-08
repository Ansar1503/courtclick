import { Layout,Button} from "antd"
import navLogo from "@/public/navbarLogo.svg";
import Image from "next/image";
import { 
  AppstoreOutlined, 
  TeamOutlined, 
  FileTextOutlined, 
  MessageOutlined 
} from "@ant-design/icons";

const {  Sider } = Layout;

const navLinks = [
  { id: "dashboard", icon: <AppstoreOutlined />,active:false },
  { id: "clients", icon: <TeamOutlined /> ,active:true},
  { id: "documents", icon: <FileTextOutlined /> ,active:false},
  { id: "messages", icon: <MessageOutlined />,active:false },
];


function sidebar() {
  return (
<Sider 
        width={80} 
        style={{ backgroundColor: "#130614" }} 
        className="flex flex-col items-center py-6 justify-between h-screen sticky top-0"
      >
        <div className="w-full flex flex-col items-center gap-10">
          <div className="h-12 w-12 relative flex items-center justify-center">
            <Image 
              src={navLogo} 
              alt="Court Click Logo" 
              width={36} 
              height={36} 
              priority 
            />
          </div>

          <div className="w-full flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <div key={link.id} className="w-full relative flex items-center justify-center">
                {link.active && (
                  <div className="absolute left-0 top-1 bottom-1 w-1 bg-amber-500 rounded-r-md" />
                )}
                <Button
                  type="text"
                  icon={link.icon}
                  className={`w-full h-12 flex items-center justify-center text-xl border-none ${
                    link.active ? "text-amber-500" : "text-gray-400"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </Sider>
  )
}

export default sidebar