import { getCustomers, getProducts } from "@/app/Service/apiService";
import CustomerHomepageCardComponent from "@/app/Component/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "@/app/Component/ProductHomepageCardComponent";

export default async function DashboardPage() {
  const users = await getCustomers();
  
  return (
    <div className="flex gap-8 max-w-[1200px] mx-auto items-start justify-center pt-10">
      <ProductHomepageCardComponent />
      <CustomerHomepageCardComponent count={users?.length || 0} />
    </div>
  );
}
