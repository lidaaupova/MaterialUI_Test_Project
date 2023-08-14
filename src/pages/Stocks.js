import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Checkbox,
  Typography,
  TextField,
} from "@mui/material";

function App() {
  const [stocks, setStocks] = useState([]);
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [stockDetails, setStockDetails] = useState({});
  const [shortlistDialogOpen, setShortlistDialogOpen] = useState(false);
  const [shortlistName, setShortlistName] = useState("");

  // Handler to open shortlist dialog
  const handleShortlistDialogOpen = () => {
    setShortlistDialogOpen(true);
  };

  // Handler to close shortlist dialog
  const handleShortlistDialogClose = () => {
    setShortlistDialogOpen(false);
    setShortlistName("");
  };

  // Handler to save shortlist using the API
  const handleSaveShortlist = async () => {
    console.log({ selectedStocks });
    const userToken = localStorage.getItem("userToken"); // Get the user token from local storage

    try {
      const response = await fetch(
        "http://54.69.72.157:8083/userdata/api/userdata/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`, // Set the user token as an authorization header
          },
          body: JSON.stringify({
            type: "stocks",
            // owner_id: 1522,
            name: shortlistName,
            data: selectedStocks,
          }),
        }
      );

      // Handle response here
      if (response.ok) {
        // Shortlist saved successfully
        // Perform any additional actions or updates
        handleShortlistDialogClose();
      } else {
        // Handle error case
        console.error("Error saving shortlist");
      }
    } catch (error) {
      console.error("Error saving shortlist:", error);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  const fetchStocks = async () => {
    try {
      const response = await fetch("http://54.69.72.157:8010/stocks/search");
      const data = await response.json();
      setStocks(data);
    } catch (error) {
      console.error("Error fetching stocks:", error);
    }
  };

  const fetchStockDetails = async (symbol) => {
    try {
      const response = await fetch(
        `http://54.69.72.157:8010/stocks/details?symbol=${symbol}`
      );
      const data = await response.json();
      setStockDetails(data);
      setOpenDialog(true);
    } catch (error) {
      console.error("Error fetching stock details:", error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setStockDetails({});
  };

  const handleCheckboxChange = (symbol) => {
    if (selectedStocks.includes(symbol)) {
      setSelectedStocks(selectedStocks.filter((stock) => stock !== symbol));
    } else {
      setSelectedStocks([...selectedStocks, symbol]);
    }
  };

  return (
    <>
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: 20,
          }}
        >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Stocks
          </Typography>
          <Button onClick={handleShortlistDialogOpen} variant="contained">
            Shortlist
          </Button>
        </div>
        <TableContainer
          component={Paper}
          style={{
            maxWidth: 800,
            marginLeft: 20,
            marginTop: 20,
            marginBottom: 5,
          }}
        >
          <Table aria-label="stocks table">
            <TableHead>
              <TableRow>
                <TableCell>Select</TableCell>
                <TableCell>Symbol</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">EPS</TableCell>
                <TableCell align="right">PB</TableCell>
                <TableCell align="right">PE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stocks.map((stock) => (
                <TableRow
                  key={stock.symbol}
                  // onClick={() => fetchStockDetails(stock.symbol)}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Checkbox
                      checked={selectedStocks.includes(stock.symbol)}
                      onChange={(e) => {
                        handleCheckboxChange(stock.symbol);
                      }}
                    />
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() => fetchStockDetails(stock.symbol)}
                  >
                    {stock.symbol}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() => fetchStockDetails(stock.symbol)}
                  >
                    {stock.companyName}
                  </TableCell>
                  <TableCell
                    align="right"
                    onClick={() => fetchStockDetails(stock.symbol)}
                  >
                    {stock.eps}
                  </TableCell>
                  <TableCell
                    align="right"
                    onClick={() => fetchStockDetails(stock.symbol)}
                  >
                    {stock.pb_ratio}
                  </TableCell>
                  <TableCell
                    align="right"
                    onClick={() => fetchStockDetails(stock.symbol)}
                  >
                    {stock.pe_ratio}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Stock Details</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <strong>Symbol:</strong> {stockDetails.symbol}
              <br />
              <strong>Name:</strong> {stockDetails.companyName}
              <br />
              <strong>Description:</strong> {stockDetails.description}
              <br />
              <strong>EPS:</strong> {stockDetails.eps}
              <br />
              <strong>EBIT:</strong> {stockDetails.pb_ratio}
              <br />
              <strong>PE:</strong> {stockDetails.pe_ratio}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={shortlistDialogOpen} onClose={handleShortlistDialogClose}>
          <DialogTitle>Save Shortlist</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter a name for your shortlist:
              <br/>
              {/* <input
                type="text"
                value={shortlistName}
                onChange={(e) => setShortlistName(e.target.value)}
              /> */}
              <TextField
                id="outlined-basic"
                label="Shortlist Name"
                variant="outlined"
                value={shortlistName}
                onChange={(e) => setShortlistName(e.target.value)}
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleShortlistDialogClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSaveShortlist} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </>
  );
}

export default App;
