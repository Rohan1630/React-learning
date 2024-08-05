import React from 'react';

const ConversionResult = ({ conversionResult }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-6">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Conversion Result</div>
        <p className="text-gray-700 text-base">
          {conversionResult.amount} {conversionResult.fromCurrency} = {conversionResult.result} {conversionResult.toCurrency}
        </p>
      </div>
    </div>
  );
};

export default ConversionResult;
