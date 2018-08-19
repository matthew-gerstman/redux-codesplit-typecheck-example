import { WizardActionTypes, WizardNamespaceShape } from "./types";

export function hydrateWizardNamespace(initialData: WizardNamespaceShape) {
  return {
    type: WizardActionTypes.Hydrate,
    payload: initialData
  };
}

// Learn Spell and Kill parents are exercises left up to the reader.
