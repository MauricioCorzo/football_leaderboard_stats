import { Skeleton } from "primereact/skeleton";

export const StatsCardSkeleton = () => {
  return (
    <div className="col-start-1 gap-4 bg-white rounded-20 shadow-xl w-full h-[185px] p-4">
      <div className="grid grid-cols-2 gap-2 justify-content-between mt-3">
        <Skeleton height="2rem"></Skeleton>
        <Skeleton height="2rem"></Skeleton>
        <Skeleton height="2rem"></Skeleton>
        <Skeleton height="2rem"></Skeleton>
        <Skeleton height="2rem"></Skeleton>
        <Skeleton height="2rem"></Skeleton>
      </div>
    </div>
  );
};
