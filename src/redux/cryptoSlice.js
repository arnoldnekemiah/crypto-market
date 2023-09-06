import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.coincap.io/v2/assets',
  headers: {},
};

export const getTokens = createAsyncThunk('tokens/getTokens', async (_, thunkAPI) => {
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    const errorMsg = `${error.code}: ${error.msg}`;
    return thunkAPI.rejectWithValue(errorMsg);
  }
});

const formatCryptoStats = (token) => {
  token.marketCapUsd = parseFloat(token.marketCapUsd).toFixed(2);
  token.marketCapUsd = parseFloat(token.marketCapUsd).toLocaleString();
  if (token.maxSupply === null) {
    token.maxSupply = 'Unlimited';
  } else {
    token.maxSupply = parseFloat(token.maxSupply).toLocaleString();
  }
  token.priceUsd = parseFloat(token.priceUsd).toFixed(2);
  token.priceUsd = parseFloat(token.priceUsd).toLocaleString();
  token.supply = parseFloat(token.supply).toLocaleString();
  return token;
};

const initialState = {
  cryptoArray: [],
  isLoading: false,
  error: null,
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTokens.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTokens.fulfilled, (state, action) => {
        state.cryptoArray = action.payload.data.slice(0, 10);
        state.cryptoArray = state.cryptoArray.map((token) => formatCryptoStats(token));
        state.isLoading = false;
      })
      .addCase(getTokens.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default cryptoSlice.reducer;
