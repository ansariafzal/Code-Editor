window.onload = function() {
    
    let i_frame = document.getElementById('i-output')
    let run = document.getElementById('run')

    function editorComponent(mode, id, theme){
            let component = CodeMirror.fromTextArea(document.getElementById(id), {
            mode : mode,
            theme : theme,
            lineNumbers : true,
     });
     return component
    }
    
    let html_editor =  editorComponent('xml', 'html-editor', 'dracula')
    let css_editor = editorComponent('css', 'css-editor', 'dracula')
    let js_editor = editorComponent('javascript', 'javascript-editor', 'dracula')


    run.addEventListener("click", () => {
        let html_code = html_editor.getValue()
        let css_code = css_editor.getValue()
        let js_code = js_editor.getValue()

        const srcDoc = `<html>
                            <body>${html_code}</body>
                            <style>${css_code}</style>
                            <script>${js_code}</script>
                        </html>`

        i_frame.setAttribute('srcdoc', srcDoc)
    })
   
}
