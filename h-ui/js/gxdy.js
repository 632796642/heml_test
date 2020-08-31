function mshbox(k) {
	var input = document.getElementsByName("chk");
	var x = 0;
	for(var i = 0; i < input.length; i++) {
		if(input[i].checked == true) {
			x++;
		}
	}
	if(x == 0) {
		alert("至少勾选一项");
		return false;
	}else{
		k();
	}
}

function lswj_inputList() {
	var a = document.getElementsByName("chk");
	var tb = a[0].parentElement.parentElement.parentElement.parentElement.parentElement;
	var rows = tb.rows;
	var shuzu = [];
	var shuzue = [];
	var s = 0;
	for(var i = 0; i < rows.length; i++) {
		for(var j = 1; j < 9; j++){
			shuzue[s] = rows[i].cells[j].innerHTML;
			s++;
		}
	}
	shuzu += shuzue;
	shuzu = shuzu.split(",");
	var myJsonString = JSON.stringify(shuzu);
	var g = document.getElementById("test_table2");
	var k = document.getElementById("jk");
	var n = JSON.parse(myJsonString);
	var table = "<table><thead><tr><th>入库单号</th><th>产品型号</th><th>产品名称</th><th>入库数量</th><th>产品单位</th><th>入库时间</th><th>入库人员</th><th>备注</th></tr></thead>";
	var p = 0;
	for(var j = 0; j < rows.length; j++) {
		table+="<tr><td>"+n[p]+"</td><td>"+n[p+1]+"</td><td>"+n[p+2]+"</td><td>"+n[p+3]+"</td><td>"+n[p+4]+"</td><td>"+n[p+5]+"</td><td>"+n[p+6]+"</td><td>"+n[p+7]+"</td></tr>";
		p += 8;
	}
	table += "</table>";
	g.innerHTML = table;
	method5('test_table2');
}

function prepareList() {
	var a = document.getElementsByName("chk");
	var rows = a[0].parentElement.parentElement.parentElement.parentElement.parentElement.rows;
	var str = 0;
	var shuzu = [];
	var shuzue = [];
	var s = 0;
	for(var i = 0; i < a.length; i++) {
		if(a[i].checked) {
			str += 1;
		}
	}
	for(var i = 0; i < a.length; i++) {
		if(a[i].checked) {
			var row = a[i].parentElement.parentElement.parentElement.rowIndex;
			for(var h = 1; h < 10; h++) {
				shuzue[s] = rows[row].cells[h].innerHTML;
				s++;
			}
		}
	}
	shuzu += shuzue;
	shuzu = shuzu.split(",");
	var myJsonString = JSON.stringify(shuzu);
	var g = document.getElementById("test_table2");
	var k = document.getElementById("jk");
	var n = JSON.parse(myJsonString);
	var table = "<table><thead><tr><th>备货单号</th><th>入库单号</th><th>产品型号</th><th>产品名称</th><th>备货数量</th><th>产品单位</th><th>备注时间</th><th>备货人员</th><th>备注</th></tr></thead>";
	var p = 0;
	for(var j = 0; j < str; j++) {
		table+="<tr><td>"+n[p]+"</td><td>"+n[p+1]+"</td><td>"+n[p+2]+"</td><td>"+n[p+3]+"</td><td>"+n[p+4]+"</td><td>"+n[p+5]+"</td><td>"+n[p+6]+"</td><td>"+n[p+7]+"</td><td>"+n[p+8]+"</td></tr>";
		p += 9;
	}
	table += "</table>";
	g.innerHTML = table;
	method5('test_table2');

}

function outputList() {
	var a = document.getElementsByName("chk");
	var rows = a[0].parentElement.parentElement.parentElement.parentElement.parentElement.rows;
	var str = 0;
	var shuzu = [];
	var shuzue = [];
	var s = 0;
	for(var i = 0; i < a.length; i++) {
		if(a[i].checked) {
			str += 1;
		}
	}
	for(var i = 0; i < a.length; i++) {
		if(a[i].checked) {
			var row = a[i].parentElement.parentElement.parentElement.rowIndex;
			for(var h = 1; h < 10; h++) {
				shuzue[s] = rows[row].cells[h].innerHTML;
				s++;
			}
		}
	}
	shuzu += shuzue;
	shuzu = shuzu.split(",");
	var myJsonString = JSON.stringify(shuzu);
	var g = document.getElementById("test_table2");
	var k = document.getElementById("jk");
	var n = JSON.parse(myJsonString);
	var table = "<table><thead><tr><th>出库单号</th><th>入库单号</th><th>产品型号</th><th>产品名称</th><th>出库数量</th><th>产品单位</th><th>出库时间</th><th>出库人员</th><th>备注</th></tr></thead>";
	var p = 0;
	for(var j = 0; j < str; j++) {
		table+="<tr><td>"+n[p]+"</td><td>"+n[p+1]+"</td><td>"+n[p+2]+"</td><td>"+n[p+3]+"</td><td>"+n[p+4]+"</td><td>"+n[p+5]+"</td><td>"+n[p+6]+"</td><td>"+n[p+7]+"</td><td>"+n[p+8]+"</td></tr>";
		p += 9;
	}
	table += "</table>";
	g.innerHTML = table;
	method5('test_table2');

}

function goodsList() {
	var a = document.getElementsByName("chk");
	var rows = a[0].parentElement.parentElement.parentElement.parentElement.parentElement.rows;
	var str = 0;
	var shuzu = [];
	var shuzue = [];
	var s = 0;
	for(var i = 0; i < a.length; i++) {
		if(a[i].checked) {
			str += 1;
		}
	}
	for(var i = 0; i < a.length; i++) {
		if(a[i].checked) {
			var row = a[i].parentElement.parentElement.parentElement.rowIndex;
			for(var h = 1; h < 8; h++) {
				shuzue[s] = rows[row].cells[h].innerHTML;
				s++;
			}
		}
	}
	shuzu += shuzue;
	shuzu = shuzu.split(",");
	var myJsonString = JSON.stringify(shuzu);
	var g = document.getElementById("test_table2");
	var k = document.getElementById("jk");
	var n = JSON.parse(myJsonString);
	var table = "<table><thead><tr><th>入库单号</th><th>产品型号</th><th>产品名称</th><th>实时库存</th><th>产品单位</th><th>代发货数</th><th>备注</th></tr></thead>";
	var p = 0;
	for(var j = 0; j < str; j++) {
		table+="<tr><td>"+n[p]+"</td><td>"+n[p+1]+"</td><td>"+n[p+2]+"</td><td>"+n[p+3]+"</td><td>"+n[p+4]+"</td><td>"+n[p+5]+"</td><td>"+n[p+6]+"</td></tr>";
		p += 7;
	}
	table += "</table>";
	g.innerHTML = table;
	method5('test_table2');

}

function inputList() {
	var a = document.getElementsByName("chk");
	var rows = a[0].parentElement.parentElement.parentElement.parentElement.parentElement.rows;
	var str = 0;
	var shuzu = [];
	var shuzue = [];
	var s = 0;
	for(var i = 0; i < a.length; i++) {
		if(a[i].checked) {
			str += 1;
		}
	}
	for(var i = 0; i < a.length; i++) {
		if(a[i].checked) {
			var row = a[i].parentElement.parentElement.parentElement.rowIndex;
			for(var h = 1; h < 9; h++) {
				shuzue[s] = rows[row].cells[h].innerHTML;
				
				s++;
			}
		}
	}
	shuzu += shuzue;
	shuzu = shuzu.split(",");
	var myJsonString = JSON.stringify(shuzu);
	var g = document.getElementById("test_table2");
	var k = document.getElementById("jk");
	var n = JSON.parse(myJsonString);
	var table = "<table><thead><tr><th>入库单号</th><th>产品型号</th><th>产品名称</th><th>入库数量</th><th>产品单位</th><th>入库时间</th><th>入库人员</th><th>备注</th></tr></thead>";
	var p = 0;
	for(var j = 0; j < str; j++) {
		table+="<tr><td>"+n[p]+"</td><td>"+n[p+1]+"</td><td>"+n[p+2]+"</td><td>"+n[p+3]+"</td><td>"+n[p+4]+"</td><td>"+n[p+5]+"</td><td>"+n[p+6]+"</td><td>"+n[p+7]+"</td></tr>";
		p += 8;
	}
	table += "</table>";
	g.innerHTML = table;
	method5('test_table2');

}

//	打印表格
var idTmr;

function getExplorer() {
	var explorer = window.navigator.userAgent;
	//ie  
	if(explorer.indexOf("MSIE") >= 0) {
		return 'ie';
	}
	//firefox  
	else if(explorer.indexOf("Firefox") >= 0) {
		return 'Firefox';
	}
	//Chrome  
	else if(explorer.indexOf("Chrome") >= 0) {
		return 'Chrome';
	}
	//Opera  
	else if(explorer.indexOf("Opera") >= 0) {
		return 'Opera';
	}
	//Safari  
	else if(explorer.indexOf("Safari") >= 0) {
		return 'Safari';
	}
}

function method5(tableid) {
	if(getExplorer() == 'ie') {
		var curTbl = document.getElementById(tableid);
		var oXL = new ActiveXObject("Excel.Application");
		var oWB = oXL.Workbooks.Add();
		var xlsheet = oWB.Worksheets(1);
		var sel = document.body.createTextRange();
		sel.moveToElementText(curTbl);
		sel.select();
		sel.execCommand("Copy");
		xlsheet.Paste();
		oXL.Visible = true;

		try {
			var fname = oXL.Application.GetSaveAsFilename("Excel.xls",
				"Excel Spreadsheets (*.xls), *.xls");
		} catch(e) {
			print("Nested catch caught " + e);
		} finally {
			oWB.SaveAs(fname);
			oWB.Close(savechanges = false);
			oXL.Quit();
			oXL = null;
			idTmr = window.setInterval("Cleanup();", 1);
		}

	} else {
		tableToExcel(tableid)
	}
}

function Cleanup() {
	window.clearInterval(idTmr);
	CollectGarbage();
}
var tableToExcel = (function() {
	var uri = 'data:application/vnd.ms-excel;base64,',
		template = '<html><head><meta charset="UTF-8"></head><body><table  border="1">{table}</table></body></html>',
		base64 = function(
			s) {
			return window.btoa(unescape(encodeURIComponent(s)))
		},
		format = function(s, c) {
			return s.replace(/{(\w+)}/g, function(m, p) {
				return c[p];
			})
		}
	return function(table, name) {
		if(!table.nodeType)
			table = document.getElementById(table)
		var ctx = {
			worksheet: name || 'Worksheet',
			table: table.innerHTML
		}
		window.location.href = uri + base64(format(template, ctx))
	}
})()