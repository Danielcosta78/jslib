// minificador.js - Versão Corrigida e Funcional
document.addEventListener('DOMContentLoaded', function() {
    const minifyBtn = document.getElementById('minifyBtn');
    const copyBtn = document.getElementById('copyBtn');
    const clearBtn = document.getElementById('clearBtn');
    const inputCode = document.getElementById('inputCode');
    const outputCode = document.getElementById('outputCode');
    const fileTypeSelect = document.getElementById('fileType');

    // Função principal
    function minifyCodeHandler() {
        const code = inputCode.value;
        const fileType = fileTypeSelect.value;
        
        try {
            let minified;
            switch(fileType) {
                case 'html': minified = minifyHTML(code); break;
                case 'css': minified = minifyCSS(code); break;
                case 'js': minified = minifyJS(code); break;
                default: minified = smartMinify(code);
            }
            outputCode.value = minified;
        } catch (error) {
            outputCode.value = `Erro na minificação: ${error.message}`;
        }
    }

    // Detecção automática
    function smartMinify(code) {
        const trimmed = code.trim();
        if (trimmed.startsWith('<!DOCTYPE') || trimmed.startsWith('<html') || 
            (code.includes('<head>') && code.includes('<body>'))) {
            return minifyHTML(code);
        } else if (trimmed.startsWith('/*') || trimmed.startsWith('@import') || 
                 (code.includes('{') && code.includes('}') && code.includes(':'))) {
            return minifyCSS(code);
        } else {
            return minifyJS(code);
        }
    }

    // Minificação de HTML
    function minifyHTML(html) {
        const protectedBlocks = [];
        
        // 1. Protege scripts, styles e templates
        html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>|<style[\s\S]*?>[\s\S]*?<\/style>|`[\s\S]*?`/g, (match) => {
            protectedBlocks.push(match);
            return `__PROTECTED_${protectedBlocks.length-1}__`;
        });

        // 2. Minifica HTML puro
        html = html
            .replace(/<!--[\s\S]*?-->/g, '')
            .replace(/\s+/g, ' ')
            .replace(/>\s+</g, '><')
            .trim();

        // 3. Processa blocos protegidos
        return html.replace(/__PROTECTED_(\d+)__/g, (_, id) => {
            return minifyProtectedBlock(protectedBlocks[parseInt(id)]);
        });
    }

    // Minificação de blocos protegidos
    function minifyProtectedBlock(block) {
        if (block.startsWith('<style')) {
            return block.replace(/<style[^>]*>([\s\S]*?)<\/style>/i, (_, css) => {
                return `<style>${minifyCSS(css)}</style>`;
            });
        } else if (block.startsWith('<script')) {
            return block.replace(/<script[^>]*>([\s\S]*?)<\/script>/i, (_, js) => {
                return /type\s*=\s*["']?(text|application)\/(javascript|ecmascript)/i.test(block) 
                    ? `<script>${minifyJS(js)}</script>`
                    : block;
            });
        } else if (block.startsWith('`')) {
            return '`' + minifyJS(block.slice(1, -1)) + '`';
        }
        return block;
    }

    // Minificação de CSS
    function minifyCSS(css) {
        return css
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\s+/g, ' ')
            .replace(/\s*([{}:;,])\s*/g, '$1')
            .replace(/;}/g, '}')
            .trim();
    }

    // Minificação de JavaScript
    function minifyJS(js) {
        const cssBlocks = [];
        
        // 1. Protege strings/templates com CSS
        js = js.replace(/(`[\s\S]*?`|'[\s\S]*?'|"[\s\S]*?")/g, (match) => {
            if (/({[^}]*:[^}]*})/.test(match)) {
                cssBlocks.push(match);
                return `__CSS_${cssBlocks.length-1}__`;
            }
            return match;
        });

        // 2. Minificação padrão do JS
        js = js
            .replace(/\/\/.*$/gm, '')
            .replace(/\/\*[\s\S]*?\*\//g, '')
            .replace(/\s+/g, ' ')
            .replace(/\s*([=+\-*\/%&|<>!,;:{}\(\)\[\]])\s*/g, '$1')
            .replace(/(\b(?:if|for|while|catch|with)\b)\s*\(/g, '$1 (')
            .trim();

        // 3. Restaura CSS
        return js.replace(/__CSS_(\d+)__/g, (_, id) => {
            return cssBlocks[parseInt(id)];
        });
    }

    // Funções auxiliares
    function copyToClipboard() {
        outputCode.select();
        document.execCommand('copy');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copiado!';
        setTimeout(() => copyBtn.textContent = originalText, 2000);
    }

    function clearFields() {
        inputCode.value = '';
        outputCode.value = '';
        inputCode.focus();
    }

    // Event listeners
    minifyBtn.addEventListener('click', minifyCodeHandler);
    copyBtn.addEventListener('click', copyToClipboard);
    clearBtn.addEventListener('click', clearFields);
});
