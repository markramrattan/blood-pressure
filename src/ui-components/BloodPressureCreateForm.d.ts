/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BloodPressureCreateFormInputValues = {
    date?: string;
    systolic?: number;
    diastolic?: number;
    pulse?: number;
};
export declare type BloodPressureCreateFormValidationValues = {
    date?: ValidationFunction<string>;
    systolic?: ValidationFunction<number>;
    diastolic?: ValidationFunction<number>;
    pulse?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BloodPressureCreateFormOverridesProps = {
    BloodPressureCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    systolic?: PrimitiveOverrideProps<TextFieldProps>;
    diastolic?: PrimitiveOverrideProps<TextFieldProps>;
    pulse?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BloodPressureCreateFormProps = React.PropsWithChildren<{
    overrides?: BloodPressureCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BloodPressureCreateFormInputValues) => BloodPressureCreateFormInputValues;
    onSuccess?: (fields: BloodPressureCreateFormInputValues) => void;
    onError?: (fields: BloodPressureCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BloodPressureCreateFormInputValues) => BloodPressureCreateFormInputValues;
    onValidate?: BloodPressureCreateFormValidationValues;
} & React.CSSProperties>;
export default function BloodPressureCreateForm(props: BloodPressureCreateFormProps): React.ReactElement;
