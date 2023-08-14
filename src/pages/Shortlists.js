import React, { useState, useEffect } from "react";
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import axios from 'axios';

function Shortlists() {
  const [shortlists, setShortlists] = useState([{
    symbol: 'MMS',
    name: '3M Company',
  }, {
    symbol: 'AOS',
    name: 'AO Smith Corporation',
  }]);

  useEffect(() => {
    fetchShortlists();
  }, []);

  const fetchShortlists = async () => {
    const userToken = localStorage.getItem("userToken");
    try {
      const response = await axios.get(
        "http://54.69.72.157:8083/userdata/api/userdata/",
        {
          headers: {
            Authorization:
              `Token ${userToken}`,
          },
        }
      );

      setShortlists(response.data);
    } catch (error) {
      console.error("Error fetching shortlists:", error);
    }
  };

  return (
    <Card>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={{
        marginLeft: 20,
        marginTop: 20,
      }}>
        Shortlists
      </Typography>
      <TableContainer
        component={Paper}
        style={{
          maxWidth: 800,
          marginLeft: 20,
          marginTop: 20,
          marginBottom: 5,
        }}
      >
        <Table aria-label="shortlists table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shortlists.map((shortlist) => (
              <TableRow key={shortlist.id}>
                <TableCell component="th" scope="row">
                  {shortlist.name}
                </TableCell>
                <TableCell>{shortlist.symbol}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default Shortlists;
