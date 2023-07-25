import { Editor } from '@tinymce/tinymce-react';
import { useState } from 'react';

function TinyEditor(value) {
    // const handleEditorChange = {props}
    const [text, setText] = useState('');
    const [values, setValues] = useState('');

    const [content, setContent] = useState("");

    console.log('value ===>', value);
    // console.log('text ===>', text);

    return (
        <Editor
            apiKey="ekjbux3o3ibi4jxd9zz545cyj67o7g2ahlz4skafkt64r1iy"
            onEditorChange={(newValue, editor) => {
                setValues(newValue);
                setText(editor.getContent({ format: 'text' }));
            }}
            value={values}
            loading={true}
        />
    );
}

export default TinyEditor;
