import { PDFDocument } from 'pdf-lib';
import React, { useState } from 'react';

function ResumeUpload({ setResumeData }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        let text = '';
        if (file.type === 'application/pdf') {
          const pdfDoc = await PDFDocument.load(event.target.result);
          const pages = pdfDoc.getPages();
          text = pages.map(page => page.getTextContent()).join('\n');
        } else {
          text = event.target.result;
        }

        const keywords = ['JavaScript', 'React', 'CSS', 'HTML'];
        const keywordCheck = keywords.reduce((acc, keyword) => {
          acc[keyword] = text.includes(keyword);
          return acc;
        }, {});
        setResumeData({ text, keywordCheck });
      };

      if (file.type === 'application/pdf') {
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsText(file);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input type="file" accept=".pdf,.doc,.docx,.txt" onChange={handleFileChange} className="mb-4" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Upload Resume
      </button>
    </form>
  );
}

export default ResumeUpload;
