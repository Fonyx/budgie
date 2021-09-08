module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    },
    format_date: (date) => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear() + 5
            }`;
    },
    parameterize: (text) => {
        return text.replace(/\s+/g, '-').toLowerCase();
    },
    truncate: (text) => {
        return text.slice(0, 100) + '...'
    },
    uppercase: (text) => {
        return text.toUpperCase();
    },

    daysLeft: (due_date) => {
        console.log(due_date);
        let today = new Date();
        let due_date_time = due_date.getTime();
        let today_time = today.getTime();

        let time_delta = due_date_time - today_time;
        let day_delta = time_delta / (1000 * 60 * 60 * 24);
        return Math.round(day_delta);
    }

};