import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import 'codemirror/keymap/vim';
import 'codemirror/theme/monokai.css';

function Editor(props) {
    return (
        <div>
            <CodeMirror
               value={props.contents}
               options={{
                   theme: 'monokai',
                   keyMap: 'vim',
                   mode: 'jsx',
               }}
            />
        </div>
    )
}

export default Editor
