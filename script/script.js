var url = "url(./Data/Images/Nature/";
var stack1 = 1;
var stack2 = 2;
var jpg = ".jpg"
var end = ")"
var swpvis = 1;

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
	if (swpvis == 1)
	{
		document.getElementById("image" + String(swpvis + 1)).style.opacity = 1;
		document.getElementById("back" + String(swpvis + 1)).style.opacity = 1;
		document.getElementById("image" + String(swpvis)).style.opacity = 0;
		document.getElementById("back" + String(swpvis)).style.opacity = 0;
		document.getElementById("image" + String(swpvis)).style.backgroundImage = (url + String(k) + jpg + end);
		document.getElementById("back" + String(swpvis)).style.backgroundImage = (url + String(k) + jpg + end);
		swpvis = 2;
	}
	if (swpvis == 2)
	{
		document.getElementById("image" + String(swpvis - 1)).style.opacity = 1;
		document.getElementById("back" + String(swpvis - 1)).style.opacity = 1;
		document.getElementById("image" + String(swpvis)).style.opacity = 0;
		document.getElementById("back" + String(swpvis)).style.opacity = 0;
		document.getElementById("image" + String(swpvis)).style.backgroundImage = (url + String(k) + jpg + end);
		document.getElementById("back" + String(swpvis)).style.backgroundImage = (url + String(k) + jpg + end);
		swpvis = 1;
	}
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
	timerId = setTimeout(tick, 4000);
	return;
	}, 4000);
	document.getElementById("start_button").style.display = "none";
}