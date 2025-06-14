document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const minifyBtn = document.getElementById('minifyBtn');
    const copyBtn = document.getElementById('copyBtn');
    const clearBtn = document.getElementById('clearBtn');
    const inputCode = document.getElementById('inputCode');
    const outputCode = document.getElementById('outputCode');

    // Event listeners
    minifyBtn.addEventListener('click', minifyCodeHandler);
    copyBtn.addEventListener('click', copyToClipboard);
    clearBtn.addEventListener('click', clearFields);

    // Minify code function
    function minifyCodeHandler() {
        const code = inputCode.value;
        const minified = minifyCode(code);
        outputCode.value = minified;
    }

    // Copy to clipboard function
    function copyToClipboard() {
        outputCode.select();
        document.execCommand('copy');
        
        // Visual feedback
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    }

    // Clear fields function
    function clearFields() {
        inputCode.value = '';
        outputCode.value = '';
        inputCode.focus();
    }

    // Improved minification function that preserves CSS functionality
    function minifyCode(code) {
        if (!code) return '';
        
        // Store CSS strings to preserve them
        let cssStrings = [];
        let cssCounter = 0;
        
        // Temporarily replace CSS strings with placeholders
        code = code.replace(/`[^`]*`|'[^']*'|"[^"]*"/g, match => {
            if (match.includes('{') || match.includes(':')) {  // Likely CSS content
                const placeholder = `__CSS_PLACEHOLDER_${cssCounter}__`;
                cssStrings[cssCounter] = match;
                cssCounter++;
                return placeholder;
            }
            return match;
        });
        
        // Remove single-line comments
        code = code.replace(/\/\/.*$/gm, '');
        
        // Remove multi-line comments
        code = code.replace(/\/\*[\s\S]*?\*\//g, '');
        
        // Remove extra whitespace
        code = code.replace(/\s+/g, ' ');
        code = code.replace(/^\s+|\s+$|(\s){2,}/g, '$1');
        
        // More careful handling of spaces around special characters
        code = code.replace(/\s*([\{\}();,:])\s*/g, '$1');
        code = code.replace(/\s*([=+\-*/<>])\s*/g, '$1');
        
        // Restore CSS strings
        cssStrings.forEach((css, index) => {
            code = code.replace(`__CSS_PLACEHOLDER_${index}__`, css);
        });
        
        return code.trim();
    }
});
