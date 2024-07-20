import React, { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Image from '@editorjs/image';

const DisplayDocument = () => {
  useEffect(() => {
    const editorInstance = new EditorJS({
      holder: 'editorjs',
      readOnly: true, // Read-only mode
      tools: {
        header: Header,
        paragraph: Paragraph,
        image: Image,
      },
      data: JSON.parse(localStorage.getItem('editorContent') || '{}'),
      onReady: () => {
        console.log('Editor is ready with loaded content');
      },
    });

    return () => {
      if (editorInstance) {
        const editorContainer = document.getElementById('editorjs');
        if (editorContainer) {
          editorContainer.innerHTML = '';
        }
      }
    };
  }, []);

  return <div id='editorjs' />;
};

export default DisplayDocument;
