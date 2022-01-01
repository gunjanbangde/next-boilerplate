import React, { ReactNode } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

interface Props {
  title?: string;
  children?: ReactNode;
  withAuth?: boolean;
}

const Layout: React.FC = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Boilerplate | App</title>
        <meta name="description" content="Boilerplate" />
      </Head>
      <Box as="main" pt={{ xs: "117.25px", lg: "134px" }}>
        {children}
      </Box>
    </>
  );
};
export default Layout;
