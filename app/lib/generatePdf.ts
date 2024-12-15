import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const gereratePdf = async (element: never) => {
  const canvas = await html2canvas(element, {
    scale: 2,
  });
  const data = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4",
  });

  const imgProperties = pdf.getImageProperties(data);
  const pdfWidth = pdf.internal.pageSize.getWidth();

  const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

  pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save("examplepdf.pdf");
};
