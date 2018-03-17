const Ball = function(){
	
	const draw = function(){
		ellipseMode(CENTER)
		rectMode(CENTER)
		fill(color('black'))
		stroke(color('red'))
		rect(windowWidth/2,windowHeight/2,windowWidth,windowHeight*.95,windowWidth*.15)
		fill(color('green'))
		rect(windowWidth/2,windowHeight/2,windowWidth*.83,windowHeight*.67	,windowWidth*.85)
	}
	return{
		draw
		
	}


}