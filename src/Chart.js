import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,ScatterChart, ZAxis, Scatter, ReferenceLine
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
          <Bar dataKey="systolic" fill="#8884d8" />
          <Bar dataKey="diastolic" fill="#82ca9d" />
          <Bar dataKey="pulse" fill="#ffcc00" />
        </BarChart>
      </ResponsiveContainer>
<ResponsiveContainer width="100%" height={400}>
      <ScatterChart
  width={730}
  height={250}
  margin={{
    top: 20,
    right: 20,
    bottom: 10,
    left: 10,
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="diastolic" type="number" domain={['auto', 'auto']} name="Diastolic" unit="" />
  <YAxis dataKey="systolic" type="number" domain={['auto', 'auto']} name="Systolic" unit="" />

  <ZAxis dataKey="pulse" type="number" name="Pulse" unit="" />
  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
  <ReferenceLine x="pulse" stroke="green" label="Min PAGE" />
    <ReferenceLine x={80} label="Max" stroke="red" strokeDasharray="5 5" />
    <ReferenceLine y={160} label="Max" stroke="red" strokeDasharray="5 5" />
    <ReferenceLine label="Segment" stroke="green" strokeDasharray="3 3" segment={[{ x: 40, y: 80 }, { x: 'Page C', y: 4000 }]} />
  <Legend />
  <Scatter name="Blood Pressure" data={items} fill="#8884d8" />

</ScatterChart>
</ResponsiveContainer>
    </div>
  );
}
