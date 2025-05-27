import { Skeleton } from "primereact/skeleton";

export const StadiumCardSkeleton = () => {
  return (
    <div className="row-start-1 row-span-2 col-start-2 bg-white rounded-20 shadow-xl w-full h-[425px] p-4">
      <Skeleton width="100%" height="50%"></Skeleton>
      <div className="grid grid-cols-2 gap-2 justify-content-between mt-3">
        <Skeleton height="2rem"></Skeleton>
        <Skeleton height="2rem"></Skeleton>
        <Skeleton height="2rem"></Skeleton>
        <Skeleton height="2rem"></Skeleton>
        <Skeleton height="2rem"></Skeleton>
      </div>
    </div>
  );
};
