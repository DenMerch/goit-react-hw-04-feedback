import css from './Statistics.module.css'
import PropTypes from 'prop-types';
export const Statistics = ({ good,
    neutral,
    bad,
    total,
    positivePercentage }) => {
    return (
        <div>
            <p className={css.green}>Good: {good}</p>
            <p className={css.yellow}>Neutral: {neutral}</p>
            <p className={css.red}>Bad: {bad}</p>
            <p className={css.blue}>Total: {total}</p>
            <p className={css.blue}>Positive feedback: {positivePercentage}%</p>
        </div >
    )
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}


