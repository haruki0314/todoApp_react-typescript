import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function BasicButtons() {
  return (
    <Stack spacing={100} direction="row">
      <Button variant="contained" color="primary" component={Link} to="/todo">
        Todo
      </Button>
    </Stack>
  );
}
