
export const mostViewsSort = (a, b) => {
    return b.views - a.views
} 


export const newestSort = (a, b) => {

    if (!a.uploadedAt) return -1;
    if (!b.uploadedAt) return 1;

    const firstValue = convertTimeToHours(a.uploadedAt)
    const secondValue = convertTimeToHours(b.uploadedAt)

    return firstValue - secondValue;
}
function convertTimeToHours (timeString) {

    let multipleNumber = 0;

    switch ( timeString.slice(timeString.indexOf(" ") + 1, timeString.lastIndexOf(" ")) ) {

        case "year" || "years":
            multipleNumber = 8544;
        break;

        case "month" || "months":
            multipleNumber = 720;
        break;

        case "week" || "weeks":
            multipleNumber = 168;
        break;

        case "day" || "days":
            multipleNumber = 24;
        break;
    
        default:
            multipleNumber = 1;
        break;
    }

    return Number( timeString.slice(0, timeString.indexOf(" ")) ) * multipleNumber;
}