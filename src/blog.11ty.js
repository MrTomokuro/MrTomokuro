exports.data = {
	layout: "base.11ty.js",
	title: "Blog",
};

exports.render = (data) => //html
	`<ul>
    ${data.collections.post.reverse().map(post => //html
		`<li>
			<article>
			${this.postDate(post.date)}
				<a href='${post.url}'><h2>${post.data.title}</h2></a>
			</article>
		</li>`).join("\n")}
  </ul>`;
