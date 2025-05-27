import { Check, Minus, X } from "lucide-react";

export const RecentMatchesComponent = ({
  matches,
}: {
  matches: Array<"W" | "L" | "D">;
}) => {
  return (
    <>
      {matches.map((result) => {
        switch (result) {
          case "W":
            return (
              <div className="inline-flex items-center size-6  mr-1 rounded-full bg-green-600">
                <Check className="inline w-full text-white" size={"18"} />
              </div>
            );
          case "L":
            return (
              <div className="inline-flex items-center size-6  mr-1 rounded-full bg-red-600">
                <X className="inline w-full text-white" size={"18"} />
              </div>
            );
          case "D":
            return (
              <div className="inline-flex items-center size-6  mr-1 rounded-full bg-gray-600">
                <Minus className="inline w-full text-white" size={"18"} />
              </div>
            );
        }
      })}
    </>
  );
};
