import * as React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Button = () => {
  return (
    <ButtonContainer
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      Boop
    </ButtonContainer>
  );
};

const ButtonContainer = styled(motion.button)``;
