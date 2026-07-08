"use client";

import { useState } from "react";
import { Layout } from "antd";
import Sidebar from "@/components/Sidebar";
import DashboardLayout from "@/components/DashboardLayout";
import OrderManagementTable from "@/components/OrderManagmentTable";

const { Content } = Layout;

export default function Home() {
  const [activeTab, setActiveTab] = useState("clients");

  return (
    <Layout className="min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <Layout className="bg-white">
        <Content>
          <DashboardLayout>
            <OrderManagementTable />
          </DashboardLayout>
        </Content>
      </Layout>
    </Layout>
  );
}