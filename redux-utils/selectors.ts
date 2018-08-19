import { FullStoreShape, NamespaceKey, StoreShape } from "./types";

export function getStateAtNamespaceKey<T extends NamespaceKey>(
  state: StoreShape,
  namespace: T
): FullStoreShape[T] {
  const namespaceState = state[namespace];
  if (!namespaceState) {
    throw new Error(
      `Attempted to access state for an unregistered namespace at key ${namespace}`
    );
  }

  // We need to explicitly say this is not undefined because typescript doesn't
  // recognize the thrown Exception will prevent us from ever getting here.
  return namespaceState!;
}
