// Ensure that the parent component is marked as a client-side component


import React from 'react';
import dynamic from "next/dynamic";

// Dynamically import QuillEditor component
const QuillEditor = dynamic(() => import("@/components/FormInputs/QuillEditor"), { ssr: false });

export default function Page() {
  return (
    <div>
      <h2>Task</h2>
      {/* Render the QuillEditor component */}
      <QuillEditor />
    </div>
  );
}
