import styles from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
	return (
		<ul className={styles.list}>
			<li className={styles.item}>
				<p>Good:</p>
				<p>{feedback.good}</p>
			</li>
			<li className={styles.item}>
				<p>Neutral:</p>
				<p>{feedback.neutral}</p>
			</li>
			<li className={styles.item}>
				<p>Bad:</p>
				<p>{feedback.bad}</p>
			</li>
			<li className={styles.item}>
				<p>Total:</p>
				<p>{totalFeedback}</p>
			</li>
			<li className={`${styles.item} ${styles.positive}`}>
				<p>Positive:</p>
				<p>{positiveFeedback}%</p>
			</li>
		</ul>
	);
};

export default Feedback;
