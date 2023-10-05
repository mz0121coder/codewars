import React, { useState, useEffect } from 'react';

const WORD_LIST_API_URL = 'https://api.frontendexpert.io/api/fe/wordle-words';

export default function Wordle() {
	const [correctWord, setCorrectWord] = useState('');
	const [board, setBoard] = useState([
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	]);
	const [tileClasses, setTileClasses] = useState([
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	]);
	const [guess, setGuess] = useState('');
	const [row, setRow] = useState(0);

	useEffect(() => {
		fetch(WORD_LIST_API_URL)
			.then(response => response.json())
			.then(data => {
				const randomIndex = Math.floor(Math.random() * data.length);
				setCorrectWord(data[randomIndex]);
			});
	}, []);

	useEffect(() => {
		function handleKeyPress(e) {
			if (e.key === 'Backspace' && guess.length > 0)
				setGuess(prevGuess => prevGuess.slice(0, -1));
			if (/^[a-z]$/i.test(e.key) && guess.length <= 5) {
				setGuess(prevGuess => prevGuess + e.key);
				setBoard(prevBoard => {
					const updatedBoard = [...prevBoard];
					updatedBoard[row][guess.length - 1] = e.key;
					return updatedBoard;
				});
			}
			if (e.key === 'Enter' && guess.length >= 5) {
				guess.split('').forEach((char, index) => {
					setTileClasses(prevClasses => {
						const updatedClasses = [...prevClasses];
						if (correctWord[index] === char) {
							updatedClasses[row][index] = 'correct';
						}
						if (correctWord[index] !== char && correctWord.includes(char)) {
							updatedClasses[row][index] = 'close';
						}
						if (!correctWord.includes(char)) {
							updatedClasses[row][index] = 'incorrect';
						}
						return updatedClasses;
					});
				});
				setGuess('');
				setRow(prevRow => prevRow + 1);
			}
		}

		window.addEventListener('keydown', handleKeyPress);
		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [guess, board]);

	return (
		<>
			<h1>{correctWord}</h1>
			<div className='board'>
				{board.map((row, rowIndex) => (
					<div key={rowIndex} className='line'>
						{row.map((tile, tileIndex) => (
							<div
								key={tileIndex}
								className={
									tileClasses[rowIndex][tileIndex] === ''
										? 'tile'
										: 'tile' + ' ' + tileClasses[rowIndex][tileIndex]
								}>
								{tile}
							</div>
						))}
					</div>
				))}
			</div>
		</>
	);
}
