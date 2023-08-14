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
} from "@mui/material";

function App() {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [stockDetails, setStockDetails] = useState({});

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

  return (
    <>    
    <Card>
      <TableContainer component={Paper} style={{ maxWidth: 800, marginLeft: 20, marginTop: 20, marginBottom: 5 }}>
        <Table aria-label="stocks table">
          <TableHead>
            <TableRow>
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
                onClick={() => fetchStockDetails(stock.symbol)}
              >
                <TableCell component="th" scope="row">
                  {stock.symbol}
                </TableCell>                
                <TableCell component="th" scope="row">
                  {stock.companyName}
                </TableCell>                
                <TableCell align="right">{stock.eps}</TableCell>
                <TableCell align="right">{stock.pb_ratio}</TableCell>
                <TableCell align="right">{stock.pe_ratio}</TableCell>
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
      </Card>
    </>
  );
}

export default App;
