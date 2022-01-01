import { Box, BoxProps } from "@chakra-ui/react";
import { CustomDomComponent, motion } from "framer-motion";

export const MotionBox: CustomDomComponent<BoxProps> = motion(Box);
