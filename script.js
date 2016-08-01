
console.log('test');


document.getElementById('contentArea').addEventListener('click', showalert, false);
function showalert(e) {
	var canned_text = e.target.innerHTML;
	var parent = e.target.parentNode.parentNode.parentNode.parentNode;
//	console.log(parent);

	var comment_input_wrapper = parent.getElementsByClassName('_1mf _1mj');
	var comment_input = comment_input_wrapper[0].childNodes[0].childNodes[0];

	comment_input.innerHTML = canned_text;
}





//setInterval(add_canned_responses, 1000 );
add_canned_responses();
function add_canned_responses() {

	var textareas = document.getElementsByClassName('UFICommentContainer');
	for (var key in textareas) {

		// Bail out if key not numeric
		if ( isNaN( key ) ) {
			break;
		}

		var textarea = textareas[key];

//		console.log(textarea);


		var pulldown = textarea.getElementsByClassName('UFICommentAttachmentButtons');
//console.dir(pulldown[0]);
		var list_icon_url = chrome.extension.getURL('list-icon.png');

		pulldown[0].innerHTML = '<style>.canned-list-icon div {color:#fff;z-index:9999999999999;display:none;background:rgba(0,0,0,0.7);position:fixed;left:25%;top:25%;width:50%;height:50%;opacity:1;} .canned-list-icon:hover div {display:block;} .canned-list-icon:hover {opacity:1;cursor:pointer;} .canned-list-icon {opacity:0.6;background:url('+list_icon_url+') no-repeat center;float:left;width:23px;height:23px;padding:5px;background-size:50%;}</style><div class="canned-list-icon"><div><span class="canned-item">XXX</span><span class="canned-item">YYY</span><span class="canned-item">ZZZ</span></div></div>'+pulldown[0].innerHTML;

		// Remove placeholder text
		var placeholder_text = textarea.getElementsByClassName('_1p1v');
		placeholder_text[0].remove();

		// Get textarea text - ready for editing
		var textarea_text = textareas[key].getElementsByClassName('_1mf _1mj')[0].childNodes[0].innerHTML;
//		console.log(textarea_text);

	}
}
