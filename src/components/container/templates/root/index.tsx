import React from "react";

const defaultProps = {
  path: "home"
};

export type Props = {
  children: React.ReactNode;
} & typeof defaultProps;

export function Root(props: Props) {
  const { children, path } = props;

  return (
    <div>
      {children}
    </div>
  );
}

Root.defaultProps = defaultProps;
