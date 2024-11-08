import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import HeadingText from "../HeadingText";

const data = [
  { name: "Wood", value: 0.15 },
  { name: "Drilled", value: 0.35 },
  { name: "Brick", value: 0.7 },
  { name: "Reinforced concrete", value: 1.7 },
];

const ThermalConductivityChart = () => {
  return (
    <div className="w-full bg-[#F6F6F6] px-[15%]">
      <CardHeader>
      <HeadingText title="Comfort and energy savings" />
        <p className="text-center text-gray-600 text-sm">
          Lorem ipsum dolor sit amet. Ut voluptas qui dicta sunt qui odio
          laborum
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6 flex flex-wrap gap-8">
          {/* Chart Section */}
          <div className="flex-1 h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 2]} ticks={[0, 0.5, 1.0, 1.5]} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ff6b6b"
                  dot={{ stroke: "#ff6b6b", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Text Sections */}
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">
                Thermal insulation and energy saving
              </h3>
              <p className="text-gray-600">
                Wood has excellent insulation capacity. In fact its thermal
                conductivity coefficient, at the same thickness, is one third of
                brick and one tenth of that of concrete. Therefore, since
                thermal bridges, which generate condensation and dispersion, are
                not created, the energy performance and living comfort of the
                structure improve significantly.
              </p>
            </div>

            <div>
              <p className="text-gray-800 italic">
                "Thermal conductivity: is the ability of a material to conduct
                heat"
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Sound Insulation</h3>
              <p className="text-gray-600">
                Thanks to the elasticity and intrinsic density of the material,
                wooden beams transmit fewer vibrations to the structure than
                concrete and steel, thus reducing the diffusion of sound waves.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </div>
  );
};

export default ThermalConductivityChart;
