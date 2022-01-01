import React, { ReactNode } from "react";

import { Flex } from "@chakra-ui/react";

interface Props {
  children?: ReactNode | string;
  [x: string]: any;
}

const Section: React.FC<Props> = (props) => {
  return (
    <Flex
      width="100%"
      justify="center"
      as="section"
      py={{ xs: "2rem", lg: "3rem" }}
      px={{ xs: "2rem", md: "4rem" }}
      {...props}
    >
      {props.children}
    </Flex>
  );
};

export default Section;
