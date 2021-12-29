exports.data = {
	layout: "base.11ty.js",
	title: "hello"
};

exports.render = (data) => //html
	`
	<div class='overlapped'>
		<img class='cover'  src='/assets/town.jpg' alt='town'>
		<div class='container pt-4 pt-lg-5'>
		<h1 class='parallelogram bg-white fst-italic d-inline-block display-5 border border-2 border-dark'>tomokuro</h1>
		<nav class='mt-4 mt-lg-5'>
		<ul class='list-unstyled'>
			<li><a class='my-1 parallelogram bg-gradient fst-italic d-inline-block display-5 border border-2 border-dark text-body' href='/'>About</a></li>
			<li><a class='my-1 parallelogram bg-gradient fst-italic d-inline-block display-5 border border-2 border-dark text-body' href='/blog'>Blog</a></li>
			<li><a class='my-1 parallelogram bg-gradient fst-italic d-inline-block display-5 border border-2 border-dark text-body' href='/contact'>Contact</a></li>
		</ul>
		</nav>
		</div>
	</div>
`