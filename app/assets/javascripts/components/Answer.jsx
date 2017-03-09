class Answer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      answers: [],
      inputValue: '',
      users: []
    }
  }
  componentDidMount () {
    $.ajax({
      method: 'GET',
      url: '/courses/' + this.props.question.course_id + '/questions/' + this.props.question.id + '/answers',
      success: (res) => {
        this.setState({
          answers: res.answers,
          users: res.users,
          isLoading: false
        })
      }
    })
  }
  handleAnswerChange (e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleSubmitAnswer (e) {
    let that = this
    console.log('that', that)
    console.log('this', this)
    $.ajax({
      method: 'POST',
      data: {
        answer: {
          answer: that.state.inputValue,
          question_id: that.props.question.id
        }
      },
      url: '/courses/' + that.props.question.course_id + '/questions/' + that.props.question.id + '/answers',
      success: (res) => {
        let newList = this.state.answers
        newList.push(res.answer)
        let userList = this.state.users
        userList.push(res.user)
        that.setState({
          answers: newList,
          inputValue: ''
        })
      }
    })
  }
  render () {
    let showItem = <h1>Loading</h1>
    if (this.state.isLoading === false) {
      showItem = this.state.answers.map((answer) => {
        let user = this.state.users[this.state.answers.indexOf(answer)]
        return (
          <div className='ui teal message'>
            <div className='content'>
              <a className='author lift aligned'>{answer.answer}</a>
            
              <div className='text'>
                {user.name}
              </div>
            </div>
          </div>
        )
      })
    }
    return (
      <div>
        <hr />
        {showItem}
        <form className='ui reply form'>
          <div className='field'>
            <textarea rows='3' value={this.state.inputValue} onChange={(e) => this.handleAnswerChange(e)} />
          </div>
          <div className='ui blue labeled submit icon button' onClick={(e) => this.handleSubmitAnswer(e)}>
            <i className='icon edit' /> Add Reply
        </div>
        </form>
      </div>
    )
  }
}
