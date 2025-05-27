import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Skeleton } from "primereact/skeleton";
import type { CSSProperties } from "react";

interface DataTableSkeletonProps {
  columns_number?: number;
  columns: { name: string; style: CSSProperties }[];
}

export const DataTableSkeleton = ({
  columns_number = 5,
  columns,
}: DataTableSkeletonProps) => {
  const items = Array.from({ length: columns_number }, (v, i) => ({ i }));
  return (
    <DataTable value={items} width={"100%"} className="p-datatable-striped">
      {columns?.map((col, index) => (
        <Column
          key={index}
          header={col.name}
          style={col.style}
          align={"center"}
          body={<Skeleton />}
        />
      ))}
    </DataTable>
  );
};
