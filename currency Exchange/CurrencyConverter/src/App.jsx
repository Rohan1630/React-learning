import React, { useState } from 'react';
import ConversionResult from './components/ConversionResult';
import CurrencyForm from './components/CurrencyForm';

function App() {
  const [conversionResult, setConversionResult] = useState(null);

  const fetchConversionRate = async (fromCurrency, toCurrency, amount) => {
    const apiKey = '34c0e821617a2f64c9ebdbc7'; // Replace with your ExchangeRate-API key
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`);
    const data = await response.json();
    const rate = data.conversion_rates[toCurrency];
    setConversionResult({
      amount,
      fromCurrency,
      toCurrency,
      result: amount * rate,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Currency Converter</h1>
      <CurrencyForm fetchConversionRate={fetchConversionRate} />
      {conversionResult && <ConversionResult conversionResult={conversionResult} />}
    </div>
  );
}

export default App;
