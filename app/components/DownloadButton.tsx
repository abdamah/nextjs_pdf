import React from "react";

interface DownloadButtonProps {
  handleDownloadPdf: () => Promise<void>;
}
export default function DownloadButton({
  handleDownloadPdf,
}: DownloadButtonProps) {
  return (
    <button
      onClick={handleDownloadPdf}
      className="flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
    >
      Download PDF
    </button>
  );
}
