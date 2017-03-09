class CourseDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current_tab: 'QA',
      questions: this.props.questions,
      course: this.props.course,
      filteredWord: ''
    }
  }
  handleTabClick (e, tab) {
    this.setState({
      current_tab: tab
    })
  }
  render () {
    let showItem = null
    console.log(this.state.questions)
    if (this.state.current_tab === 'QA') {
      showItem = <Question questions={this.state.questions} course={this.state.course} user={this.props.user} handleUpdate={this.handleUpdate} handleChange={this.handleChange} filteredWord={this.state.filteredWord} />
    } else if (this.state.current_tab === 'lesson') {
      showItem = <Lessons course={this.state.course} />
    }

    return (
      <div className='ui grid'>
        <div className='row'>
          <div className='ui two item menu'>
            <a className='item' onClick={(e, tab) => this.handleTabClick(e, 'QA')}>Q/A</a>
            <a className='item' onClick={(e, tab) => this.handleTabClick(e, 'lesson')} >Lessons</a>
          </div>
        </div>

        <div className='ui twelve wide column centered grid'>
          {showItem}
        </div>

      </div>
    )
  }
}
