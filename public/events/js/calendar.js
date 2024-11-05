document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');

	let calendar = new FullCalendar.Calendar(calendarEl, {
		googleCalendarApiKey: 'AIzaSyAqMSEolrwzR3TRbZrtEegEQ8OELp9h6h0',
		events: {
			googleCalendarId: '6279774b7ecc853e5df6857e773a2a3871e5f675b6ee46e13d10ee7b64d5b5d1@group.calendar.google.com'
		},
		initialView: 'dayGridMonth',
		timeZone: 'Europe/Amsterdam',
		eventTimeFormat: {
			hour: '2-digit',
			minute: '2-digit',
			meridiem: false,
			hour12: false
		},
		eventClick: function(info) {
			info.jsEvent.preventDefault();
			
			const modal = new bootstrap.Modal('#eventView')

			document.getElementById('modalLabel').innerHTML = info.event.title;
			document.getElementById('modalBody').innerHTML = info.event.extendedProps.description;
			if(info.event.extendedProps.location != null)
				document.getElementById('modalLocation').innerHTML = info.event.extendedProps.location;
			else
			document.getElementById('modalLocation').innerHTML = "";
			document.getElementById('modalButton').href = info.event.url;

			modal.show();
		}
	});

	calendar.render();
});