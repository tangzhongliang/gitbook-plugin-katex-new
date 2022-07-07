var katex = require("katex");

module.exports = {
    book: {
        assets: "./static",
        js: [],
        css: [
            "katex.min.css"
        ]
    },
    ebook: {
        assets: "./static",
        css: [
            "katex.min.css"
        ]
    },
    blocks: {
        math: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$$",
                end: "$$"
            },
            process: function(blk) {
                var tex = blk.body;
                var isInline = true;
                if (tex[0] == "\n"){
                    isInline = false;
                }
                if (tex.length >= 2 && tex[0] == "\r" && tex[1] == "\n"){
                    isInline = false;
                }
                
                var output = katex.renderToString(tex, {
                    displayMode: !isInline
                });

                return output;
            }
        }
    },
    hooks: {
        page: fixMakefile
    }
};
function fixMakefile (page) {
    // makefile parse error
	page.content = page.content
		.replace(new RegExp('{% math %}', "g"),'<span>$$$$<span>')
		.replace(new RegExp('{% endmath %}', "g"),'<span>$$$$<span>')

	return page;
};
