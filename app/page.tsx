"use client";

import { useState } from "react";
import { Layout } from "antd";
import Sidebar from "@/components/sidebar";

const { Content } = Layout;

export default function Home() {
  const [activeTab, setActiveTab] = useState("clients");

  return (
    <Layout className="min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <Layout className="bg-white">
        <Content className="p-8">
          <div >
            
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}