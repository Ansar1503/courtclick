import React, { useState } from "react";
import { Input, Button, Select, Pagination } from "antd";
import {
  SearchOutlined,
  SlidersOutlined,
  ShareAltOutlined,
  PlusOutlined
} from "@ant-design/icons";

const initialTabs = [
  { id: "orders", label: "Orders", count: 121, hasAdd: false },
  { id: "clerks", label: "Clerks", count: 40, hasAdd: true },
  { id: "courts", label: "Courts", count: 32, hasAdd: false },
  { id: "districts", label: "Districts", count: 14, hasAdd: false },
  { id: "eligible", label: "Eligible Users", count: 11, hasAdd: false },
];

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeSubTab, setActiveSubTab] = useState("orders");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="w-full min-h-screen bg-[#F8F9FA] p-6 flex flex-col justify-between">
      <div className="w-full flex flex-col gap-4 mb-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="flex flex-col text-left">
            <h1 className="text-xl font-bold text-gray-900 tracking-tight leading-tight">
              Certified True Copy (47834)
            </h1>
            <span className="text-gray-400 text-xs font-medium mt-0.5">
              Manage Your CTC Orders Here
            </span>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button 
              size="middle"
              icon={<ShareAltOutlined className="text-gray-600 text-sm" />} 
              className="flex items-center justify-center !rounded-lg border border-gray-200 shadow-sm"
            />
            <Button 
              size="middle"
              icon={<SlidersOutlined className="text-gray-600 text-sm rotate-90" />} 
              className="flex items-center justify-center !rounded-lg border border-gray-200 shadow-sm"
            />
            <Input 
              placeholder="Search" 
              size="middle"
              suffix={<SearchOutlined className="text-gray-400" />}
              className="!rounded-lg max-w-[240px] border border-gray-200 shadow-sm"
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-transparent">
          <div className="flex flex-wrap items-center gap-1.5 bg-[#1F0E22] p-1 rounded-full">
            {initialTabs.map((tab) => {
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold transition-all ${
                    isActive 
                      ? "bg-white text-black shadow-sm" 
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span>{`${tab.label} (${tab.count})`}</span>
                  {tab.hasAdd && (
                    <PlusOutlined 
                      className={`text-[9px] ml-0.5 p-0.5 rounded ${
                        isActive ? "bg-gray-100 text-black" : "bg-gray-800 text-gray-400"
                      }`} 
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center">
            <Select
              defaultValue="ORDERS"
              className="custom-type-select min-w-[120px]"
              size="small"
              options={[{ value: "ORDERS", label: "ORDERS" }]}
              suffixIcon={null}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex-grow bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-4">
        {children}
      </div>
      <div className="w-full flex justify-end items-center py-1 bg-transparent">
        <Pagination
          current={currentPage}
          total={48100}
          pageSize={10}
          showSizeChanger={false}
          onChange={(page) => setCurrentPage(page)}
          showQuickJumper={{
            goButton: <span className="text-xs font-bold text-gray-600 ml-1.5 cursor-pointer">Page</span>
          }}
          className="custom-dashboard-pagination text-xs"
        />
      </div>
    </div>
  );
}