module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/style.css");
	eleventyConfig.addPassthroughCopy("./src/assets");
	eleventyConfig.addPassthroughCopy("./src/admin");

	eleventyConfig.addFilter("postDate", dateObj => {
		return dateObj.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	});
	return {
		dir: {
			input: "src",
			output: "public"
		}
	}
}