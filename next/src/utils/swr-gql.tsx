import fetchers from "~/src/utils/fetchers";
import { DocumentNode } from "graphql";
import { createContext, FC, useContext } from "react";
import useSWR, { SWRConfiguration } from "swr";
import { roundTimestamp } from "~/src/types/globals";

// abstracted for the sake of convenience
export const ssrSWR = async (query: DocumentNode, variables?: object) =>
  await fetchers.gateway(query, variables);

// Res will be passed as a generic argument whenever consuming the useSWRGQL hook
// the correct Res argument is generated by graphql-codegen
// similar case with Vars
// e.i. useSWRGQL<MetalQuoteQuery, MetalQuoteVars>
type FuncSWRGQL = <Res = any, Vars = any>(args: {
  query: DocumentNode;
  variables?: Vars | object;
  config?: SWRConfiguration;
}) => { data?: Res; error?: Error; mutate?: any };

export const useSWRGQL: FuncSWRGQL = ({ query, variables, config }) => {
  // handle swr config
  const cfg = !config ? {} : { ...config };

  const { data, error, mutate } = useSWR(
    [query, JSON.stringify(variables)],
    (query, vars) => {
      const parsedVars = JSON.parse(vars);

      if (parsedVars?.endTime) {
        return fetchers.gateway(query, {
          ...variables,
          endTime: roundTimestamp(),
        });
      }

      if (parsedVars?.timestamp) {
        return fetchers.gateway(query, {
          ...variables,
          timestamp: roundTimestamp(),
        });
      }

      return fetchers.gateway(query, { variables: parsedVars });
    },
    cfg,
  );
  return { data, error, mutate };
};

interface DataCtxProps {
  children: JSX.Element | JSX.Element[];
  ssrData?: any;
}

export const DataCtx = createContext(null);
export const SWRDataCtx: FC<DataCtxProps> = ({ children, ssrData }) => (
  <DataCtx.Provider value={{ ssrData }}>{children}</DataCtx.Provider>
);
export const useSWRCTX = () => {
  const ctx = useContext(DataCtx);
  return { ssrData: ctx?.ssrData };
};
