(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{763:function(module,exports,__webpack_require__){"use strict";function kotlin(Prism){!function(Prism){Prism.languages.kotlin=Prism.languages.extend("clike",{keyword:{pattern:/(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,lookbehind:!0},function:[/\w+(?=\s*\()/,{pattern:/(\.)\w+(?=\s*\{)/,lookbehind:!0}],number:/\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,operator:/\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/}),delete Prism.languages.kotlin["class-name"],Prism.languages.insertBefore("kotlin","string",{"raw-string":{pattern:/("""|''')[\s\S]*?\1/,alias:"string"}}),Prism.languages.insertBefore("kotlin","keyword",{annotation:{pattern:/\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,alias:"builtin"}}),Prism.languages.insertBefore("kotlin","function",{label:{pattern:/\w+@|@\w+/,alias:"symbol"}});var interpolation=[{pattern:/\$\{[^}]+\}/,inside:{delimiter:{pattern:/^\$\{|\}$/,alias:"variable"},rest:Prism.languages.kotlin}},{pattern:/\$\w+/,alias:"variable"}];Prism.languages.kotlin.string.inside=Prism.languages.kotlin["raw-string"].inside={interpolation:interpolation}}(Prism)}module.exports=kotlin,kotlin.displayName="kotlin",kotlin.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_kotlin~2c138de3.9746fad0e10b2f5c38a9.bundle.js.map