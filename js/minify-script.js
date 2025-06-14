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

    // Core minification function (now handles embedded CSS)
    function minifyCode(code) {
        if (!code) return '';
        
        // Store CSS blocks (in template literals or strings) for later processing
        const cssBlocks = [];
        
        // Temporarily replace CSS blocks with placeholders
        code = code.replace(/(`[\s\S]*?`|'[\s\S]*?'|"[\s\S]*?")/g, function(match) {
            // Check if this looks like CSS (contains CSS rules)
            if (/(?:^|\s)(?:@media|@keyframes|@import|@font-face|@supports|@page)|[{;]\s*[a-z-]+\s*:/i.test(match)) {
                cssBlocks.push(match);
                return `__CSS_BLOCK_${cssBlocks.length - 1}__`;
            }
            return match;
        });
        
        // Minify JavaScript code
        // Remove single-line comments
        code = code.replace(/\/\/.*$/gm, '');
        
        // Remove multi-line comments (except important /*! comments)
        code = code.replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\//g, function(match) {
            return match.startsWith('/*!') ? match : '';
        });
        
        // Remove extra whitespace (careful with regex literals and strings)
        code = code.replace(/(\s)+/g, ' ');
        code = code.replace(/^\s+|\s+$/g, '');
        
        // Remove spaces around special characters but keep some readability
        code = code.replace(/\s*([{}()\[\]+\-*\/=%&|<>!,;:])\s*/g, '$1');
        code = code.replace(/([^\\])\s*\n\s*/g, '$1');
        code = code.replace(/(\b(?:if|for|while|catch|with)\b)\s*\(/g, '$1 (');
        code = code.replace(/(\b(?:else|do|try|finally)\b)\s*\{/g, '$1 {');
        
        // Minify CSS blocks and restore them
        code = code.replace(/__CSS_BLOCK_(\d+)__/g, function(match, id) {
            return minifyCSS(cssBlocks[parseInt(id)]);
        });
        
        return code.trim();
    }

    // CSS-specific minification
    function minifyCSS(css) {
        // Remove comments (except /*! important ones)
        css = css.replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\//g, function(match) {
            return match.startsWith('/*!') ? match : '';
        });
        
        // Remove whitespace
        css = css.replace(/\s+/g, ' ');
        css = css.replace(/\s*([{}:;,])\s*/g, '$1');
        css = css.replace(/;\s*}/g, '}');
        css = css.replace(/([:;,])\s+/g, '$1');
        css = css.replace(/\s+(!important)/g, '$1');
        
        // Special cases for CSS in template literals
        if (css.startsWith('`') && css.endsWith('`')) {
            // For template literals, we might want to preserve some formatting
            const content = css.slice(1, -1);
            return '`' + content.replace(/\s*([{}:;,])\s*/g, '$1').replace(/;\s*}/g, '}') + '`';
        }
        
        return css.trim();
    }
});
