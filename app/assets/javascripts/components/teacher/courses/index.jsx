class TeacherCourseIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      courses: this.props.courses
    }
  }
  handleClick (e, prompt) {
    let that = this
    let status = true
    if (prompt.status) {
      status = false
    }

    $.ajax({
      method: 'PATCH',
      data: {
        course: {
          status: status,
          category_id: 1
        }
      },
      url: '/teacher/courses/' + prompt.id,
      success: (res) => {
        let newList = this.state.courses
        let index = newList.indexOf(prompt)
        newList[index] = res
        that.setState({
          courses: newList
        })
      }
    })
  }
  handleDelete (e, prompt) {
    let that = this
    $.ajax({
      method: 'DELETE',
      url: '/teacher/courses/' + prompt.id,
      success: (res) => {
        let newList = this.state.courses
        let index = newList.indexOf(prompt)
        newList.splice(index, 1)
        that.setState({
          courses: newList
        })
      }
    })
  }
  render () {
    let showItem = this.state.courses.map((course) => {
      let status = course.status
      return (
        <tr>
          <td className='collapsing'>
            <div className='ui fitted slider checkbox'>
              { (course.status === true) && <input type='checkbox' checked onClick={(e, prompt) => this.handleClick(e, course)} />}
              { (course.status === false) && <input type='checkbox' onClick={(e, prompt) => this.handleClick(e, course)} /> }
              <label />
            </div>

          </td>
          <td> {course.title} </td>
          <td> {course.grade.grade}</td>
          <td>CATEGORY</td>
          { (course.status === true) && <td>Published</td> }
          { (course.status === false) && <td>Not Publish</td> }
          <td> <a href={'/teacher/courses/' + course.id + '/edit'}><i className='edit icon' /></a> </td>
          <td> <span onClick={(e, prompt) => this.handleDelete(e, course)}><i className='trash icon' /> </span></td>
        </tr>
      )
    })
    return (
      <div className='sixteen wide column'>
        <br />
        <div className='ui breadcrumb row'>
          <a href={'/teacher/dashboard'} className='section'>Profile</a>
          <span className='divider'>/</span>
          <div className='active section'>Courses</div>
        </div>

        <table className='ui compact celled definition table'>
          <thead>
            <tr>
              <th />
              <th>Course Name</th>
              <th>Grade</th>
              <th>Category</th>
              <th>Status</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {showItem}
          </tbody>
          <tfoot className='full-width'>
            <tr>
              <th />
              <th colSpan='6'>
                <div className='i right floated small primary labeled icon button'>
                  <a href='/teacher/courses/new'><i className='file icon' />Add Course</a>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>

    )
  }
}
