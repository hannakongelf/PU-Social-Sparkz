"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Report } from "@prisma/client";
import { ReportwithContentAndLink } from "@/db/queries/report";
import { deleteGame, deleteReview } from "@/actions";
import Link from "next/link";
import { Button } from "@mui/material";
import { useFormState } from "react-dom";
import { deleteReport } from "@/actions/delete/delete-report-action";

export default function ReportTable({
  reports,
}: {
  reports: ReportwithContentAndLink[];
}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 900 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Reported By</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Content Type</TableCell>
            <TableCell align="right">Object ID</TableCell>
            <TableCell align="right">Object Description</TableCell>

            <TableCell align="right">Link</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports?.map((r) => (
            <TableRow
              key={r.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{r.id}</TableCell>
              <TableCell align="right">{r.author.name}</TableCell>
              <TableCell align="right">{r.description}</TableCell>
              <TableCell align="right">{r.contentType}</TableCell>
              <TableCell align="right">{r.reportId}</TableCell>
              <TableCell align="right">
                {r.contentDescription.substring(0, 100)}
                {r.contentDescription.length > 100 ? "..." : ""}
              </TableCell>

              <TableCell align="right">
                <Link className={"text-blue-500"} href={r.link}>
                  Click
                </Link>
              </TableCell>
              <TableCell align="right">
                {r.contentType === "GAME" ? (
                  <form
                    action={() => {
                      deleteGame(r.reportId);
                      deleteReport(r.id);
                    }}
                  >
                    <Button type="submit">Delete Game</Button>
                  </form>
                ) : (
                  <form
                    action={() => {
                      deleteReview(r.reportId);
                      deleteReport(r.id);
                    }}
                  >
                    <Button type="submit">Delete Review</Button>
                  </form>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
