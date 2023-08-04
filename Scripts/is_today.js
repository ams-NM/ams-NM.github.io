function is_today(tp, date_str){
    today = tp.date.now("YYYY-MM-DD ddd")
    if (date_str == today) {
        return "Today"
    }
    return ""
}

module.exports = is_today;
