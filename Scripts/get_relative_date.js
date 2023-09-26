function get_relative_date(date_str) {
    console.log('date_str=' + date_str);
    const date_format = 'YYYY-MM-DD';
    let result = [];
    let index = 0;
    result[index++] = '#';
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
    console.log('result=' + result);
    return result.join(' ');
}

module.exports = get_relative_date;
