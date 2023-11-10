import { useState } from 'react';

export const useQuote = () => {
	const [quote, setQuote] = useState({
		content: '',
		author: '',
	});
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetchQuote = async () => {
		setError(false);
		setIsLoading(true);

		try {
			const res = await fetch('https://api.quotable.io/random');

			if (res.ok) {
				const data = await res.json();

				setIsLoading(false);

				setQuote({
					content: data.content,
					author: data.author,
				});
			} else {
				setIsLoading(false);
				setError(true);
			}
		} catch (err) {
			setIsLoading(false);
			setError(true);
		}
	};

	return { quote, isLoading, error, fetchQuote };
};
