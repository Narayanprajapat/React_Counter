import React, { useState } from 'react';
import './style.css';
const App = () => {
	const [count, setcount] = useState(0);

	return (
		<div className='body'>
			<div className='content'>
				<h1>This is counter App</h1>
				<h2>Value Of Count {count}</h2>
				<div className='button'>
					<button className='btn inc' onClick={() => (count < 10 ? setcount(count + 1) : '')}>
						Increment
					</button>
					<button className='btn' onClick={() => setcount(0)}>
						Reset
					</button>
					<button className='btn' onClick={() => (count > 0 ? setcount(count - 1) : '')}>
						Decrement
					</button>
				</div>
			</div>
		</div>
	);
};
export default App;
