type Muggle = {
  name: string;
  niceToHarry: boolean;
};

export type MuggleNamespaceShape = {
  [id: string]: Muggle;
};
