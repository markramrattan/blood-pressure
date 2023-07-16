import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBloodPressure = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BloodPressure, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly systolic: number;
  readonly diastolic: number;
  readonly pulse: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBloodPressure = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BloodPressure, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: string;
  readonly systolic: number;
  readonly diastolic: number;
  readonly pulse: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BloodPressure = LazyLoading extends LazyLoadingDisabled ? EagerBloodPressure : LazyBloodPressure

export declare const BloodPressure: (new (init: ModelInit<BloodPressure>) => BloodPressure) & {
  copyOf(source: BloodPressure, mutator: (draft: MutableModel<BloodPressure>) => MutableModel<BloodPressure> | void): BloodPressure;
}