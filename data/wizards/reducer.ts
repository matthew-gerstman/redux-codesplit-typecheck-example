import { WizardAction, WizardActionTypes, WizardNamespaceShape } from "./types";

const defaultState: WizardNamespaceShape = {
  harryPotter: {
    name: "Harry Potter",
    parentsAlive: false,
    spells: []
  }
};

export default function reducer(
  state: WizardNamespaceShape,
  action: WizardAction
) {
  switch (action.type) {
    case WizardActionTypes.Hydrate: {
      return {
        ...action.payload
      };
    }
    case WizardActionTypes.KillParents: {
      const { id } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          parentsAlive: false
        }
      };
    }
    case WizardActionTypes.LearnSpell: {
      const { id, spell } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          spells: [...state[id].spells, spell]
        }
      };
    }
  }
}
