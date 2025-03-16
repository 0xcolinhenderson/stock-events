const express = require("express");
const axios = require("axios"); // Import axios for API requests
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
const apiKey = process.env.REACT_APP_API_KEY;

app.use(cors(corsOptions));

app.get("/api/stock/:stockid", async (req, res) => {
  const stockSymbol = req.params.stockid;
  const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockSymbol}&apikey=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
