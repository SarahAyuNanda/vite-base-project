import { Action } from "@reduxjs/toolkit";
import { ElementType } from "react";
import type { ProviderProps } from "react-redux";

type AppProviderProps = ProviderProps<Action<string>, unknown> | Record<string, unknown>;

type AppProviderComponent = [ElementType, AppProviderProps];

type ChildrenType = { children: Array<ElementType> };

export const BuildProviderTree = (componentWithProps: AppProviderComponent[]) => {
  const initialComponent = ({ children }: ChildrenType) => <>{children}</>;

  const renderComponent = componentWithProps.reduce(
    (Accumulated: ElementType, [Provider, props = {}]: AppProviderComponent) => {
      return ({ children }: ChildrenType) => {
        return (
          <Accumulated>
            <Provider {...props}>{children}</Provider>
          </Accumulated>
        );
      };
    },
    initialComponent,
  );

  return renderComponent;
};

export type { AppProviderComponent };
