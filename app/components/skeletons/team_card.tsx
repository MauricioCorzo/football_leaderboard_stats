import { Skeleton } from "primereact/skeleton";

export const TeamCardSkeleton = () => {
  return (
    <div className="gap-4 bg-white rounded-20 shadow-xl w-full h-56 p-4">
      <div className="flex mb-3 h-full">
        <Skeleton
          shape="circle"
          size="112px"
          className="mr-2 size-28 aspect-square"></Skeleton>
        <div className="flex-1">
          <Skeleton height="3rem" width="70%" className="mb-2"></Skeleton>
          <Skeleton width="7rem" height="1.5rem" className="mt-2"></Skeleton>
          <Skeleton width="7rem" height="1.5rem" className="mt-2"></Skeleton>
        </div>
      </div>
    </div>
  );
};
