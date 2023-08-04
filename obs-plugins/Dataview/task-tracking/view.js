//**** Helper Functions -Start ****// 
const findDated = (task, look_for_all)=>{
	if( look_for_all || !task.completed ) {
		//task.link = " " + "[[" + task.path + "|*]]"; 
		task.date="";
		const found = task.text.match(/\[\[([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\s\w{3})\]\]/g);
		if(found) {
		    let size = found.length;
		    let index = size - 1;
		    if (size > 100) {
		        //use the last match
		        index = size - 1;
		    }
			task.date = moment(found[index], "YYYY-MM-DD ddd");
			//task.text = task.text.replace("[[" +  found[index] + "]]", "");
			task.text = task.text.replace(found[index], "");
		}
		return true;
	}
}

function get_month_file(){
    // Exmples: '1' - Last month; '2' - The month before; '3' - ...etc.
     // Default: current month
    var months_before = 0;
	var result = "Monthly/" + moment().subtract(months_before, 'months').format("YYYY-MM") + ".md";
	//console.log("get_month_file()=" + result);
	return result;
}

function get_date_link(date) {
	return "[[" + date.format("YYYY-MM-DD ddd") + "]]";
}

function is_current_week(date) {
    if (!date){
        return false;
    }
	var this_week = moment().week();
	var the_week = date.week();
	//console.log("Week numbers: " + this_week + ";" + the_week);
	return this_week == the_week;
}

function is_after_current_week(date) {
    if (!date){
        return false;
    }
	var this_week = moment().week();
	var the_week = date.week();
	//console.log("Week numbers: " + this_week + ";" + the_week);
	return the_week > this_week;
}

function compare_to_today(a_date){
//Ref doc: https://momentjs.com/docs/#/query/is-before/
	var today = moment();
	var result = 0;
	if (a_date.isBefore(today, 'day')){
		result = -1;
	}
	else if (a_date.isAfter(today, 'day')){
	    result = 1;
	}
	//console.log("compare: " + a_date + ";" + today + "=" + result);
	return result;
}

const true_or_false = (completed)=>{
	if (completed){
		return '✅';
	}
	else{
		return '🚫';
	}
}

////////////////  Page Sources ////////////////
const query_pages = [
        '"' + get_month_file() + '"',
        '"🏡Home.md"',
        '"All Notes/⛔Issues Pending.md"',
        '"All Notes/Holidays.md"'
      ];
const query_str = query_pages.join(' or ');
////////////////  Incomplete Tasks ////////////////
//const incomplete_tasks = dv.pages(get_month_file() + '" or "🏡Home.md" or "All Notes/⛔Issues Pending.md"').file.tasks.where(t => findDated(t, false));
//const incomplete_tasks = dv.pages(query_str).file.tasks.where(t => findDated(t, false));
////////////////  All Task ////////////////
//const tasks = dv.pages(get_month_file() + '" or "🏡Home.md" or "All Notes/⛔Issues Pending.md"').file.tasks.where(t => findDated(t, true));
const tasks = dv.pages(query_str).file.tasks.where(t => findDated(t, true));

//**** Helper Functions -End ****// 

//// ~~~~ Tables -START ~~~~////
dv.header(2, '[[' + get_month_file() + ']]');

dv.header(2,"Overdue");
dv.table(["Status", "Task", "Link", "Due Date"], tasks//incomplete_tasks
	.filter(t=> !t.completed && t.date && compare_to_today(t.date) < 0)
	.sort(t => t.date)
	.sort(t=>t.completed)
	.map(t=>[true_or_false(t.completed), t.text, t.link, get_date_link(t.date)])
);

dv.header(2,"Today - " + moment().format("YYYY-MM-DD ddd"));
dv.table(["Status", "Task", "Link", "Due Date"], tasks
	.filter(t=> t.date && compare_to_today(t.date) == 0)
	.sort(t=>t.date)
	.sort(t=>t.completed)
	.map(t=>[true_or_false(t.completed), t.text, t.link, get_date_link(t.date)])
);

dv.header(2,"Current Week");
dv.table(["Status", "Task", "Link", "Due Date"], tasks
	.filter(t=> is_current_week(t.date))
	.sort(t=>t.date)
	.sort(t=>t.completed)
	.map(t=>[true_or_false(t.completed), t.text, t.link, get_date_link(t.date)])
);

dv.header(2,"Scheduled");
dv.table(["Status", "Task", "Link", "Due Date"], tasks
	//.filter(t=> moment(t.date).isAfter(moment(),"day"))
	.filter(t=> is_after_current_week(t.date))
	.sort(t=>t.date)
	.sort(t=>t.completed)
	.map(t=>[true_or_false(t.completed), t.text, t.link, get_date_link(t.date)])
);

dv.header(2,"No Plan Yet...");
dv.table(["Task", "Link", "Date"], tasks
    .filter(t=> !t.completed && !t.date)
	//.filter(t=> !t.date)
	.sort(t=>t.text)
	.map(t=>[t.text, t.link, get_date_link(t.date)])
);

dv.header(1,"All Tasks");
dv.table(["Status", "Task", "Link", "Due Date"], tasks
	.sort(t=>t.date)
	.sort(t=>t.completed)
	.map(t=>[true_or_false(t.completed), t.text, t.link, get_date_link(t.date)])
);
