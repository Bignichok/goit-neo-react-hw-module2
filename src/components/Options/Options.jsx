import styles from './Options.module.css';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
	return (
		<ul className={styles.list}>
			<li>
				<button className={styles.button} onClick={updateFeedback('good')}>
					Good
				</button>
			</li>
			<li>
				<button className={styles.button} onClick={updateFeedback('neutral')}>
					Neutral
				</button>
			</li>
			<li>
				<button className={styles.button} onClick={updateFeedback('bad')}>
					Bad
				</button>
			</li>
			{!!totalFeedback && (
				<li>
					<button className={`${styles.button} ${styles.reset}`} onClick={resetFeedback}>
						Reset
					</button>
				</li>
			)}
		</ul>
	);
};

export default Options;
