import React, { useState } from 'react';
import ResumeUpload from './components/ResumeUpload';
import './index.css';

function App() {
  const [resumeData, setResumeData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">ATS Resume Checker</h1>
      <ResumeUpload setResumeData={setResumeData} />
      {resumeData && (
        <div className="mt-8 p-4 bg-white rounded shadow-lg">
          <h2 className="text-2xl font-semibold">Resume Analysis</h2>
          <pre className="mt-4">{JSON.stringify(resumeData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
