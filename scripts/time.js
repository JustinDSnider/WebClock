//Displays Current Date Time
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var Hours, Min, Sec;
var Day, Month, Year;

function showDateTime()
{
	var currentDateTime = new Date();
	Hours = ('00' + currentDateTime.getHours()).slice(-2);
	Min = ('00' + currentDateTime.getMinutes()).slice(-2);
	Sec = ('00' + currentDateTime.getSeconds()).slice(-2);
	document.getElementById("CurrentTime12HourDisplay").innerHTML = `${HourType(Hours)}:${Min}:${Sec} ${AMPMConvert(Hours)}`;
	document.getElementById("CurrentTime24HourDisplay").innerHTML = `${Hours}:${Min}:${Sec}`;
	document.getElementById("CurrentTimeZone").innerHTML = `${currentDateTime.getTimezoneOffset()}`;
	document.getElementById("CurrentDateDisplay").innerHTML = `${days[currentDateTime.getDay()]}, ${('00' + currentDateTime.getDate()).slice(-2)} ${months[currentDateTime.getMonth()]} ${currentDateTime.getFullYear()}`;
	document.getElementById("CurrentDateTimeISO").innerHTML = currentDateTime.toISOString();
}

function HourType(Hours)
{
	Hours = Hours %12;
	Hours = Hours ? Hours : 12;
	return Hours;
}

function AMPMConvert(Hours)
{
	var AMPM = Hours >= 12 ? 'PM' : 'AM';
	return AMPM
}

setInterval(showDateTime);