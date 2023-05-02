import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

export function ErrorSnack({ error, handleError }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (error) setOpen(true);
  }, [error]);

  return (
    <Snackbar
      autoHideDuration={3000}
      open={open}
      onClose={() => {
        setOpen(false);
        handleError("");
      }}
    >
      <Alert severity="error">{error}</Alert>
    </Snackbar>
  );
}
