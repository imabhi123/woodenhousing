import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import HeadingText from "../HeadingText";

const CircularProgress = ({ label, duration, color }) => {
  return (
    <div className="relative w-32 h-32">
      <div className="w-full h-full rounded-full bg-gray-200">
        <div
          className="w-full h-full rounded-full absolute top-0 left-0"
          style={{
            background: `conic-gradient(${color} 0% 270deg, #e5e7eb 270deg 360deg)`,
          }}
        />
        <div className="absolute inset-2 bg-white rounded-full m-2 flex flex-col items-center justify-center">
          <div className="text-sm font-medium">{label}</div>
          <div className="text-xs text-gray-600">{duration}</div>
        </div>
      </div>
    </div>
  );
};

const EconomicSavings = () => {
  return (
    <Card className=" mx-[15%] p-6">
      <CardHeader>
        <HeadingText title="Economic Savings" />
        <p className="text-center text-gray-600 text-sm">
          Lorem ipsum dolor sit amet. Ut voluptas placeat qui dicta iure qui
          odio laborum
        </p>
      </CardHeader>

      <CardContent>
        <div className="space-y-6 flex gap-8">
          <div className="flex-1">
            <div className="relative">
              <h3 className="text-lg font-semibold mb-2">
                Cost savings and speed of implementation
              </h3>
              <p className="text-gray-600">
                A work in laminated wood, being a prefabricated structure in the
                factory, significantly reduces construction times. In fact, the
                processing and treatments of each element are already completed
                in the factory and therefore no further finishing will be
                necessary after installation.
              </p>
            </div>

            <div className="relative">
              <h3 className="text-lg font-semibold mb-2">Ideal for renovation</h3>
              <p className="text-gray-600">
                Once installed, the structure is immediately able to support the
                operating load, without curing times, allowing to proceed with
                the subsequent construction phases, namely the assembly of the
                thermal package, the waterproofing and the covering. This makes
                it an ideal technology for renovation work, since it limits the
                exposure of the underlying structures to the elements.
              </p>
            </div>
          </div>

          <div className="mt-8 flex-1">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Construction Times
            </h3>
            <div className="flex justify-center gap-8">
              <CircularProgress
                label="Wood"
                duration="1-2 Months"
                color="#4ade80"
                
              />
              <CircularProgress
                label="Brick"
                duration="12-14 Months"
                color="#fb923c"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EconomicSavings;
