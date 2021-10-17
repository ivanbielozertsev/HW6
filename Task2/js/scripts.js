const secondsInMinute = 60;
const minutesInHour = 60;
const secondsInHour = secondsInMinute * minutesInHour;
const hoursNumber = prompt('Введите количество часов');
const secondsNumber = secondsInHour * hoursNumber;
alert(`${secondsNumber}`);