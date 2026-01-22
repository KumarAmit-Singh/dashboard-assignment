import StatCard from "../components/dashboard/StatCard";
import DocumentCard from "../components/dashboard/DocumentCard";
import RocketCard from "../components/dashboard/RocketCard";
import SalesChart from "../components/dashboard/SalesChart";
import OrdersOverview from "../components/dashboard/OrdersOverview";
import ProjectsTable from "../components/dashboard/ProjectsTable";
import SalesOverview from "../components/dashboard/SalesOverview";
import {
  dashboardStats,
  documentData,
  rocketData,
  activeUsersData,
  salesOverviewContent,
  projectsData,
  ordersData,
} from "../data/mockData";

const Dashboard = () => {
  return (
    <div className="p-4 lg:p-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <DocumentCard document={documentData} />
        </div>
        <div className="lg:col-span-5">
          <RocketCard data={rocketData} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6">
          <SalesChart users={activeUsersData} />
        </div>
        <div className="lg:col-span-6">
          <SalesOverview sales={salesOverviewContent} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProjectsTable projects={projectsData} />
        </div>
        <div>
          <OrdersOverview orders={ordersData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
