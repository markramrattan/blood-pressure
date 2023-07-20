/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BloodPressure } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BloodPressureUpdateFormInputValues = {
    date?: string;
    systolic?: number;
    diastolic?: number;
    pulse?: number;
};
export declare type BloodPressureUpdateFormValidationValues = {
    date?: ValidationFunction<string>;
    systolic?: ValidationFunction<number>;
    diastolic?: ValidationFunction<number>;
    pulse?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BloodPressureUpdateFormOverridesProps = {
    BloodPressureUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    systolic?: PrimitiveOverrideProps<TextFieldProps>;
    diastolic?: PrimitiveOverrideProps<TextFieldProps>;
    pulse?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BloodPressureUpdateFormProps = React.PropsWithChildren<{
    overrides?: BloodPressureUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bloodPressure?: BloodPressure;
    onSubmit?: (fields: BloodPressureUpdateFormInputValues) => BloodPressureUpdateFormInputValues;
    onSuccess?: (fields: BloodPressureUpdateFormInputValues) => void;
    onError?: (fields: BloodPressureUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BloodPressureUpdateFormInputValues) => BloodPressureUpdateFormInputValues;
    onValidate?: BloodPressureUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BloodPressureUpdateForm(props: BloodPressureUpdateFormProps): React.ReactElement;
