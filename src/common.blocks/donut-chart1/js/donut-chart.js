import './jchart.js';
$(function(){
	const myData = [{value: 300},{value: 100, color: '#77dd44'},{value:100, color:'#dd5723'}];
$('#test').jChart({data: myData, appearance: {type: 'donut'}});
});