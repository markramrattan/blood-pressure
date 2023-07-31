import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
  Brush,
} from "recharts";
import { BloodPressure } from "./models";
import { SortDirection } from "@aws-amplify/datastore";
import { useDataStoreBinding } from "@aws-amplify/ui-react/internal";

export default function Chart(props) {
  const { items: itemsProp } = props;
  const itemsPagination = { sort: (s) => s.date(SortDirection.DESCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: BloodPressure,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={items}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="systolic" fill="#8884d8">
            <LabelList
              className="font-bold text-xl text-red-500"
              dataKey="systolic"
              position="top"
            />
          </Bar>
          <Bar dataKey="diastolic" fill="#82ca9d">
            <LabelList
              className="font-bold text-xl text-red-500"
              dataKey="diastolic"
              position="top"
            />
          </Bar>

          <Bar dataKey="pulse" fill="#ffcc00">
            <LabelList
              className="font-bold text-xl text-red-500"
              dataKey="pulse"
              position="top"
            />
          </Bar>
          <Brush dataKey="date" width="80%" height={40} stroke="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
