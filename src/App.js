import { Flex, withAuthenticator, Badge, Image } from "@aws-amplify/ui-react";
import {
  ItemCardCollection,
  BloodPressureCreateForm,
  BloodPressureUpdateForm,
} from "./ui-components";

import { useState, useEffect } from "react";
import Chart from "./Chart";
import Nav from "./Nav";
import Info from "./Info";
import { Analytics } from "aws-amplify";

function App({ signOut, user }) {
  const [createEntry, setEntry] = useState();
  const [createUpdate, setUpdate] = useState();
  const [updateBloodPressure, setUpdatedBloodPressure] = useState();

  useEffect(() => {
    Analytics.record({
      name: "App Opened",
    });
    Analytics.autoTrack("event", {
      enable: true,

      events: ["click"],

      selectorPrefix: "data-amplify-analytics-",

      provider: "AWSPinpoint",

      attributes: {
        attr: "attr",
      },
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Nav signOut={signOut} setEntry={setEntry} />

      <Flex className="pt-4" direction="column">
        {createEntry ? (
          <div>
            <BloodPressureCreateForm
              className="mb-8 "
              onCancel={() => setEntry(false)}
              onSuccess={() => setEntry(false)}
            />
            <Chart />
          </div>
        ) : (
          <div>
            <Chart />

            <ItemCardCollection
              className="my-8 mt-12"
              type="list"
              direction="row"
              gap="20px"
              wrap="wrap"
              onClick={() => setUpdate(true)}
              overrideItems={({ item }) => ({
                onClick: () => setUpdatedBloodPressure(item),
              })}
            />
          </div>
        )}

        {createUpdate ? (
          <BloodPressureUpdateForm
            onCancel={() => setUpdate(false)}
            bloodPressure={updateBloodPressure}
          />
        ) : (
          <p></p>
        )}
      </Flex>
      <div className="mt-12">
        <Image
          src="https://www.nhs.uk/nhscwebservices/documents/logo1.jpg"
          alt="NHS Website"
          width="300px"
        />
      </div>
      <div>
        <Badge className="my-12">Account: {user.attributes.email}</Badge>
      </div>
      <div className="mb-12">
        <Info />
      </div>
    </div>
  );
}

export default withAuthenticator(App);
