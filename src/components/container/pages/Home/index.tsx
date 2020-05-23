import React from "react";
import {Button} from "@material-ui/core";

export function Home() {

  const [flag, setFlag] = React.useState(false);

  const handleButtonClick = () => {
    setFlag(!flag)
  };

  return (
    <>
      <h2>Hello world</h2>
      <Button color="primary" onClick={() => handleButtonClick()}>
        puts Button
      </Button>
      <div></div>
      {flag && (
        <Button>
          only true displayed.
        </Button>
      )}
    </>
  );
}
