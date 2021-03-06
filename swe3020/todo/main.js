var URLS = {
    //톰캣은? prefix:"localhost:8080"
    prefix:"https://kisungkim.github.io/swe3020/todo/",
    groupAdd:"json/groupAdd.json",
    groupList:"json/groupList.json",
    taskAdd:"json/taskAdd.json",
    taskList:"json/taskList.json",
    eachList:"task.html",
    group:"index.html",

    groupSort:"json/groupSort.json",
	groupTheme:"json/groupTheme.json",
	groupShow:"json/groupShow.json",
	groupRemove:"json/groupRemove.json"
  
};

var FILES = {
	groupIcon : {
		sun_icon:"images/sun.png",
		home_icon:"images/home.png",
		blue:"images/list_b.png",
		red:"images/list_o.png",
		green:"images/list_g.png",
	},
	taskIcon : {
		blue:"images/add_b.png",
		green:"images/add_g.png",
		red:"images/add_o.png",
		due:"images/due.png",
		due_out:"images/outdated.png",
		alarm:"images/alarm.png",
		alarm_check:"images/alarm_selected.png",
		repeat:"images/repeat.png",
		repeat_check:"images/repeat_selected.png"
	}
}
function network(command, end, arg) {
    switch(command) {
        case "taskList":
            $.get(URLS.prefix+URLS.taskList, end);
            break;
        case "eachList": 
            location.href = URLS.prefix + URLS.eachList + "?id="  + encodeURIComponent(arg);
            break;
        case "group":
            location.href = URLS.prefix + URLS.group;
            break;
        case "groupAdd":
            $.get(URLS.prefix+URLS.groupAdd,{"name":arg}, end);
            // 서버가 없어도 이런 테스팅이 가능하다
            // data[0].push({"name":arg})
            // end(data)
            // console.log(data)
            break;
        case "taskTheme":            
        case "groupList":
           $.get(URLS.prefix+URLS.groupList, end);
           //end(data)
           break;
        case "toggleComplete":
            $.get(URLS.prefix+URLS.taskList, {"tid":arg.tid, "tdone":arg.tdone}, end);
            break;
        case "taskAdd":
            $.get(URLS.prefix+URLS.groupList, {"tname":arg},end);
            break;

        case "editName" :
			$.get(URLS.prefix+URLS.groupEdit, {"id":arg.id, "name":arg.name}, end);
			break;
		case "sorting" :
			$.get(URLS.prefix+URLS.groupSort, {"now":arg}, end);
			break;
		case "editTheme" :
			$.get(URLS.prefix+URLS.groupTheme, end);
            break;
        case "selectTheme":
            $.get(URLS.prefix+URLS.groupTheme, {"selected":arg}, end)
            break;
		case "showing" :
			$.get(URLS.prefix+URLS.groupShow, {"tid":arg}, end);
			break;
		case "delete" :
			$.get(URLS.prefix+URLS.groupRemove, {"id":arg}, end);
			break;
        default : throw "invalid command";         
    }
}
function colored_icon(type, data) {
    if (type=="groupIcon") {
        switch(data) {
            case "blue" : return FILES.groupIcon.blue;
            case "red"  : return FILES.groupIcon.red;
            case "green": return FILES.groupIcon.green;		
        }
    }
    else if (type=="taskIcon") {
        switch(data) {
            case "blue" : return FILES.taskIcon.blue;
            case "red"  : return FILES.taskIcon.red;
            case "green": return FILES.taskIcon.green;		
        }
    }
}













