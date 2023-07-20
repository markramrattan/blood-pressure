import { Flex, withAuthenticator, Badge } from "@aws-amplify/ui-react";
import {
  ItemCardCollection,
  BloodPressureCreateForm,
  BloodPressureUpdateForm,
} from "./ui-components";

import { useState } from "react";
import Chart from "./Chart";
import Nav from "./Nav";

function App({ signOut, user }) {
  const [createEntry, setEntry] = useState();
  const [createUpdate, setUpdate] = useState();
  const [updateBloodPressure, setUpdatedBloodPressure] = useState();

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
      <Badge className="my-12">Account: {user.attributes.email}</Badge>
    </div>
  );
}

export default withAuthenticator(App);
