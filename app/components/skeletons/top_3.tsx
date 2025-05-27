import { Skeleton } from "primereact/skeleton";

export const Top3Skeleton = () => {
  return (
    <div className="min-h-[320px] w-full grid grid-cols-12 grid-rows-12 gap-x-2 my-5">
      <div className="row-span-12 grid grid-rows-12 col-start-1 col-end-5 lg:col-start-4 lg:col-end-6">
        <div className="row-start-1 row-span-7 justify-self-center self-end justify-items-center  text-center">
          <Skeleton shape="circle" size="7rem" className="mb-4" />
        </div>
        <div className="rounded-t-20 row-span-5 row-start-8 flex flex-col items-center justify-center">
          <Skeleton width="100%" height="100%" className="mr-2"></Skeleton>
        </div>
      </div>
      <div className="row-span-12 grid grid-rows-12 col-start-5 col-end-9 lg:col-start-6 lg:col-end-8">
        <div className="row-start-1 row-span-5 justify-self-center self-end justify-items-center  text-center">
          <Skeleton shape="circle" size="7rem" className="mb-4" />
        </div>
        <div className="rounded-t-20 row-span-7 row-start-6 flex flex-col items-center justify-center">
          <Skeleton width="100%" height="100%" className="mr-2"></Skeleton>
        </div>
      </div>
      <div className="row-span-12 grid grid-rows-12 col-start-9 col-end-13 lg:col-start-8 lg:col-end-10">
        <div className="row-start-1 row-span-7 justify-self-center self-end justify-items-center text-center">
          <Skeleton shape="circle" size="7rem" className="mb-4" />
        </div>
        <div className="rounded-t-20 row-span-5 row-start-8 flex flex-col items-center justify-center">
          <Skeleton width="100%" height="100%" className="mr-2"></Skeleton>
        </div>
      </div>
    </div>
  );
};
