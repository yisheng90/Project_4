class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: this.props.questions,
      filteredQuestions: this.props.questions,
      filteredWord: this.props.filteredWord,
      saveQuestion: {
        question: null,
        course_id: this.props.course.id,
        user_id: this.props.user.id
      }
    }
  }
  handleChange (e) {
    let saveQuestion = this.state.saveQuestion
    saveQuestion.question = e.target.value

    this.setState({
      filteredWord: e.target.value,
      saveQuestion: saveQuestion
    })
    console.log('this', this.state.filteredWord)
  }
  handleSubmit (e, prompt) {
    let that = this
    $.ajax({
      method: 'POST',
      data: {
        question: prompt
      },
      url: '/courses/' + prompt.course_id + '/questions',
      success: (res) => {
        alert(res)
        let newList = this.state.questions
        newList.push(res)
        that.setState({
          questions: newList,
          filteredWord: ''
        })
      }
    })
  }
  render () {
    let filteredQuestions = this.state.questions
    let questionData = { question: this.state.filteredWord, course_id: this.props.course.id, user_id: this.props.user.id}
    console.log(questionData)

    if (this.state.filteredWord !== '') {
      filteredQuestions = this.state.questions.filter((question) => {
        return question.question.includes(this.state.filteredWord)
      })
    }

    let showQuestion = null

    if (this.state.questions.length > 0) {
      showQuestion = filteredQuestions.map((question) => {
        return (

          <div className='small comment'>
            <a className='avatar'>
              <img />
            </a>
            <div className='content'>
              <a className='author'>{question.user_id}</a>
              <div className='metadata'>
                <span className='date'>Today at 5:42PM</span>
              </div>
              <div className='text'>
                {question.question}
              </div>
              <div className='actions'>
                <a className='reply'>Reply</a>
              </div>
            </div>
          </div>

        )
      })
    } else {
      showQuestion = 'No Question Yet'
    }

    return (
      <div className='ui grid'>
        <div className='row'>
          <h1>Question</h1>
        </div>
        <div className='ui fitted divider' />
        <div className='row'>
          <div className='ui sixteen wide column'>
            <div className='ui fluid action input'>
              <input type='text' placeholder='Search...' value={this.state.filteredWord} onChange={(e) => this.handleChange(e)} />
              <div className='ui buttons'>
                <button className='ui button'>Search</button>
                <div className='or' />
                <button className='ui positive button' onClick={(e, prompt) => this.handleSubmit(e, questionData)}>New Question</button>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='ui sixteen wide column'>
            <div className='ui fluid threaded comments'>
              {showQuestion}
            </div>
          </div>
        </div>

      </div>
    )
  }
}
