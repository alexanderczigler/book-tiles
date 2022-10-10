<script>
	const API_URL = 'http://localhost:3000';

	let books = [];

	const fetchBooks = async () => {
		try {
			const response = await fetch(`${API_URL}/books`);
			books = await response.json();
		} catch (error) {
			console.error(error);
		}
	};

	fetchBooks();
</script>

<h1>📚 Book Tiles</h1>
{#each books as book}
	<div class="cover">
		<img src={book.cover} alt="{book.title} by {book.author}" />
	</div>
{/each}

<style>
	.cover {
		/* width: 300px;
		height: 300px;
		border-radius: 4px;
		overflow: hidden;
		background-color: #303030; */
	}
	.cover img {
		max-width: 300px;
		max-height: 300px;
		margin: auto;
		display: block;
		box-shadow: 5px 10px #c0c0c0;
	}
</style>
