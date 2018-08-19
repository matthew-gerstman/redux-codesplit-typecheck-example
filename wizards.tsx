import * as React from "react";
import { connect, Provider } from "react-redux";
import { getStoreForWizardApp } from "./data/wizards/store";
import { Wizard } from "./data/wizards/types";
import { getWizards } from "./data/wizards/selectors";
import { map } from "lodash";

export function WizardApp() {
  return (
    <Provider store={getStoreForWizardApp()}>
      <ConnectedWizards />
    </Provider>
  );
}

type WizardProps = Wizard;
function Wizard({ name, spells, parentsAlive }: WizardProps) {
  return (
    <>
      <span>Name: {name}</span>
      <span>Parents: {parentsAlive ? "Alive" : "Dead"}</span>
      <span>Learned Spells: {spells.map(spell => `${spell} `)}</span>
    </>
  );
}

type WizardsProps = { wizards: Wizard[] };
function Wizards({ wizards }: WizardsProps) {
  return (
    <>
      {wizards.map(wizardProps => (
        <Wizard {...wizardProps} />
      ))}
    </>
  );
}

const mapStateToProps = state => ({ wizards: map(getWizards(state)) });

const ConnectedWizards = connect<WizardsProps, {}, {}>(mapStateToProps)(
  Wizards
);
