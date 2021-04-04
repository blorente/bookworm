import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import 'codemirror/keymap/vim';
import 'codemirror/theme/monokai.css';

function Editor(props) {
    return (
        <div class="editor">
        <CodeMirror
            value={props.contents}
            options={{
                theme: 'monokai',
                keyMap: 'vim',
                mode: 'text',
                lineNumbers: false,
                lineWrapping: true,
            }}
        />
        </div>
    )
}

export default Editor
