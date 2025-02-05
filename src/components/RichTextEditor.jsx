import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, Box, Typography } from '@mui/material';

const RichTextEditor = () => {
  const [editorContent, setEditorContent] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Load saved editor content from localStorage if it exists
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      setEditorContent(savedContent);
    }

    // Load user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserData(user);
    }
  }, []);

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSave = () => {
    localStorage.setItem('editorContent', editorContent);
    alert('Content saved!');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      {userData && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Welcome, {userData.firstName} {userData.lastName}</Typography>
          <Typography variant="body1">Email: {userData.email}</Typography>
        </Box>
      )}
      <ReactQuill
        value={editorContent}
        onChange={handleEditorChange}
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
        theme="snow"
      />
      <Button variant="contained" color="primary" onClick={handleSave} sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
};

RichTextEditor.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline'],
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']
  ],
};

RichTextEditor.formats = [
  'header', 'font',
  'bold', 'italic', 'underline',
  'list', 'bullet',
  'align',
  'link', 'image'
];

export default RichTextEditor;
