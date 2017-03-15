class GradeIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      grades: this.props.grades,
      newInput: null,
      editInput: null,
      editElement: null

    }
  }
  handleDelete (e, prompt) {
    console.log(prompt);
    let that = this

    $.ajax({
      method: 'DELETE',
      url: '/admin/grades/' + prompt.id,
      success: (res) => {
        let newList = this.state.grades
        let index = newList.indexOf(prompt)
        newList.splice(index, 1)
        that.setState({
          grades: newList
        })
      }
    })
  }
  handleClick (e, prompt) {
    this.setState({
      editInput: prompt.grade,
      editElement: prompt
    })
  }
  handleCreateInputChange (e) {
    this.setState({
      newInput: e.target.value
    })
  }
  handleEdit () {
    alert(e.target.value)
    this.setState({
      editInput: e.target.value
    })
  }
  handleSubmit () {
    alert(this.state.newInput)
    let that = this

    $.ajax({
      method: 'POST',
      data: {
        grade: {
          grade: this.state.newInput
        }
      },
      url: '/admin/grades',
      success: (res) => {
        let newList = this.state.grades
        newList.push(res)
        that.setState({
          newInput: null,
          grades: newList
        })
      }
    })
  }
  render () {
    let showItem = this.state.grades.map((grade) => {
      return (
        <tr>
          {grade.grade !== this.state.editInput && <td onClick={(e, prompt) => this.handleClick(e, grade)}>{grade.grade}</td>}
          {grade.grade === this.state.editInput && <td>
            <div className='ui form'>
              <input name='grade' value={this.state.editInput} onChange={() => this.handleEdit()} />
            </div>
            </td>}
          <td onClick={(e, prompt) => handleClick(e, grade)}>{grade.courses.length}</td>
          <td><i className='trash icon' onClick={(e, prompt) => this.handleDelete(e, grade)} /></td>
        </tr>
      )
    })
    return (
      <div className='ui container' >
        <div className='row'>
          <div className='ui breadcrumb row'>
            Profile
            <span className='divider'>/</span>
            <div className='active section'>Grades</div>
          </div>
          <table className='ui celled table'>
            <thead>
              <tr>

                <th>Grade</th>
                <th>No of Courses</th>
                <th />

              </tr>
            </thead>
            <tbody>

              {showItem}

            </tbody>
            <tfoot className='full-width'>
              <tr>
                <th >
                  <div className='ui form'>
                    <input name='grade' placeholder='New Grade' className='ui form' onChange={(e) => this.handleCreateInputChange(e)} />
                  </div>
                </th>
                <th colSpan='2'>
                  <div className='ui right floated small green icon button' onClick={() => this.handleSubmit()}>New Grade</div>
                </th>

              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  }
}
