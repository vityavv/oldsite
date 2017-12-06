var used = false; //If the user has used before download
function whenloadsman() {//When it loads, man!
	theeditor.document.designMode='On';//turn on designMode for the iFrame
	if (document.addEventListener) {//if it is supported
		window.frames["theeditor"].addEventListener("keyup", createHTMLfile, false);//every time you type we createHTMLfile
		createHTMLfile();//create blank file (is anyone really that stupid?)
	}
}
//commands
function ibold() {
	theeditor.document.execCommand("bold",false,null);//use execCommand on iframe with designMode = "On"
	createHTMLfile();//if we make a part bold and then download we want to keep it bold so we update the html file
}
function iitalic() {
	theeditor.document.execCommand("italic",false,null);
	createHTMLfile();
}
function iunderline() {
	theeditor.document.execCommand("underline",false,null);
	createHTMLfile();
}
function isize() {
	theeditor.document.execCommand("fontsize",false,prompt("Insert a text size: (1-7)"));//Some execCommand types need additional values
	createHTMLfile();
}
function icolor() {
	theeditor.document.execCommand("forecolor",false,prompt("Insert a basic color name or a hexidecimal value (ex: teal or #00d547)"));//color value
	createHTMLfile();
}
function iul() {
	theeditor.document.execCommand("insertorderedlist",false,null);
	createHTMLfile();
}
function iol() {
	theeditor.document.execCommand("insertunorderedlist",false,null);
	createHTMLfile();
}
function ihr() {
	theeditor.document.execCommand("inserthorizontalrule",false,null);
	createHTMLfile();
}
function ilink() {
	theeditor.document.execCommand("createlink",false,prompt("Insert the link"));//link
	createHTMLfile();
}
function iunlink() {
	theeditor.document.execCommand("unlink",false,null);
	createHTMLfile();
}
function iimage() {
	theeditor.document.execCommand("insertimage",false,prompt("Insert image location"));//I can maybe add browse functions for v2
	createHTMLfile();
}
function iindent() {
	theeditor.document.execCommand("indent",false,null);
	createHTMLfile();
}
function iunindent() {
	theeditor.document.execCommand("outdent",false,null);
	createHTMLfile();
}
function ileft() {
	theeditor.document.execCommand("justifyleft",false,null);
	createHTMLfile();
}
function icenter() {
	theeditor.document.execCommand("justifycenter",false,null);
	createHTMLfile();
}
function iright() {
	theeditor.document.execCommand("justifyright",false,null);
	createHTMLfile();
}
function ijustified() {
	theeditor.document.execCommand("justifyfull",false,null);
	createHTMLfile();
}
function icut() {
	theeditor.document.execCommand("cut",false,null);
	createHTMLfile();
}
function icopy() {
	theeditor.document.execCommand("copy",false,null);
	createHTMLfile();
}
function ipaste() {
	theeditor.document.execCommand("paste",false,null);
	createHTMLfile();
}
function idelete() {
	theeditor.document.execCommand("delete",false,null);
	createHTMLfile();
}
function iundo() {
	theeditor.document.execCommand("undo",false,null);
	createHTMLfile();
}
function iredo() {
	theeditor.document.execCommand("redo",false,null);
	createHTMLfile();
}
function isub() {
	theeditor.document.execCommand("subscript",false,null);
	createHTMLfile();
}
function isup() {
	theeditor.document.execCommand("superscript",false,null);
	createHTMLfile();
}
function istrike() {
	theeditor.document.execCommand("strikethrough",false,null);
	createHTMLfile();
}
function createHTMLfile() {//function that creates the file and updates the button link
	var filelink = null, //the new link
		data = new Blob([window.frames["theeditor"].document.body.innerHTML], {type: "text/html"});//file in form of a .html Blob
	if (data != null) {
		window.URL.revokeObjectURL(data);//if already exists then revoke the url from the old file
	}
	filelink = window.URL.createObjectURL(data);//create new link
	var link = document.getElementById("download");//the a link surrounding the Download button
	link.href = filelink;//href to filelink
	var title = document.getElementById("title").value;//the filename of the document. if no title it will just say the URL name, change in v2
	link.download = title;//actually set the title
	used = true;//if I make the text bold it counts as using the editor, no?
}
