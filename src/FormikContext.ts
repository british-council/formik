import { createContext, useContext } from 'react';
import { FormikContext } from './types';

const PrivateFormikContext = createContext<FormikContext<any>>({} as any);
export const FormikProvider = PrivateFormikContext.Provider;
export const FormikConsumer = PrivateFormikContext.Consumer;

export function useFormikContext<Values>() {
  return useContext<FormikContext<Values>>(PrivateFormikContext);
}
