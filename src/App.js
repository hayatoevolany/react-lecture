import { useState } from 'react';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';

function App() {
	const [currentPage, setCurrentPage] = useState(1);

	const CurrentComponent = () => {
		switch (currentPage) {
			case 1:
				return (
					<Page1
					// text="Hello world!"
					/>
				);
			case 2:
				return <Page2 />;
			case 3:
				return <Page3 />;
			case 4:
				return <Page4 />;
			case 5:
				return <Page5 />;
			case 6:
				return <Page6 />;
			case 7:
				return <Page7 />;
			default:
				return <Page1 />;
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<button
					onClick={() =>
						setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))
					}
				>
					Previous Page
				</button>
				<p>Current Page: {currentPage}</p>
				<button onClick={() => setCurrentPage(prev => prev + 1)}>
					Next Page
				</button>
			</header>

			<CurrentComponent />
		</div>
	);
}

export default App;
