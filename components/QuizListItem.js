import React from "react";
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

export default QuizListItem;