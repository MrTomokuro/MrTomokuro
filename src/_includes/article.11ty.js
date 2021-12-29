exports.data = {
	layout: "base.11ty.js",
};

exports.render = (data) => //html
	`
	<article>
		${data.content}
	</article>
`