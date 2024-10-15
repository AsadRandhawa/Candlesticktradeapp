import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    STOCKS: { Stocks: 1 },
    OPTIONS: { "Standard Options": 100, "Mini Options": 10 },
    CRYPTO: { Cryptos: 1 },
    FOREX: {
      "Standard Lot": 100000,
      "Mini Lot": 10000,
      "Micro Lot": 1000,
      "Nano Lot": 100,
    },
    FUTURES: {
      "Australian Dollar (6A)": "100,000",
      "British Pound (6B)": "62,500",
      "Canadian Dollar (6C)": "100,000",
      "CME Bitcoin (BTC)": 5,
      "Japanese Yen (6J)": "12,500,000",
      "New Zealand Dollar (6N)": "100,000",
      "South African Rand (ZAR)": "50,000",
      "U.S. Dollar Index (DX)": "$1,000",
      "Brent Crude Oil (BZ)": "1,000",
      "Crude Oil (CL)": "1,000",
      "Ethanol (EH)": "29,000",
      "Gasoline (RB)": "42,000",
      "Heating Oil (HO)": "42,000",
      "Natural Gas (NG)": "10,000",
      "Copper (HG)": "25,000",
      "Gold (GC)": "100",
      "HRC Steel Index (HRC)": "20",
      "Palladium (PA)": "100",
      "Platinum (PL)": "50",
      "Silver (SI)": "5,000",
      "Corn (ZC)": "5,000",
      "Oats (ZO)": "5,000",
      "Rough Rice (ZR)": "2,000",
      "Soybeans (ZS)": "5,000",
      "Soybean Oil (ZL)": "60,000",
      "Wheat (ZW)": "5,000",
      "Coffee (KC)": "37,500",
      "Sugar (SB)": "112,000",
      "Cotton (CT)": "50,000",
    },
  },
  selectedProduct: "",
  selectedOption: "",
  tickerOptions: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.selectedProduct = action.payload;
      state.tickerOptions = Object.entries(state.data[action.payload] || {});
      state.selectedOption = ""; // Reset option when product changes
    },
    setOption: (state, action) => {
      state.selectedOption = action.payload;
    },
  },
});

// Export the actions
export const { setProduct, setOption } = dataSlice.actions;

// Export the reducer
export default dataSlice.reducer;
