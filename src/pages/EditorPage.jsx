import React, { useEffect, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';
import Image from '@editorjs/image';

const EditorPage = ({ content }) => {
  const [editor, setEditor] = useState(null);

  console.log('gdgdgdgdgd', editor);

  useEffect(() => {
    const editorInstance = new EditorJS({
      holder: 'editorjs',
      data: content,
      readOnly: false,
      tools: {
        header: Header,
        paragraph: Paragraph,
        image: {
          class: Image,
          inline: true,
          config: {
            uploader: {
              // Implement image upload logic here
            },
          },
        },
      },
      onReady: () => setEditor(editorInstance),
    });

    return () => {
      if (editorInstance) {
        const editorContainer = document.getElementById('editorjs');
        if (editorContainer) {
          editorContainer.innerHTML = '';
        }
      }
    };
  }, [content]);

  const saveContent = async () => {
    if (editor) {
      try {
        const savedData = await editor.save();
        localStorage.setItem('editorContent', JSON.stringify(savedData));
        console.log('Content saved:', savedData);
        alert('Content saved locally!');
      } catch (error) {
        console.error('Failed to save content:', error);
      }
    }
  };

  return (
    <div>
      <div id='editorjs' />
      <button onClick={saveContent}>Save Content</button>
    </div>
  );
};

export default EditorPage;
