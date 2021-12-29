module.exports.render = (data) => //html
	`
	<!doctype html>
	<html lang="en">
	
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>${data.title} ${data.title ? '|' : ''} TOMOKURO</title>
		<link rel="stylesheet" href="/style.css">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
		<script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

	</head>
	
	<body>
	<main>
	${data.content}
	</main>
	<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
	</body>
	
	</html>`;
