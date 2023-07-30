import { Expander, ExpanderItem } from "@aws-amplify/ui-react";

export default function Info() {
  return (
    <Expander type="single" isCollapsible={true}>
    <ExpanderItem title="Systolic Pressure" value="bp-item-1">
    The highest number is always the systolic pressure and it's always given first. The pressure when your heart pushes blood out around your body
    </ExpanderItem>
    <ExpanderItem title="Diastolic Pressure" value="bp-item-2">
    The lower number is the diastolic pressure and it's always given second. The pressure when your heart rests between beats and blood is pushed around your heart
    </ExpanderItem>
    <ExpanderItem
      title="General Guide"
      value="bp-item-3"
    >Normal blood pressure is considered to be between 90/60mmHg and 120/80mmHg (this applies if it's measured at home or at a GP surgery or clinic)
  high blood pressure is considered to be 135/85 or higher if your reading was taken at home, or 140/90mmHg or higher if your reading was taken at a GP surgery or clinic
  low blood pressure is considered to be lower than 89/59mmHg or lower
    </ExpanderItem>
  </Expander>
      
  );
}
