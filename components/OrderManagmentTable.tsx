import { useState } from "react";
import { Table, Button, Select, Tag, Space, message } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  CopyOutlined,
  EyeOutlined,
  CloudUploadOutlined,
  UserAddOutlined,
  EditOutlined,
  DeleteOutlined,
  ShareAltOutlined,
  FormOutlined,
  CalendarOutlined,
  SlidersOutlined,
  SettingOutlined
} from "@ant-design/icons";

interface UserInfo {
  name: string;
  phone: string;
  refId: string;
}

interface CourtComplex {
  title: string;
  location: string;
}

interface ProductInfo {
  title: string;
  price: string;
}

interface OrderDateInfo {
  date: string;
  time: string;
  elapsedDays?: string;
}

interface ClerkInfo {
  name?: string;
  isAssigned: boolean;
}

interface TableRowData {
  key: string;
  index: number;
  userInfo: UserInfo;
  courtComplex: CourtComplex;
  product: ProductInfo;
  orderDate: OrderDateInfo;
  status: "cancelled" | "order placed" | "payment completed";
  tags: string[];
  clerk: ClerkInfo;
}

export default function OrderManagementTable() {
  const [rowsData, setRowsData] = useState<TableRowData[]>([
    {
      key: "1",
      index: 1,
      userInfo: { name: "Soji Abraham", phone: "91 80861 65790", refId: "OP/000251/2026" },
      courtComplex: { title: "Court Complex, Kunnamkullam", location: "Thrissur" },
      product: { title: "Judgement #584854", price: "₹3,500" },
      orderDate: { date: "7 Feb 2026", time: "12:57 PM" },
      status: "cancelled",
      tags: ["Subscription Pending", "Gouri", "Add Case", "Aadhaar Verified"],
      clerk: { name: "Shabarinath", isAssigned: true }
    },
    {
      key: "2",
      index: 2,
      userInfo: { name: "Shaman", phone: "91 80861 65790", refId: "OS/000850/2026" },
      courtComplex: { title: "District Court Thrissur", location: "Thrissur" },
      product: { title: "Interim Order #487565", price: "$150" },
      orderDate: { date: "7 Feb 2026", time: "12:57 PM", elapsedDays: "03 days since payment" },
      status: "order placed",
      tags: ["Subscription Pending", "Gouri", "Add Case", "Aadhaar Verified"],
      clerk: { isAssigned: false }
    },
    {
      key: "3",
      index: 3,
      userInfo: { name: "Gopalan", phone: "91 80861 65790", refId: "OS/000850/2026" },
      courtComplex: { title: "District Court Thrissur", location: "Thrissur" },
      product: { title: "Other\nJoint Petition Filed Under Section 13 B", price: "₹2,500" },
      orderDate: { date: "7 Feb 2026", time: "12:57 PM", elapsedDays: "11 days since payment" },
      status: "payment completed",
      tags: ["Subscription Pending", "Gouri", "Add Case", "Aadhaar Verified"],
      clerk: { isAssigned: false }
    }
  ]);

  const handleCopyText = (text: string, description: string) => {
    navigator.clipboard.writeText(text);
    message.success(`${description} copied to clipboard!`);
  };

  const handleRemoveTag = (rowKey: string, tagToRemove: string) => {
    setRowsData(prev =>
      prev.map(row =>
        row.key === rowKey 
          ? { ...row, tags: row.tags.filter(t => t !== tagToRemove) } 
          : row
      )
    );
    message.info(`Tag "${tagToRemove}" removed`);
  };

  const columns: ColumnsType<TableRowData> = [
    {
      title: "#",
      dataIndex: "index",
      key: "index",
      width: 45,
      align: "center",
      className: "!text-gray-400 font-semibold text-xs"
    },
    {
      title: "USER INFO",
      dataIndex: "userInfo",
      key: "userInfo",
      width: 190,
      render: (user: UserInfo) => (
        <div className="flex flex-col gap-1 items-start text-xs text-left">
          <span className="font-bold text-gray-900 text-[13px]">{user.name}</span>
          <div className="flex items-center gap-1 text-gray-500 font-medium">
            <span>{user.phone}</span>
            <Button 
              type="text" 
              size="small" 
              icon={<CopyOutlined className="text-gray-400 hover:text-gray-600 text-[11px]" />} 
              onClick={() => handleCopyText(user.phone, "Phone number")}
              className="!p-0 !h-auto flex items-center"
            />
          </div>
          <span className="text-gray-400 font-medium">{user.refId}</span>
          <Button
            size="small"
            icon={<CopyOutlined className="text-[11px]" />}
            onClick={() => handleCopyText("Mock Address content matching data details", "Address")}
            className="mt-1 !bg-gray-200 !border-none !text-gray-700 font-bold !text-[11px] rounded px-2 h-6 flex items-center gap-1 hover:!bg-gray-300"
          >
            Copy Address
          </Button>
        </div>
      )
    },
    {
      title: "COURT COMPLEX",
      dataIndex: "courtComplex",
      key: "courtComplex",
      width: 170,
      render: (court: CourtComplex) => (
        <div className="flex flex-col text-xs text-left leading-snug">
          <span className="font-bold text-gray-900 text-[13px]">{court.title}</span>
          <span className="text-gray-400 mt-1 font-semibold">{court.location}</span>
        </div>
      )
    },
    {
      title: "PRODUCTS",
      dataIndex: "product",
      key: "product",
      width: 150,
      render: (product: ProductInfo) => (
        <div className="flex flex-col text-xs text-left leading-normal">
          <span className="font-bold text-gray-900 text-[13px] whitespace-pre-line">{product.title}</span>
          <span className="text-gray-400 mt-0.5 font-bold">{product.price}</span>
        </div>
      )
    },
    {
      title: (
        <div className="flex items-center gap-1 justify-start">
          <span>ORDER DATE</span>
          <CalendarOutlined className="text-gray-400 text-xs" />
        </div>
      ),
      dataIndex: "orderDate",
      key: "orderDate",
      width: 140,
      render: (order: OrderDateInfo) => (
        <div className="flex flex-col text-xs text-left leading-tight">
          <span className="font-bold text-gray-900 text-[13px]">{order.date}</span>
          <span className="text-gray-400 font-semibold mt-0.5">{order.time}</span>
          {order.elapsedDays && (
            <span className="text-red-500 font-bold mt-1 text-[11px]">
              {order.elapsedDays}
            </span>
          )}
        </div>
      )
    },
    {
      title: (
        <div className="flex items-center gap-1 justify-start">
          <span>STATUS</span>
          <SlidersOutlined className="text-gray-400 text-xs rotate-90" />
        </div>
      ),
      dataIndex: "status",
      key: "status",
      width: 150,
      render: (status: TableRowData["status"]) => {
        const statusColors = {
          cancelled: "!bg-red-50 !text-red-500 !border-red-200",
          "order placed": "!bg-green-50 !text-green-600 !border-green-200",
          "payment completed": "!bg-amber-50 !text-amber-500 !border-amber-200"
        };
 
        return (
          <div className="flex flex-col gap-2.5 items-start w-full">
            <Select 
              placeholder="Update status" 
              className="w-full text-xs" 
              size="small"
              options={[
                { value: "placed", label: "Order Placed" },
                { value: "completed", label: "Payment Completed" },
                { value: "cancelled", label: "Cancelled" }
              ]}
            />
            <Tag className={`capitalize rounded-full font-bold px-3 py-0.5 border text-[11px] m-0 ${statusColors[status]}`}>
              {status}
            </Tag>
          </div>
        );
      }
    },
    {
      title: (
        <div className="text-left leading-tight font-bold text-xs">
          ORDER DETAILS/<br />E-SIGN
        </div>
      ),
      key: "orderDetails",
      width: 120,
      render: () => (
        <div className="flex flex-col gap-2 w-full">
          <Button size="small" className="w-full font-bold text-gray-800 text-xs h-7 shadow-sm">
            View
          </Button>
          <Button size="small" icon={<EyeOutlined />} className="w-full font-bold text-gray-800 text-xs h-7 shadow-sm flex items-center justify-center gap-1">
            E-sign
          </Button>
        </div>
      )
    },
    {
      title: (
        <div className="flex items-center gap-1 justify-start">
          <span>TAGS / NOTE</span>
          <SlidersOutlined className="text-gray-400 text-xs rotate-90" />
        </div>
      ),
      key: "tags",
      width: 210,
      render: (record: TableRowData) => {
        const colorPalette: Record<string, string> = {
          "Subscription Pending": "!bg-[#5A8296] !text-white !border-none",
          "Gouri": "!bg-[#4D827A] !text-white !border-none",
          "Add Case": "!bg-[#968E85] !text-white !border-none",
          "Aadhaar Verified": "!bg-[#B4964D] !text-white !border-none"
        };

        return (
          <div className="flex flex-col gap-2 w-full items-start">
            <div className="flex items-center gap-1 w-full">
              <Select defaultValue="choose" className="w-full" size="small">
                <Select.Option value="choose">Choose Tag</Select.Option>
              </Select>
              <Button 
                size="small" 
                icon={<FormOutlined className="text-gray-500 text-xs" />} 
                className="flex items-center justify-center p-1 h-6 w-6" 
              />
            </div>
            <div className="flex flex-wrap gap-1 max-w-[190px]">
              {record.tags.map((tag) => (
                <Tag 
                  key={tag} 
                  closable 
                  onClose={() => handleRemoveTag(record.key, tag)}
                  className={`text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 m-0 ${
                    colorPalette[tag] || "bg-gray-400 text-white"
                  }`}
                >
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
        );
      }
    },
    {
      title: (
        <div className="flex items-center gap-1 justify-start">
          <span>CLERK</span>
          <SlidersOutlined className="text-gray-400 text-xs rotate-90" />
        </div>
      ),
      key: "clerk",
      width: 140,
      render: (record: TableRowData) => {
        if (!record.clerk.isAssigned) {
          return (
            <Button
              type="primary"
              icon={<UserAddOutlined className="text-xs" />}
              className="!bg-[#4A1525] hover:!bg-[#380f1b] !border-none text-white font-bold text-xs flex items-center justify-center gap-1 rounded-lg h-7 px-3 shadow-sm"
            >
              Assign
            </Button>
          );
        }

        // Render Clerk name + inline functional controls if assigned
        return (
          <div className="flex flex-col items-start gap-1 text-left">
            <span className="font-bold text-gray-900 text-[13px]">{record.clerk.name}</span>
            <Space size="middle" className="text-gray-400 text-sm mt-0.5 flex items-center">
              <EditOutlined className="cursor-pointer hover:text-gray-700" />
              <DeleteOutlined className="cursor-pointer hover:text-red-500" />
              <ShareAltOutlined className="cursor-pointer hover:text-blue-500" />
            </Space>
          </div>
        );
      }
    },
    {
      title: "ECOPY",
      key: "ecopy",
      width: 120,
      align: "center",
      render: () => (
        <Space size="small" className="items-center justify-center">
          <Button
            type="primary"
            icon={<CloudUploadOutlined className="text-xs" />}
            className="!bg-[#4A1525] hover:!bg-[#380f1b] !border-none text-white font-bold text-xs flex items-center justify-center gap-1 rounded-lg h-7 px-3 shadow-sm"
          >
            Upload
          </Button>
          <Button
            type="text"
            icon={<SettingOutlined className="text-gray-400 hover:text-gray-600 text-sm" />}
            className="flex items-center justify-center p-0 w-5 h-5 border-none"
          />
        </Space>
      )
    }
  ];

  return (
    <Table
      dataSource={rowsData}
      columns={columns}
      pagination={false} 
      className="custom-antd-table-frame border-none"
      rowClassName="hover:bg-gray-50/40 transition-colors align-top"
    />
  );
}