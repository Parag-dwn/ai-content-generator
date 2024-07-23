// app/page.tsx (Server Component)
import { getData } from "@/app/actions";
import DataTable from "./DataTable";

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <h2>History of Data Generation</h2>
      <DataTable data={data} />
    </div>
  );
}
