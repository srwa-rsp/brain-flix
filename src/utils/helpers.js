export function getCurrentDate(timestamp = Date.now()) {
    const today = new Date(timestamp);
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const year = today.getFullYear();
  
    return `${day}/${month}/${year}`;
}

export function getTimeStamp(timestamp){
    const today = Date.now()
    const timeDifference =  Math.floor((today - timestamp) / 1000);

    if(timeDifference < 60){
        return "a few seconds ago..."
    }
    else if (timeDifference < 3600) { // less than an hour
        const minutes = timeDifference / 60;
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDifference < 86400) { // less than a day
        const hours = Math.floor(timeDifference / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (timeDifference < 2592000) { // less than a month (30 days)
        const days = Math.floor(timeDifference / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (timeDifference < 31536000) { // less than a year
        const months = Math.floor(timeDifference / 2592000);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else { // more than a year
        const years = Math.floor(timeDifference / 31536000);
        return `${years} year${years > 1 ? 's' : ''} ago`;
    }
}
