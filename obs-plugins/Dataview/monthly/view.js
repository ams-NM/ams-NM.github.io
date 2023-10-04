//const tasks = dv.pages('"Monthly" or "🏡Home.md" or "All Notes/⛔Issues Pending.md"').file.tasks;

const query_pages = [
  '"Monthly"',
  '"🏡Home.md"',
  '"All Notes/⛔Issues Pending.md"',
  '"All Notes/Holidays.md"'
];
const query_str = query_pages.join(' or ');
const tasks = dv.pages(query_str).file.tasks;

//const month = tp.file.title;
//const first_day = input.month + '-01';
//console.log(`first_day= ${first_day}`);
const days_in_month = moment(input.month, "YYYY-MM").daysInMonth();
//console.log(`days in month of ${input.month} = ${days_in_month}`);

for (let i = 1; i < days_in_month + 1; i++) {
  let the_date = i < 10 ? `0${i}` : `${i}`;
  let full_date = input.month + '-' + the_date;
  let m_date = moment(full_date, "YYYY-MM-DD");
  let full_date_str = m_date.format("YYYY-MM-DD ddd");
  //console.log("full_date_str = " + full_date_str);
  dv.table([`[[${full_date_str}]] ` + get_relative_date(full_date), "Link", "Status"], tasks
    .filter(t => t.text.includes(full_date))
    .map(t => [remove_ending_date(t), t.link, true_or_false(t.completed)]));

}

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
    let dur = moment({ hours: 0 }).diff(note_date_str, 'days');
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
  if (completed) {
    return '✅';
  }
  else {
    return '🚫';
  }
}

function remove_ending_date(task) {
  const found = task.text.match(/\[\[([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])\s\w{3})\]\]/g);
  task.date = "";
  if (found) {
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
