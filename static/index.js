 function delTask(id) {
    //var string = document.getElementById("input-string");
	let xhttp = new XMLHttpRequest();
    var url = "/" + id + "/delete";
    const method = 'post';
    xhttp.open(method, url, false);
    xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

    const data = null;
    xhttp.send(data);
    if (xhttp.status >= 400) {
        alert(xhttp.responseText);
    } else {
        let post = document.getElementById(id);
        
        post.remove();
    } 

	}
	
	function checkSys(id){
		let xhttp = new XMLHttpRequest();
		var url = "/" + id + "/checked";
		const method = 'post';
		xhttp.open(method, url, false);
		xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

		const data = null;
		xhttp.send(data);
		if (xhttp.status >= 400) {
			alert(xhttp.responseText);
		} else {
			}
	
	}
	function commentLoad(id){
		let xhttp = new XMLHttpRequest();
		var url = "https://jsonplaceholder.typicode.com/comments?postId=" + id;
		const method = 'get';
		xhttp.open(method, url, true);
		xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
		const data = null;
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200)
		{
			let arr = JSON.parse(this.response);
			let txt = "";
			arr.forEach(function(item, i, arr){
				txt += "Почта: "+ item.email + "\nКомментарий: " + item.body + "\n------------------------\n";
			});
			
			alert(txt);
			//alert(JSON.stringify(this.responseText)['name']);
		}
		};
		
		
		xhttp.send(data);
		
	
	}