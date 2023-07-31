import { Expander, ExpanderItem } from "@aws-amplify/ui-react";

export default function Info() {
  return (
    <Expander type="single" isCollapsible={true}>
      <ExpanderItem title="Systolic Pressure" value="bp-item-1">
        <li>Highest Number = Systolic pressure and it's always given first</li>
        <li>The pressure when your heart pushes blood out around your body</li>
      </ExpanderItem>
      <ExpanderItem title="Diastolic Pressure" value="bp-item-2">
        <li>Lowest Number = Diastolic pressure and it's always given second</li>
        <li>
          The pressure when your heart rests between beats and blood is pushed
          around your heart
        </li>
      </ExpanderItem>
      <ExpanderItem title="Pulse" value="bp-item-3">
        <li>Pulse = How many times your heart beats in one minute</li>
        <li>Normal Adult resting Pulse = 60-100 beats per minute (bpm)</li>
        <li>High Pulse = Above 100</li>
        <li>Low Pulse = Below 60</li>
      </ExpanderItem>
      <ExpanderItem title="General Guide" value="bp-item-4">
        <li>Normal Blood Pressure (BP) = 120/80 - 90/60</li>
        <li>High BP = 140/90 or above if done at GP Surgery</li>
        <li>High BP = 135/85 or above if done at home</li>
        <li>Low BP = 89/59 or below</li>
      </ExpanderItem>
    </Expander>
  );
}
