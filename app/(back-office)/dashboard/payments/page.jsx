import { columns } from "./columns"
import { DataTable } from "./data-table"
import getData from "@/lib/getData1"

export default async function DemoPage() {
  const data = await getData("markets")

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
