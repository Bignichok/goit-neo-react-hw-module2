import { useState } from 'react';

import Description from '@/components/Description';
import Options from '@/components/Options';
import Feedback from '@/components/Feedback';
import Notification from '@/components/Notification';

const App = () => {
	const [feedback, setFeedback] = useState({
		good: 0,
		neutral: 0,
		bad: 0,
	});

	const updateFeedback = feedbackType => () => {
		setFeedback(feedback => ({ ...feedback, [feedbackType]: (feedback[feedbackType] += 1) }));
	};

	const resetFeedback = () => {
		setFeedback({
			good: 0,
			neutral: 0,
			bad: 0,
		});
	};

	const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
	const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

	return (
		<>
			<Description />
			<Options
				updateFeedback={updateFeedback}
				resetFeedback={resetFeedback}
				totalFeedback={totalFeedback}
			/>
			{totalFeedback > 0 ? (
				<Feedback
					feedback={feedback}
					totalFeedback={totalFeedback}
					positiveFeedback={positiveFeedback}
				/>
			) : (
				<Notification />
			)}
		</>
	);
};

export default App;
