import React from "react";
import DashboardHeader from "@/components/pages/admin/dashboard/DashboardHeader";
import DashboardStats from "@/components/pages/admin/dashboard/DashboardStats";
import RecentOrdersTable from "@/components/pages/admin/dashboard/RecentOrdersTable";
import TopSellingProducts from "@/components/pages/admin/dashboard/TopSellingProducts";
import WeeklySalesChart from "@/components/pages/admin/dashboard/WeeklySalesChart";
import ImportantInfoSection from "@/components/pages/admin/dashboard/ImportantInfoSection";

const Dashboard = () => {
  return (
    <main className="space-y-8 bg-gray-100 min-h-screen">
      <DashboardHeader title="Dashboard" />
      <DashboardStats />

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <WeeklySalesChart />
        <ImportantInfoSection />
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentOrdersTable />
        <TopSellingProducts />
      </section>
    </main>
  );
};

export default Dashboard;
