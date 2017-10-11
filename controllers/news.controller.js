exports.index = function (req, res) {

	let content = {
		highlight: {
			url: '/assets/images/home/banner/highlight.jpg',
			title: 'Yon'
		},

	res.render('aboutus.twig', content)
}

//let content = {
		//banner: [
		//{
			//id:1,
			//url:'//image/img-1.jpg'
		//},
		//{
			//id:2,
			//url:'//image/img-1.jpg'
		//}
	  //]
	//}

	//res.json(content)