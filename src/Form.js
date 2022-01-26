import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
export default function Form() {
  // Form Inputs
  const [sampleSize, setSampleSize] = useState();
  const [sampleMean, setSampleMean] = useState();
  const [standardDeviation, setStandardDeviation] = useState();

  const [hypothesisTest, setHypothesisTest] = useState(false);
  const [hypMean, setHypMean] = useState();

  // Form Validation

  return (
    <Grid style={{ marginTop: "50px" }} container justifyContent="center">
      <Stack spacing={1} width="30%">
        <TextField
          type="number"
          error={false}
          id="outlined-error"
          label="Sample Size"
        />
        <TextField
          type="number"
          error={false}
          id="outlined-error"
          label="Sample Mean"
        />
        <TextField
          type="number"
          error={false}
          id="outlined-error"
          label="Standard Deviation"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={(e) => setHypothesisTest(!hypothesisTest)} />
          }
          label="Perform hypothesis test"
        />
        <TextField
          disabled={!hypothesisTest}
          error={false}
          id="outlined-error"
          label="Hypothesized Mean"
        />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="contained">OK</Button>
          <Button variant="outlined">Reset</Button>
        </Stack>
      </Stack>
    </Grid>
  );
}
