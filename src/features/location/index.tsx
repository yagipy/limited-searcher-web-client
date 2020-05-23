import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { Root } from "../../components/container/templates/root";

const defaultProps = {};

type Props = { children: React.ReactNode } & typeof defaultProps &
  RouteComponentProps;

// TODO: PageName を変更
function MyRoot(props: Props) {
  const { children, location } = props;

  return <Root path={location.pathname}>{children}</Root>;
}

// TODO: PageName を変更
// Root.defaultProps = defaultProps;
const RootWithRouter = withRouter(MyRoot);

export default RootWithRouter;
