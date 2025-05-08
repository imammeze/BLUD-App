import DashboardCard from "../dashboard/DashboardCard";
import ActivityCard from "../dashboard/ActivityCard";
import RegisteredAccountsCard from "../dashboard/RegisteredAccountsCard";
import FooterAdmin from "../footer/FooterAdmin";

const DashboardContent = () => {
  return (
    <div className="flex-1 flex flex-col">
      <main className="p-6 bg-gray-50 flex-1">
        <h1 className="text-2xl font-bold mb-4">Selamat Datang, Fadiana.</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DashboardCard title="JANUARI">
            <div className="w-full h-40 bg-blue-100 flex items-center justify-center rounded">
              <span className="text-blue-600">[Bar Chart]</span>
            </div>
          </DashboardCard>

          <DashboardCard title="Januari">
            <div className="w-full h-40 bg-blue-50 flex items-center justify-center rounded">
              <span className="text-blue-600">[Calendar]</span>
            </div>
          </DashboardCard>

          <ActivityCard />
          <RegisteredAccountsCard />
        </div>
      </main>

      <FooterAdmin />
    </div>
  );
};

export default DashboardContent;
