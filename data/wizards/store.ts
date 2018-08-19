import { getStore, registerReducer } from "../../redux-utils/store";
import { WIZARD_NAMESPACE_KEY } from "../../redux-utils/types";
import { once } from "lodash";
import wizardReducer from "./reducer";
import { WizardNamespaceShape } from "./types";
import { hydrateWizardNamespace } from "./actions";

export const getStoreForWizardApp = once(
  (initialData?: WizardNamespaceShape) => {
    registerReducer({ [WIZARD_NAMESPACE_KEY]: wizardReducer });
    const store = getStore();
    if (initialData) {
      store.dispatch(hydrateWizardNamespace(initialData));
    }

    return store;
  }
);
