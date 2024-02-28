import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { LiaFileImportSolid } from "react-icons/lia";
import { AiOutlineSend } from "react-icons/ai";
import { MdOutlinePrint } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import {
  Checkbox,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { LuRefreshCw } from "react-icons/lu";
import { ReactComponent as Shopify } from "../assets/shopify-icon.svg";
import Pagination from "@mui/material/Pagination";

export default function Pending() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Paper style={{ padding: "24px" }}>
        <Stack
          spacing={2}
          direction="row"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: 5 }}>
            <Button
              variant="outlined"
              style={{
                border: "1px solid rgba(0, 0, 0, 0.20)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                gap: 5,
                color: "black",
                textTransform: "none",
              }}
            >
              <LiaFileImportSolid size={20} />
              Import Orders
            </Button>
            <Button
              variant="outlined"
              disabled
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                gap: 5,
                textTransform: "none",
              }}
            >
              <AiOutlineSend size={20} />
              Accept
            </Button>
            <Button
              variant="outlined"
              disabled
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                gap: 5,
                textTransform: "none",
              }}
            >
              <MdOutlinePrint size={20} />
              Print
              <FaAngleDown size={20} />
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px",
                gap: 5,
                textTransform: "none",
              }}
            >
              <LuRefreshCw size={20} />
              Refresh
            </Button>
          </div>
        </Stack>
        <Box>
          <TableContainer>
            <Table sx={{ width: "100%" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{ fontSize: "26px", width: "50px" }}
                  ></TableCell>
                  <TableCell style={{ width: "50px" }}>
                    <Checkbox />
                  </TableCell>
                  <TableCell style={{ width: "50px" }}>Channel</TableCell>
                  <TableCell style={{ width: "50px" }}>Order No</TableCell>
                  <TableCell style={{ width: "50px" }}>Order Date</TableCell>
                  <TableCell style={{ width: "50px" }}>City</TableCell>
                  <TableCell style={{ width: "50px" }}>Order value</TableCell>
                  <TableCell style={{ width: "50px" }}>Customer Name</TableCell>
                  <TableCell style={{ width: "50px" }}>Status</TableCell>
                  <TableCell style={{ width: "50px" }}>Operation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontSize: "26px" }}>+</TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Shopify width="40px" height="40px" />
                  </TableCell>
                  <TableCell style={{ color: "blue" }}>#TKN20203754</TableCell>
                  <TableCell>2022-05-04</TableCell>
                  <TableCell>Lucknow</TableCell>
                  <TableCell>Abhishek Dixit</TableCell>
                  <TableCell>0.00</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      style={{
                        border: "2px solid #64943e",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "3px",
                        gap: 5,
                        color: "#64943e",
                        textTransform: "none",
                        width: "80px",
                      }}
                    >
                      Pending
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      style={{
                        border: "2px solid rgba(0, 0, 0, 0.20)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px",
                        gap: 5,
                        color: "rgba(0, 0, 0, 0.20)",
                        textTransform: "none",
                      }}
                    >
                      Actions
                      <FaAngleDown size={20} />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontSize: "26px" }}>+</TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Shopify width="40px" height="40px" />
                  </TableCell>
                  <TableCell style={{ color: "blue" }}>#TKN20203753</TableCell>
                  <TableCell>2022-05-04</TableCell>
                  <TableCell>Lucknow</TableCell>
                  <TableCell>Abhishek Dixit</TableCell>
                  <TableCell>0.00</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      style={{
                        border: "2px solid #64943e",
                        textTransform: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "3px",
                        gap: 5,
                        color: "#64943e",
                        width: "80px",
                      }}
                    >
                      Pending
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.20)",
                        color: "rgba(0, 0, 0, 0.20)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px",
                        gap: 5,
                        textTransform: "none",
                      }}
                    >
                      Actions
                      <FaAngleDown size={20} />
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ fontSize: "26px" }}>+</TableCell>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Shopify width="40px" height="40px" />
                  </TableCell>
                  <TableCell style={{ color: "blue" }}>#TKN20203752</TableCell>
                  <TableCell>2022-05-04</TableCell>
                  <TableCell>Lucknow</TableCell>
                  <TableCell>Abhishek Dixit</TableCell>
                  <TableCell>0.00</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      style={{
                        border: "2px solid #64943e",
                        display: "flex",
                        alignItems: "center",
                        textTransform: "none",
                        justifyContent: "center",
                        padding: "3px",
                        gap: 5,
                        color: "#64943e",

                        width: "80px",
                      }}
                    >
                      Pending
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.20)",
                        color: "rgba(0, 0, 0, 0.20)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "8px",
                        gap: 5,
                        textTransform: "none",
                      }}
                    >
                      Actions
                      <FaAngleDown size={20} />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Stack
            spacing={2}
            style={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Pagination count={1} variant="outlined" shape="rounded" />
          </Stack>
        </Box>
      </Paper>
    </div>
  );
}
