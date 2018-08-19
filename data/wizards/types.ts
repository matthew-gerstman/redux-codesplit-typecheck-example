import { AnyAction } from "redux";

export type Wizard = {
  name: string;
  parentsAlive: boolean;
  spells: string[];
};

export const enum WizardActionTypes {
  Hydrate = "WIZARD/HYDRATE",
  LearnSpell = "WIZARD/LEARN_SPELL",
  KillParents = "WIZARD/KILL_PARENTS"
}

export type WizardNamespaceShape = {
  [id: string]: Wizard;
};

export interface LearnSpellAction extends AnyAction {
  type: WizardActionTypes.LearnSpell;
  payload: { id: string; spell: string };
}

export interface KillParentsAction extends AnyAction {
  type: WizardActionTypes.KillParents;
  payload: { id: string };
}

export interface HydrateWizardsAction extends AnyAction {
  type: WizardActionTypes.Hydrate;
  payload: WizardNamespaceShape;
}

export type WizardAction =
  | HydrateWizardsAction
  | LearnSpellAction
  | KillParentsAction;
