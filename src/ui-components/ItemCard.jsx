/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { BloodPressure } from "../models";
import {
  getOverrideProps,
  useDataStoreDeleteAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Badge, Flex, Text } from "@aws-amplify/ui-react";
import MyIcon from "./MyIcon";
export default function ItemCard(props) {
  const { bloodPressure, overrides, ...rest } = props;
  const frameFourOneNineOnClick = useDataStoreDeleteAction({
    model: BloodPressure,
    id: bloodPressure?.id,
    schema: schema,
  });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="218px"
      height="126px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ItemCard")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="169px"
        height="46px"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 417")}
      >
        <Flex
          gap="0"
          direction="column"
          width="113px"
          height="46px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Product Title")}
        >
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="113px"
            height="25px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={bloodPressure?.systolic}
            {...getOverrideProps(overrides, "140")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="24px"
            fontWeight="600"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.09px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={bloodPressure?.diastolic}
            {...getOverrideProps(overrides, "8029766849")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="28px"
          fontWeight="800"
          color="rgba(13,26,38,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="39px"
          height="44px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={bloodPressure?.pulse}
          {...getOverrideProps(overrides, "8029766850")}
        ></Text>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="125px"
        height="26px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Badge
          width="unset"
          height="unset"
          gap="0"
          justifyContent="flex-start"
          padding="6px 42px 6px 42px"
          shrink="0"
          size="small"
          variation="success"
          children={bloodPressure?.date}
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <Flex
          gap="20px"
          direction="row"
          width="24px"
          height="26px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          onClick={() => {
            frameFourOneNineOnClick();
          }}
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <MyIcon
            width="24px"
            height="26px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            type="delete"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
        </Flex>
      </Flex>
    </Flex>
  );
}
