import { Container } from "@mui/material";
import React from "react";
import { TodoReducer } from "../../../react_class/hooks/useReducer/useReducer";

export const EmployeeList: React.FC<{}> = () => {
  return (
    <Container maxWidth="sm">
      <TodoReducer />
    </Container>
  );
};
