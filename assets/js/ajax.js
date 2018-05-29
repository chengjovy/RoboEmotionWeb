

function doAJAX(method, url, data, funcOnSuc, asyncOrNot) {
	// asynxOrNot is an optional parameter
	if(asyncOrNot == undefined)
		asyncOrNot = true;
	var req;
	if(window.XMLHttpRequest) {
		// for IE7+, Firefox, Chrome, Opera, Safari
		req = new XMLHttpRequest();
	} else {
		// for IE6- and ... worse
		req = new ActiveXObject("Microsoft.XMLHTTP");
	}
	req.onreadystatechange = function() {
		if(req.readyState == 4 && req.status == 200 || req.status == 201) { // success
			var res = req.responseText;
			for(var i=0; i<res.length; i++) {
				if(res[i] != "" && res[i] != "\n" && res[i] != "\r")
					break;
			}
			res = res.substring(i);
			funcOnSuc(res);
		}
	}
	if(method == "GET") {
		req.open("GET", url, asyncOrNot);
		req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		req.send();
	} else if(method == "POST") {
		req.open("POST", url, asyncOrNot);
		req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		req.send(data);
	} else {
		console.log("doAJAX(): ERROR!!");
	}
}
