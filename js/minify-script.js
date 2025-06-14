document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const minifyBtn = document.getElementById('minifyBtn');
    const copyBtn = document.getElementById('copyBtn');
    const clearBtn = document.getElementById('clearBtn');
    const inputCode = document.getElementById('inputCode');
    const outputCode = document.getElementById('outputCode');
    const fileTypeSelect = document.getElementById('fileType');

    // Event Listeners
    minifyBtn.addEventListener('click', minifyCodeHandler);
    copyBtn.addEventListener('click', copyToClipboard);
    clearBtn.addEventListener('click', clearFields);

    // Handler principal
    function minifyCodeHandler() {
        const code = inputCode.value;
        const fileType = fileTypeSelect.value;
        let minified;

        switch(fileType) {
            case 'html':
                minified = minifyHTML(code);
                break;
            case 'css':
                minified = minifyCSS(code);
                break;
            case 'js':
                minified = minifyJS(code);
                break;
            default:
                minified = smartMinify(code);
        }

        outputCode.value = minified;
    }

    // Função inteligente que detecta automaticamente
    function smartMinify(code) {
        if (/<(!DOCTYPE|html|head|body)[\s>]/i.test(code)) {
            return minifyHTML(code);
        } else if (code.trim().startsWith('/*') || code.includes('{') && code.includes('}') && code.includes(':')) {
            return minifyCSS(code);
        } else {
            return minifyJS(code);
        }
    }

    // Minificação de HTML
    function minifyHTML(html) {
        const protectedBlocks = [];
        
        // Protege scripts, styles e templates
        html = html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>|<style[\s\S]*?>[\s\S]*?<\/style>|`[\s\S]*?`/gi, (match) => {
            protectedBlocks.push(match);
            return `__PROTECTED_BLOCK_${protectedBlocks.length - 1}__`;
        });

        // Minifica HTML puro
        html = html.replace(/<!--[\s\S]*?-->/g, '')
                   .replace(/\s+/g, ' ')
                   .replace(/>\s+</g, '><')
                   .trim();

        // Processa blocos protegidos
        html = html.replace(/__PROTECTED_BLOCK_(\d+)__/g, (_, id) => {
            return minifyProtectedBlock(protectedBlocks[parseInt(id)]);
        });

        return html;
    }

    // Minificação de blocos protegidos
    function minifyProtectedBlock(block) {
        if (block.startsWith('<style')) {
            return block.replace(/<style[\s\S]*?>([\s\S]*?)<\/style>/i, (m, css) => {
                return `<style>${minifyCSS(css)}</style>`;
            });
        } else if (block.startsWith('<script')) {
            return block.replace(/<script[\s\S]*?>([\s\S]*?)<\/script>/i, (m, js) => {
                const typeMatch = m.match(/type\s*=\s*["']([^"']+)["']/i);
                if (!typeMatch || /text\/javascript|application\/javascript/i.test(typeMatch[1])) {
                    return `<script>${minifyJS(js)}</script>`;
                }
                return m;
            });
        } else if (block.startsWith('`')) {
            // Template literals com possível CSS
            const cssBlocks = [];
            let content = block.slice(1, -1).replace(/({[^{}]*})/g, (m) => {
                if (/:[\s\S]*?{/.test(m)) {
                    cssBlocks.push(m);
                    return `__CSS_BLOCK_${cssBlocks.length - 1}__`;
                }
                return m;
            });

            content = minifyJS(content);
            
            // Restaura CSS
            content = content.replace(/__CSS_BLOCK_(\d+)__/g, (_, id) => {
                return minifyCSS(cssBlocks[parseInt(id)]);
            });

            return '`' + content + '`';
        }
        return block;
    }

    // Minificação de CSS
    function minifyCSS(css) {
        return css.replace(/\/\*[\s\S]*?\*\//g, '')
                 .replace(/\s+/g, ' ')
                 .replace(/\s*([{}:;,])\s*/g, '$1')
                 .replace(/;}/g, '}')
                 .replace(/([:;,{])\s+/g, '$1')
                 .trim();
    }

    // Minificação de JavaScript
    function minifyJS(js) {
        const cssBlocks = [];
        
        // Protege strings/templates que podem conter CSS
        js = js.replace(/`[\s\S]*?`|'[\s\S]*?'|"[\s\S]*?"/g, (match) => {
            if (/({[^{}]*})/.test(match) && /:[^{}]*{/.test(match)) {
                cssBlocks.push(match);
                return `__CSS_BLOCK_${cssBlocks.length - 1}__`;
            }
            return match;
        });

        // Minificação padrão do JS
        js = js.replace(/\/\/.*$/gm, '')
               .replace(/\/\*[\s\S]*?\*\//g, '')
               .replace(/\s+/g, ' ')
               .replace(/\s*([=+\-*\/%&|<>!,;:{}\(\)\[\]])\s*/g, '$1')
               .replace(/(\b(?:if|for|while|catch|with)\b)\s*\(/g, '$1 (')
               .replace(/(\b(?:else|do|try|finally)\b)\s*\{/g, '$1 {')
               .trim();

        // Restaura blocos CSS
        js = js.replace(/__CSS_BLOCK_(\d+)__/g, (_, id) => {
            return cssBlocks[parseInt(id)];
        });

        return js;
    }

    // Funções auxiliares (originalmente presentes)
    function copyToClipboard() {
        outputCode.select();
        document.execCommand('copy');
        
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    }

    function clearFields() {
        inputCode.value = '';
        outputCode.value = '';
        inputCode.focus();
    }
});
