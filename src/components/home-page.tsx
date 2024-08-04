import { Link } from "wouter";

export default function HomePage() {
	return (
		<div data-testid="home-page">
			<h1>Welcome to my website!</h1>
			<p>Here you can find all sorts of interesting things.</p>
			<Link href="/count">Count</Link>
		</div>
	);
}
