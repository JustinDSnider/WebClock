function setHourRange(){
	for(var h = 0; h <= 24; h++){
		var select = document.getElementById("Timer_Hour_Select");
		var option = document.createElement("OPTION");
		select.options.add(option);
		option.text = h;
		option.value = h;
	}
}

function setMinuteRange(){
	for(var m = 0; m <= 60; m++){
		var select = document.getElementById("Timer_Minute_Select");
		var option = document.createElement("OPTION");
		select.options.add(option);
		option.text = m;
		option.value = m;
	}
}

function setSecondRange(){
	for(var s = 1; s <= 60; s++){
		var select = document.getElementById("Timer_Second_Select");
		var option = document.createElement("OPTION");
		select.options.add(option);
		option.text = s;
		option.value = s;
	}
}

function timerSetup(){
	setHourRange();
	setMinuteRange();
	setSecondRange();
}