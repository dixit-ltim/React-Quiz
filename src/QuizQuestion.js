import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {

  render() {
    const handleClick = (buttonText) => {
      if (buttonText === this.props.quiz_question.answer) {
        this.props.showNextQuestionHandler();
      }
    }

    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map(
              (answer_option, index) => 
                <QuizQuestionButton key={index} button_text={answer_option} clickHandler = {handleClick.bind(this)}/>
              )
            }
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion;