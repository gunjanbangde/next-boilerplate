import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { FormLabel } from "./FormLabel";

const breakpoints = createBreakpoints({
  xs: "0",
  sm: "600px",
  md: "1024px",
  lg: "1280px",
  xl: "1440px",
});

const colors = {
  primary: "#E74861",
  secondary: "#FF8282",
};

export const theme = extendTheme({
  colors,
  fonts: {
    body: "Manrope",
    heading: "Manrope",
  },
  breakpoints,
  layerStyles: {
    page: {},
    card: {},
  },
  components: { Button, Heading, Text, FormLabel },
});
