const hljs = require('highlight.js');


$(document).ready(function () {
    let editor = CodeMirror.fromTextArea($("#textarea-code")[0], {
      height: "70px",
      width: "100%",
      lineNumbers: true,
      styleActiveLine: true,
      textWrapping: true,
      mode: "javascript"
    }).on('change', editor => {
      const code = editor.getValue()
      const highlightedCode = hljs.highlightAuto(code)
      $("#output-code").html(highlightedCode.value)
    });
});

