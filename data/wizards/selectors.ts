import { getStateAtNamespaceKey } from "../../redux-utils/selectors";
import { StoreShape, WIZARD_NAMESPACE_KEY } from "../../redux-utils/types";
import { WizardNamespaceShape } from "./types";

export const getWizards = (state: StoreShape): WizardNamespaceShape =>
  getStateAtNamespaceKey(state, WIZARD_NAMESPACE_KEY);
