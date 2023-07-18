/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BloodPressure } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemCardOverridesProps = {
    "140"?: PrimitiveOverrideProps<TextProps>;
    ItemCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    "Product Title"?: PrimitiveOverrideProps<FlexProps>;
    "8029766849"?: PrimitiveOverrideProps<TextProps>;
    "8029766850"?: PrimitiveOverrideProps<TextProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
} & EscapeHatchProps;
export declare type ItemCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    bloodPressure?: BloodPressure;
} & {
    overrides?: ItemCardOverridesProps | undefined | null;
}>;
export default function ItemCard(props: ItemCardProps): React.ReactElement;
