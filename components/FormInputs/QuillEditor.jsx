"use client"
import React, { useState } from 'react';
import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
import 'react-quill/dist/quill.bubble.css';

export default function QuillEditor() {
  const [content, setContent] = useState(""); // State hook for managing content

  // Custom Tool Bar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  return (
    <div className="sm:col-span-2 text-gray-900 dark:text-white">
      <label
        htmlFor="content"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Blog Content
      </label>
      <ReactQuill
         style={{ height: "300px" }}
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
      />
    </div>
  );
}
