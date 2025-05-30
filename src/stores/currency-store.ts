import { createStore } from 'zustand/vanilla';

export type CurrencyState = {
  currency: string;
  currencySymbol: string;
};

export type CurrencyActions = {
  changeCurrency: ({ currency, currencySymbol }: CurrencyState) => void;
};

export type CurrencyStore = CurrencyState & CurrencyActions;

export const defaultInitState: CurrencyState = {
  currency: 'INR',
  currencySymbol: '₹',
};

export const createCurrencyStore = (initState: CurrencyState = defaultInitState) => {
  return createStore<CurrencyStore>()((set) => ({
    ...initState,
    changeCurrency: ({ currency, currencySymbol }) => set({ currency, currencySymbol }),
  }));
};
