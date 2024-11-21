var feed = document.getElementById('feed');

RefreshFeed();

async function RefreshFeed()
{
	const url = "https://feeds.behold.so/Vjz8jupWFtbcVswslBtW";
	try
	{
		const response = await fetch(url);
		if (!response.ok)
		{
			throw new Error(`Response status: ${response.status}`);
		}

		const data = await response.json();

		var count = data.posts.length;
		if (count > 3)
			count = 3;

		feed.innerHTML = '';

		for (let i = 0; i < count; i++)
		{
			feed.innerHTML += 
				`<a class="col-sm-6 col-lg-4 news-item" href="${data.posts[i].permalink}" target="_blank">
					<img src="${data.posts[i].mediaUrl}"/>
				</a>`;
		} 
	}
	catch (error)
	{
		console.error(error.message);
	}
}