import css from "./Feedback.module.css"
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ onLeaveFeedback, options }) => {

    return (
        <>
            {options.map(option => {
                return (< button key={option} className={css.button} type="button"
                    onClick={onLeaveFeedback} name={option}>{option}</button>)
            })}
        </>
    )
}
FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,

}

