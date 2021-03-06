import React from "react";
import {
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import toast, { Toaster } from "react-hot-toast";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
function SQLQueries() {
  const q1 = () => {
    navigator.clipboard.writeText(`SELECT * from customers;`);
    toast.success("Query copied to clipboard", { position: "bottom-center" });
  };
  const q2 = () => {
    navigator.clipboard.writeText(
      `SELECT * from customers where gender="Male";`
    );
    toast.success("Query copied to clipboard", { position: "bottom-center" });
  };
  const q3 = () => {
    navigator.clipboard.writeText(
      `SELECT * from customers where gender="Female";`
    );
    toast.success("Query copied to clipboard", { position: "bottom-center" });
  };
  const q4 = () => {
    navigator.clipboard.writeText(
      `SELECT * from customers where ip_address="86.228.202.112" OR ip_address="125.47.224.245";`
    );
    toast.success("Query copied to clipboard", { position: "bottom-center" });
  };
  const q5 = () => {
    navigator.clipboard.writeText(
      `SELECT * from customers where id BETWEEN 401 AND 525;`
    );
    toast.success("Query copied to clipboard", { position: "bottom-center" });
  };
  return (
    <>
      <div style={{ display: "flex", gap: "5px", marginBottom: "15px" }}>
        <IntegrationInstructionsIcon />
        <Typography>Snippets</Typography>
      </div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>SQL Queries</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            SELECT * from customers;{" "}
            <IconButton onClick={q1}>
              <ContentCopyIcon></ContentCopyIcon>
            </IconButton>
          </Typography>
          <Divider />
          <Typography>
            SELECT * from customers where gender="Male";{" "}
            <IconButton onClick={q2}>
              <ContentCopyIcon></ContentCopyIcon>
            </IconButton>
          </Typography>
          <Divider />
          <Typography>
            SELECT * from customers where gender="Female";{" "}
            <IconButton onClick={q3}>
              <ContentCopyIcon></ContentCopyIcon>
            </IconButton>
          </Typography>
          <Divider />
          <Typography>
            SELECT * from customers where ip_address="86.228.202.112" OR
            ip_address="125.47.224.245";{" "}
            <IconButton onClick={q4}>
              <ContentCopyIcon></ContentCopyIcon>
            </IconButton>
          </Typography>
          <Divider />
          <Typography>
            SELECT * from customers where id BETWEEN 401 AND 525;{" "}
            <IconButton onClick={q5}>
              <ContentCopyIcon></ContentCopyIcon>
            </IconButton>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Toaster />
    </>
  );
}

export default SQLQueries;
