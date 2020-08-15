const hljs = require('highlight.js');

$(document).ready(function () {
    $("#textarea-code").bind('input propertychange', function() {
        const code = $("#textarea-code").val()
        code.length ? $("#output").show() : $("#output").hide()
        const highlightedCode = hljs.highlightAuto(code)
        $("#output-code").html(highlightedCode.value)
  });
});

