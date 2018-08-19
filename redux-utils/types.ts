import { MuggleNamespaceShape } from "../data/muggles/types";
import { WizardNamespaceShape } from "../data/wizards/types";

import { Reducer } from "redux";
export const MUGGLE_NAMESPACE_KEY = "MUGGLE_NAMESPACE";
export const WIZARD_NAMESPACE_KEY = "WIZARD_NAMESPACE";

export type FullStoreShape = {
  [MUGGLE_NAMESPACE_KEY]: MuggleNamespaceShape;
  [WIZARD_NAMESPACE_KEY]: WizardNamespaceShape;
};

export type StoreShape = Partial<FullStoreShape>;

export type NamespaceKey = keyof StoreShape;

export type ReducerMap = Partial<
  { [k in NamespaceKey]: Reducer<StoreShape[k]> }
>;
