import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(size, mean, std, hypothesisTest, hypMean) {
  if (hypothesisTest) {
    hypothesisTest = "Yes";
  } else {
    hypothesisTest = "No";
    hypMean = "N/A";
  }
  return { size, mean, std, hypothesisTest, hypMean };
}

export default function DataTable({size, mean, std, hypothesisTest, hypMean}) {
  const rows = [createData(size, mean, std, hypothesisTest, hypMean)];

  return (
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sample Size</TableCell>
            <TableCell>Sample Mean</TableCell>
            <TableCell>Standard Deviation</TableCell>
            <TableCell>Hypothesis Test</TableCell>
            <TableCell>Hypothesized Mean</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell >{row.size}</TableCell>
              <TableCell >{row.mean}</TableCell>
              <TableCell >{row.std}</TableCell>
              <TableCell >{row.hypothesisTest}</TableCell>
              <TableCell >{row.hypMean}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
