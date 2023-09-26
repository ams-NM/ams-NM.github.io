[[<% tp.date.now("gggg [w]ww", "P-1W", tp.file.title, "gggg [w]ww") %> | Previous Week]]<< | >>[[<% tp.date.now("gggg [w]ww", "P1W", tp.file.title, "gggg [w]ww") %> | Next Week]]

```dataviewjs
const tasks = dv.pages('"Monthly' + '" or "🏡Home.md" or "All Notes/⛔Issues Pending.md"').file.tasks;

let mon = "{{monday:YYYY-MM-DD ddd}}";
dv.table([`[[${mon}]] Tasks` + get_relative_date(mon), "Link", "Status"], tasks
      .filter(t => t.text.includes(mon))
      .map(t => [remove_ending_date(t), t.link, true_or_false(t.completed)]));

let tue = "{{tuesday:YYYY-MM-DD ddd}}";
dv.table([`[[${tue}]] Tasks` + get_relative_date(tue), "Link", "Status"], tasks
      .filter(t => t.text.includes(tue))
      .map(t => [remove_ending_date(t), t.link, true_or_false(t.completed)]));

let wed = "{{wednesday:YYYY-MM-DD ddd}}";
dv.table([`[[${wed}]] Tasks` + get_relative_date(wed), "Link", "Status"], tasks
      .filter(t => t.text.includes(wed))
      .map(t => [remove_ending_date(t), t.link, true_or_false(t.completed)]));

let thu = "{{thursday:YYYY-MM-DD ddd}}";
dv.table([`[[${thu}]] Tasks` + get_relative_date(thu), "Link", "Status"], tasks
      .filter(t => t.text.includes(thu))
      .map(t => [remove_ending_date(t), t.link, true_or_false(t.completed)]));

let fri = "{{friday:YYYY-MM-DD ddd}}";
dv.table([`[[${fri}]] Tasks` + get_relative_date(fri), "Link", "Status"], tasks
      .filter(t => t.text.includes(fri))
      .map(t => [remove_ending_date(t), t.link, true_or_false(t.completed)]));


//***** Helper Func *****//
function get_relative_date(date_str) {
    //console.log('date_str=' + date_str);
    const date_format = 'YYYY-MM-DD';
    let result = [];
    let index = 0;
    result[index++] = ' - ';
    let note_date_str = date_str.split(' ')[0]
    let note_date = moment().format(note_date_str, date_format);
    //console.log('note_date=' + note_date);
    let today = moment().format(date_format);
    //console.log('today=' + today);
    //today = tp.date.now(date_format);
    if (note_date == today) {
        result[index++] = "Today";
    } else {
        //dur = moment(note_date_str, date_format).fromNow();
        //Need '{hours: 0}', otherwise, the next day might return 0.
        let dur = moment({hours: 0}).diff(note_date_str, 'days');
        //console.log("dur=" + dur);
        if (dur > 0) {
            if (dur == 1) {
                result[index++] = "Yesterday";
            } else {
                result[index++] = dur + " Days Ago";
            }
        } else {
            if (dur == -1) {
                result[index++] = "Tomorrow";
            } else {
                result[index++] = Math.abs(dur) + " Days Later";
            }

        }
    }
    //console.log('result=' + result);
    return result.join(' ');
}

function true_or_false(completed) {
	if (completed){
		return '✅';
	}
	else{
		return '🚫';
	}
}

function remove_ending_date(task) {
    const found = task.text.match(/\[\[([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\s\w{3})\]\]/g);
	task.date="";
    if(found) {
		let size = found.length;
		let index = size - 1;
		if (size > 100) {
		    //use the last match
		    index = size - 1;
		}
		task.date = moment(found[index], "YYYY-MM-DD ddd");
		task.text = task.text.replace(found[index], "");
	}
	return task.text;
}

```