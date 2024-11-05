document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');

	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'dayGridMonth',
		timeZone: 'Europe/Amsterdam',
		eventTimeFormat: {
			hour: '2-digit',
			minute: '2-digit',
			meridiem: false,
			hour12: false
		},
		events: [
			{
				title: 'Open Dev Mix',
				start: '2024-11-22T17:00:00',
				end: '2024-11-22T22:30:00',
				url: 'https://dutchgame.dev/mix',
				description:
					`Its been some time since the previous Open Dev Mix. After listening to the feedback and support we are hosting it again!
					
					We got a new one!
					🎮 Friday November 22nd is the next Open Dev Mix.


					By hosting Open Dev Mix, we want to provide a space for local game developers and other interested parties to share projects, stories and successes with each other.


					⤵️ Where: Wasknijper in the Blokhuispoort

					🗓️ When: November 22nd from 17:00 to 22:30
					🎉 Why: Meeting new people and having a good time
					💰 Price: Its free
					🥂 What should I bring: Some food or drinks that you would like to share with others (optionally also a game or project you would like to show)`,
			}
		],
		eventClick: function(info) {
			info.jsEvent.preventDefault();
			
			const modal = new bootstrap.Modal('#eventView')

			document.getElementById('modalLabel').innerHTML = info.event.title;
			document.getElementById('modalBody').innerText = info.event.extendedProps.description;
			document.getElementById('modalButton').href = info.event.url;

			modal.show();
		}
	});

	calendar.render();
});