import { createContext, useContext } from 'react';
import { RootStore } from '../store/store';

export const store = RootStore.create({});
export const StoreContext = createContext(store);

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(
      'useStoreContext must be used within a StoreContext.Provider'
    );
  }
  return context;
}
