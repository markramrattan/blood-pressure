import { Flex, withAuthenticator, Badge, Image } from "@aws-amplify/ui-react";
import {
  ItemCardCollection,
  BloodPressureCreateForm,
  BloodPressureUpdateForm,
} from "./ui-components";

import { useState, useEffect } from "react";
import Chart from "./Chart";
import Nav from "./Nav";
import { Analytics } from "aws-amplify";


function App({ signOut, user }) {
  const [createEntry, setEntry] = useState();
  const [createUpdate, setUpdate] = useState();
  const [updateBloodPressure, setUpdatedBloodPressure] = useState();

  useEffect(() => { 
    Analytics.record({
      name: "App Opened",
    });
    Analytics.autoTrack('event', {
      // REQUIRED, turn on/off the auto tracking
      enable: true,
      // OPTIONAL, events you want to track, by default is 'click'
      events: ['click'],
      // OPTIONAL, the prefix of the selectors, by default is 'data-amplify-analytics-'
      // in order to avoid collision with the user agent, according to https://www.w3schools.com/tags/att_global_data.asp
      // always put 'data' as the first prefix
      selectorPrefix: 'data-amplify-analytics-',
      // OPTIONAL, the service provider, by default is the Amazon Pinpoint
      provider: 'AWSPinpoint',
      // OPTIONAL, the default attributes of the event, you can either pass an object or a function
      // which allows you to define dynamic attributes
      attributes: {
        attr: 'attr'
      }
      // when using function
      // attributes: () => {
      //    const attr = somewhere();
      //    return {
      //        myAttr: attr
      //    }
      // }
    });
  
   },[])

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
     <div>
      <Image src="https://www.nhs.uk/nhscwebservices/documents/logo1.jpg" alt="NHS Website" 
  width="300px" />
  </div>
<div>
<Badge className="my-12">Account: {user.attributes.email}</Badge>
</div>
    </div>
  );
}

export default withAuthenticator(App);
