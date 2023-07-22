import logo from "./main.png";
import { Button, Image } from "@aws-amplify/ui-react";

export default function Nav({ signOut, setEntry }) {
  return (
    <div className="border-dashed border-2 border-gray-150 mb-4">
      <div className="flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="https://dev.to/markramrattan" className="flex items-center">
          <Image
            src={logo}
            className="animate-pulse h-14 mr-3"
            alt="Blood Pressure Monitor"
          />
          <span className="self-center text-2xl font-semibold  mr-3">
            Blood Pressure Monitor
          </span>
        </a>

        <div className="w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 gap-4 ">
            <li>
              <Button
                onClick={() => setEntry(true)}
                data-amplify-analytics-on="click"
                data-amplify-analytics-name="click"
                data-amplify-analytics-attrs="attr1:attr1_value,attr2:attr2_value"
              >
                Add Blood Pressure Reading
              </Button>
            </li>
            <li>
              <Button onClick={signOut}>Sign Out</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
