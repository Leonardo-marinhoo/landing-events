const event_date = new Date("Dec 12, 2024 19:00:00");
const event_time_stamp = event_date.getTime();

const interval = setInterval(function() {
    const cur_time = new Date();
    const cur_time_stamp = cur_time.getTime();

    const time_left = event_time_stamp - cur_time_stamp;

    const days = Math.floor(time_left / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time_left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time_left % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time_left % (1000 * 60)) / (1000));

    document.querySelector('#counter').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;

    if(time_left <0){
        document.querySelector('#counter').innerHTML = " >>Evento Expirado<<";

    }
},1000);
