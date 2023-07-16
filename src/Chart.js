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
  Area, AreaChart
} from "recharts";
import { BloodPressure } from "./models";
import { SortDirection } from "@aws-amplify/datastore";
import {
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";

export default function Chart(props) {
  const { items: itemsProp} = props;
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
<AreaChart data={items}
margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
<defs>
  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
  </linearGradient>
  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
  </linearGradient>
  <linearGradient id="colorDv" x1="0" y1="0" x2="0" y2="1">
    <stop offset="5%" stopColor="#ffcc00" stopOpacity={0.8}/>
    <stop offset="95%" stopColor="#ffcc00" stopOpacity={0}/>
  </linearGradient>
</defs>
<XAxis dataKey="date" />
<YAxis />
<CartesianGrid strokeDasharray="3 3" />
<Tooltip />
<Area type="monotone" dataKey="systolic" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
<Area type="monotone" dataKey="diastolic" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
<Area type="monotone" dataKey="pulse" stroke="#ffcc00" fillOpacity={1} fill="url(#colorDv)" />
</AreaChart>

</ResponsiveContainer>
</div>
  );
}