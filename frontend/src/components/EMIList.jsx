import React from 'react';

export default function EMIList({ plans = [], onSelect, selectedIndex, price }) {

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Available EMI Plans</h3>
      <div className="space-y-3">
        {plans.map((p, idx) => (
          <div key={idx} className={`p-3 border rounded flex items-center justify-between ${selectedIndex === idx ? 'border-indigo-600 bg-indigo-50' : ''}`}>
            <div>
              <div className="font-medium">{p.tenureMonths} months · ₹{p.monthlyPayment} / month</div>
              <div className="text-sm text-gray-600">{p.interestRateAnnual}% p.a. · Cashback ₹{p.cashback} {p.note ? `· ${p.note}` : ''}</div>
            </div>
            <div>
              <button
                onClick={() => onSelect(idx)}
                className={`px-3 py-1 rounded ${selectedIndex === idx ? 'bg-indigo-600 text-white' : 'border'}`}
              >
                {selectedIndex === idx ? 'Selected' : 'Select'}
              </button>
            </div>
          </div>
        ))}
        {plans.length === 0 && <div className="text-gray-500">No plans available</div>}
      </div>
    </div>
  );
}
