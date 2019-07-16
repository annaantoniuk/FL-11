function formatTime(time) {
	let day = Math.floor(time/3600);
	let hour = Math.floor((time - day*3600)/24);
	let minute = (time - day*3600) - hour*24;
	return day + ' ' + 'day(s)' + ' ' + hour + ' ' + 'hour(s)' + ' ' + minute + ' ' + 'minute(s).';
}
console.log(formatTime(12783));
