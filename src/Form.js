import React from "react";
import { useState, useEffect } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Table from "./Table";

export default function Form() {
  // Form Inputs
  const [sampleSize, setSampleSize] = useState();
  const [sampleMean, setSampleMean] = useState();
  const [standardDeviation, setStandardDeviation] = useState();
  const [hypothesisTest, setHypothesisTest] = useState(false);
  const [hypMean, setHypMean] = useState();

  // Form Validation
  const [sampleSizeError, setSampleSizeError] = useState(false);
  const [sampleMeanError, setSampleMeanError] = useState(false);
  const [standardDeviationError, setStandardDeviationError] = useState(false);
  const [hypMeanError, setHypMeanError] = useState(false);

  //function to check if current input is valid
  function validate() {
    return (
      !sampleSizeError &&
      sampleSize &&
      !sampleMeanError &&
      sampleMean &&
      !standardDeviationError &&
      standardDeviation &&
      !hypMeanError
    );
  }

  // is the entry valid?
  const [valid, setValid] = useState(false);

  //whenever a form input changes, reset validation
  useEffect(() => {
    setValid(false);
  }, [sampleSize, sampleMean, standardDeviation, hypothesisTest, hypMean]);

  //whenever an input validation changes, update valid status
  useEffect(() => {
    setValid(validate());
  }, [sampleSizeError, sampleMeanError, standardDeviationError, hypMeanError]);

  function handleSubmit() {
    setSampleSizeError(
      !sampleSize || sampleSize < 2 || !Number.isInteger(parseFloat(sampleSize))
    );
    setSampleMeanError(!sampleMean);
    setStandardDeviationError(!standardDeviation || standardDeviation <= 0);

    if (hypothesisTest) {
      setHypMeanError(!hypMean);
    }

    setValid(validate());
  }

  //handle reset
  function handleReset() {
    setValid(false);
    setSampleSize("");
    setSampleMean("");
    setStandardDeviation("");
    setHypMean("");
    setHypothesisTest(false);

    setSampleSizeError(false);
    setSampleMeanError(false);
    setStandardDeviationError(false);
    setHypMeanError(false);
  }

  return (
    <Grid style={{ marginTop: "50px" }} container justifyContent="center">
      <Stack spacing={1.5} width="30%">
        <TextField
          label="Sample Size"
          type="number"
          value={sampleSize}
          onChange={(e) => setSampleSize(e.target.value)}
          error={sampleSizeError}
          helperText={
            sampleSizeError
              ? "Sample size must be a whole number greater than or equal to 2"
              : ""
          }
        />
        <TextField
          label="Sample Mean"
          type="number"
          value={sampleMean}
          onChange={(e) => setSampleMean(e.target.value)}
          error={sampleMeanError}
          helperText={sampleMeanError ? "You must provide a sample mean" : ""}
        />
        <TextField
          type="number"
          value={standardDeviation}
          error={standardDeviationError}
          onChange={(e) => setStandardDeviation(e.target.value)}
          id="outlined-error"
          label="Standard Deviation"
          helperText={
            standardDeviationError
              ? "You must provide a standard deviation greater than 0"
              : ""
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={hypothesisTest}
              onChange={() => {
                setHypothesisTest(!hypothesisTest);
                setHypMeanError(false);
              }}
            />
          }
          label="Perform hypothesis test"
        />
        <TextField
          disabled={!hypothesisTest}
          type="number"
          value={hypMean}
          error={hypMeanError}
          onChange={(e) => setHypMean(e.target.value)}
          id="outlined-error"
          label="Hypothesized Mean"
          helperText={
            hypMeanError ? "You must provide a hypothesized mean" : ""
          }
        />

        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button variant="contained" onClick={() => handleSubmit()}>
            OK
          </Button>
          <Button variant="outlined" onClick={() => handleReset()}>
            Reset
          </Button>
        </Stack>

        {valid && (
          <Table
            size={sampleSize}
            mean={sampleMean}
            std={standardDeviation}
            hypothesisTest={hypothesisTest}
            hypMean={hypMean}
          />
        )}
      </Stack>
    </Grid>
  );
}
