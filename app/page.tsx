import { Layout} from "antd";
import Sidebar from "./components/sidebar";
const {  Content } = Layout;


export default function Home() {
  return (
    <Layout className="min-h-screen">
      <Sidebar />
      <Layout className="bg-white">
        <Content className="p-8">
          <h1 className="text-2xl font-bold text-gray-900">Certified True Copy</h1>
        </Content>
      </Layout>
    </Layout>
  );
}