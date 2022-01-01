import React, { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface Props {
  children?: ReactNode | string;
  [x: string]: any;
}

const Container: React.FC<Props> = (props) => {
  return (
    <Box width="100%" maxWidth="1440px" {...props}>
      {props.children}
    </Box>
  );
};

export default Container;
