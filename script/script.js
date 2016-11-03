var url = "url(./data/Images/Nature/";
var stack1 = 1;
var stack2 = 2;
var jpg = ".jpg"
var end = ")"

var arr = [];
var len = 30;
var i;
for (i = 0; i < len; i++) 
{
	arr[i] = i + 1;
}


var is_pressed = 0;
function swap(k)
{
	document.getElementById("image").style.backgroundImage = (url + String(k) + jpg + end);
	document.getElementById("back").style.backgroundImage = (url + String(k) + jpg + end);
}

function mix()
{
	for(i = len - 1; i >= 0; i--)
	{
		var n = Math.floor(Math.random() * i) + 1;
		var stck = arr[i];
		arr[i] = arr[n];
		arr[n] = stck;
	}
}

function startbtn()
{
	mix();
	i = -1;
	var timerId = setTimeout(function tick() {
	i++;
	if(i == len) return;
	swap(arr[i]);
	alert(i);
	timerId = setTimeout(tick, 1000);
	return;
	}, 1000);
	document.getElementById("start_button").style.display = "none";
}