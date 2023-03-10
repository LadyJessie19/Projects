/* This function copy to the user clipboard the code that he wants to use in his code */

function copyCode(element){

    /* if is a input, you can use: element.select() and input.value */

    navigator.clipboard.writeText(`${element}`);
    alert(`Text copied with sucess: ${element}`)
}

/* Copies Examples */

const SCRIPT = '<script src="i-common.js" id="ar:ic-config" data-ar:ic-sec="your_HTML_section"></script>'
const DIV = '<div id="ar:ic-target"></div>'

/* Function Using */

copyCode(SCRIPT)