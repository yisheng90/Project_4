
class TeacherDashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current_tab: 'Course',
      courses: this.props.courses,
      user: this.props.teacher,
      username: this.props.teacher.name,
      course: {
        title: '',
        description: '',
        grade_id: ''
      }
    }
  }
  handleClick (e, prompt) {
    alert(prompt)
    this.setState({
      current_tab: prompt
    })
  }
  handleTitleChange (e) {
    let course = this.state.course
    course.title = e.target.value
    this.setState({
      course: course
    })
  }
  handleDescriptionChange (e) {
    let course = this.state.course
    course.description = e.target.value
    this.setState({
      course: course
    })
  }
  handleGradeChange (e) {
    let course = this.state.course
    course.grade_id = e.target.value
    this.setState({
      course: course
    })
  }
  handleSubmit () {
    alert('submitted')
    alert('haha')
    let that = this

    $.ajax({
      method: 'POST',
      data: {
        course: that.state.course
      },
      url: '/courses',
      success: (res) => {
        let newList = this.state.courses
        newList.push(res)
        that.setState({
          courses: newList,
          current_tab: 'Course',
          course: {
            title: '',
            description: '',
            grade_id: ''
          }
        })
      }
    })
  }
  handleProfileUpdate (e, prompt) {
    alert(prompt)
    let that = this

    $.ajax({
      method: 'PUT',
      data: {
        user: prompt
      },
      url: '/users/' + this.state.user.id,
      success: (res) => {
        let updatedUser = res
        that.setState({
          user: updatedUser,
          username: updatedUser.name,
          current_tab: 'Course',
          course: {
            title: '',
            description: '',
            grade_id: ''
          }
        })
      }
    })
  }
  render () {
    let courses = null
    if (this.state.current_tab === 'Course') {
      courses = <Course courses={this.props.courses} />
    } else if (this.state.current_tab === 'Profile') {
      courses = <Profile user={this.state.user} handleProfileUpdate={(e, prompt) => this.handleProfileUpdate(e, prompt)} />
    } else if (this.state.current_tab === 'New Course') {
      courses = <NewCourse new_course_path={this.props.new_course_path} handleTitleChange={this.handleTitleChange.bind(this)} handleDescriptionChange={this.handleDescriptionChange.bind(this)} handleGradeChange={this.handleGradeChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
    }

    return (
      <div className='ui grid'>
        <div className='row'>
          <div className='four wide column'>
            <h1>{this.state.user.name}</h1>
            <p>Secondary</p>
            <hr />
            <div className='ui items'>
              <div className='item' onClick={(e, prompt) => this.handleClick(e, 'Profile')}>
                <h5>Profile</h5>
              </div>
              <div className='item' onClick={(e, prompt) => this.handleClick(e, 'Course')}>
                <h5>My Courses</h5>
              </div>
              <div className='item' onClick={(e, prompt) => this.handleClick(e, 'New Course')}>
                <h5>New Course</h5>
              </div>
              <div className='item'>
                {this.props.mycourse}
              </div>
              <div className='item'>
                <a href={this.props.new_course_path}>New Course</a>
              </div>
            </div>
          </div>

          {courses}

          <div className='four wide column' />
        </div>
      </div>

    )
  }

}
