# Next.js Project with html2canvas and jsPDF

This is a Next.js project setup with `html2canvas` and `jsPDF` packages to enable HTML content capture and PDF generation.

## Getting Started

First, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <project-folder>
npm install
```

Run the development server:

```bash
git clone <repository-url>
cd <project-folder>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Installation of html2canvas and jsPDF

To install `html2canvas` and `jsPDF`, run the following command:

```bash
npm install html2canvas jspdf
```

## Features

- **html2canvas**: Allows capturing screenshots of HTML elements as canvas images.
- **jsPDF**: Enables creating and saving PDFs directly from the browser.

## Example Usage

Here’s how you can use `html2canvas` and `jsPDF` together:

1. Import the libraries:

```javascript
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
```

2. Add a button to capture an HTML element and save it as a PDF:

```javascript
const handleDownloadPDF = async () => {
  const element = document.getElementById("content-to-capture");
  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF();
  pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
  pdf.save("download.pdf");
};

return (
  <div>
    <div id="content-to-capture">
      <h1>Content to Capture</h1>
      <p>This content will be captured and exported as a PDF.</p>
    </div>
    <button onClick={handleDownloadPDF}>Download PDF</button>
  </div>
);
```

## Scripts

- `dev`: Runs the app in development mode.
- `build`: Builds the app for production.
- `start`: Starts the app in production mode.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

For more information on the tools:

- [html2canvas Documentation](https://html2canvas.hertzen.com/)
- [jsPDF Documentation](https://github.com/parallax/jsPDF)

## Deploying the Project

You can deploy this application to Vercel or any other platform that supports Next.js. Follow the instructions on the [Next.js Deployment Documentation](https://nextjs.org/docs/deployment).

## License

This project is licensed under the MIT License.

**Abdallah Mahmoud**
