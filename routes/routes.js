exports.home=function(req,res){
	res.render('home',{title:'Agriport India',
		headline:'An Innovation in Agriculture Process in India !!'
	});
};

exports.about=function(req,res){
	res.render('about',{title:'Agriport India',
		headline:'An Innovation in Agriculture Process in India !!'
	});
};

exports.contact=function(req,res){
	res.render('contact',{title:'Agriport India',
		headline:'An Innovation in Agriculture Process in India !!'
	});
};

exports.news=function(req,res){
	res.render('news',{title:'Agriport India',
		headline:'An Innovation in Agriculture Process in India !!'
	});
};

exports.career=function(req,res){
	res.render('career',{title:'Agriport India',
		headline:'An Innovation in Agriculture Process in India !!'
	});
};

exports.login=function(req,res){
	res.render('login',{title:'Agriport India',
		headline:'An Innovation in Agriculture Process in India !!'
	});
};

exports.signup=function(req,res){
	res.render('signup',{title:'Agriport India',
		headline:'An Innovation in Agriculture Process in India !!'
	});
};

/*
exports.city=function(req,res){
	var cityName=req.params.city;
	var title,heading;
	var imageCount=4;
	
	if(cityName==='berlin') {
			title="Berlin";
			heading ="Berlin: Where love is in the air";
	}else if(cityName === 'paris') {
		title="Paris";
		heading ="Paris: Good talkers are only found in Paris";
	}
	else if(cityName === 'madrid') {
		title="Madrid";
		heading ="Madrid: Buzz, Beautiful architecture adn Football";
	}
	else if(cityName === 'london') {
		title="London";
		heading ="London: Sparkling, Still, Food, Gorgeous";
	}
	else if(cityName === 'newyork') {
		title="New York";
		heading ="New York: Come to New York to become someone new";
	}
	
	res.render('city',{
		title:title,
		headline:heading,
		city:cityName,
		numberOfImages:imageCount});
};
*/
