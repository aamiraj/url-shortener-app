import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import ClearIcon from "@mui/icons-material/Clear";
import loadLocalStorage from "../utils/loadLocalStorage";
import saveLocalStorage from "../utils/saveLocalStorage";
import Typography from "@mui/material/Typography";
import { key } from "../utils/key";
import { useNavigate } from "react-router-dom";
import Toast from "../components/Toast/Toast";

type Data = {
  full: string;
  short: string;
  sl: string;
};
export default function ListUrl() {
  const [rows, setRows] = React.useState<Data[]>(loadLocalStorage(key));
  const [open, setOpen] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const handleClickDelete = (toBeDeleted: string) => {
    localStorage.removeItem(key);
    const remainingLinks = rows.filter((row) => row.full !== toBeDeleted);
    setRows(remainingLinks);
    remainingLinks.forEach((link) => {
      saveLocalStorage(key, link);
    });
    setOpen(true);
  };
  return (
    <Container maxWidth="xl">
      <Toast open={open} setOpen={setOpen} message="Delete Successfully." />
      <Typography variant="h4" textAlign="center">
        Your Links
      </Typography>

      {rows.length === 0 && (
        <Typography variant="body1" textAlign="center">
          No Links Found.
        </Typography>
      )}

      {rows.length !== 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Long Urls</TableCell>
                <TableCell>Short Links</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.full}</TableCell>
                  <TableCell>{row.short}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => navigate(`/edit-url/${row.sl}`)}
                      aria-label="edit"
                      color="success"
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      onClick={() => handleClickDelete(row.full)}
                      aria-label="delete"
                      color="error"
                    >
                      <ClearIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}
