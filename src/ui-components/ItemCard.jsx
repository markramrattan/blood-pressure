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
    id: bloodPressure?.id,
    model: BloodPressure,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="218px"
      height="126px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(172,172,172,1)"
      padding="15px 15px 15px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ItemCard")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="216px"
        height="53px"
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
          width="105px"
          height="68px"
          justifyContent="center"
          alignItems="flex-end"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(238,238,238,1)"
          {...getOverrideProps(overrides, "Product Title")}
        >
          <Text
            fontFamily="Inter"
            fontSize="32px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="96px"
            height="28.17px"
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
            fontSize="32px"
            fontWeight="500"
            color="rgba(32,125,218,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.17px"
            width="92px"
            height="26px"
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
          fontSize="36px"
          fontWeight="800"
          color="rgba(4,52,149,1)"
          lineHeight="20px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="76px"
          height="53px"
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
        width="216px"
        height="56px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 8px 0px 8px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Badge
          width="98px"
          height="24px"
          gap="0"
          justifyContent="flex-start"
          shrink="0"
          size="small"
          variation="success"
          children={bloodPressure?.date}
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <Flex
          gap="10px"
          direction="row"
          width="94px"
          height="21px"
          justifyContent="flex-end"
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
