import React from "react";
import PropTypes from 'prop-types'
import QuizContainer from "./QuizContainer";

const QuizListItem = ({ questions, index, total })  => {

  const questionItem = questions[index];
 
  const { question, answer } = questionItem;
  return (
      
      <QuizContainer
        answer={answer}
        question={question}
        index={index + 1}
        total={total}
      />
      

  )
}

QuizListItem.propTypes = {
  questions: PropTypes.object,
  index: PropTypes.number,
  total: PropTypes.number
}
export default QuizListItem;