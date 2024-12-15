"use client";

import React from "react";

import { client, company, items } from "../lib/constants";
import DownloadButton from "./DownloadButton";
import { formatPrice } from "../lib/formatPrice";
import { gereratePdf } from "../lib/generatePdf";

export default function Invoice() {
  const printRef = React.useRef(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      return;
    }

    gereratePdf(element);
  };

  const subTotal = items.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0
  );
  const tax = subTotal * 0.1;
  const total = subTotal + tax;

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <div ref={printRef} className="p-8 bg-white border border-gray-200">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">INVOICE</h1>
              <p className="text-sm text-gray-600">Invoice #INV-2024-001</p>
            </div>
            <div className="text-right">
              <h2 className="font-semibold">{company.name}</h2>
              <p className="text-sm text-gray-600">
                {company.street}
                <br />
                {company.city}, {company.state} {company.code}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Bill To:</h3>
            <p className="text-gray-700">
              {client.name}
              <br />
              {client.address}
              <br />
              {client.city}, {client.state} {client.zipCode}
            </p>
          </div>

          <table className="w-full mb-8 border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 text-left">Description</th>
                <th className="border p-2 text-right">Quantity</th>
                <th className="border p-2 text-right">Unit Price</th>
                <th className="border p-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.description}</td>
                  <td className="border p-2 text-right">{item.quantity}</td>
                  <td className="border p-2 text-right">
                    {formatPrice(item.unitPrice)}
                  </td>
                  <td className="border p-2 text-right">
                    {formatPrice(item.quantity * item.unitPrice)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-end">
            <div className="w-64">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>{formatPrice(subTotal)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax (10%):</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <DownloadButton handleDownloadPdf={handleDownloadPdf} />
        </div>
      </div>
    </div>
  );
}
