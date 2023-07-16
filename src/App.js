import {
  Flex,
  Heading,
  Button,
  Divider,
  withAuthenticator,
  Image,
  Badge
} from "@aws-amplify/ui-react";
import { ItemCardCollection, BloodPressureCreateForm } from "./ui-components";
import { useState } from "react";
import Chart from "./Chart"
import logo from './main.png'

function App({ signOut, user }) {
  const [createEntry, setEntry] = useState();

  return (
    <div>
      <Flex direction="row">
      <Image
      src={logo}
      alt="Blood Pressure Monitor"
      height="60px"
    />
      <Heading level={2}>Blood Pressure Monitor</Heading>
        <Button onClick={signOut}>Sign Out</Button>
      </Flex>
      <Divider size="large" orientation="horizontal" padding="1em" />
      <Flex direction="column">
        
       
        <Button onClick={() => setEntry(true)}>
          Add Blood Pressure Reading
        </Button>
        <Chart/>
        
        {createEntry ? (
          <BloodPressureCreateForm
            onCancel={() => setEntry(false)}
            onSuccess={() => setEntry(false)}
          />
        ) : (
          <ItemCardCollection />
        )}
      </Flex>
      <Badge>Account: {user.attributes.email}</Badge>
    </div>
  );
}

export default withAuthenticator(App);
