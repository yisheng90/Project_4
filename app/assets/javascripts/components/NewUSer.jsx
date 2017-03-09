class NewUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        name: null,
        email: null,
        user_type: 'admin',
        grade_id: 1
      }
    }
  }
  handleChange (e, prompt) {
    let userData = this.state.user
    userData[prompt] = e.target.value
    this.setState({
      user: userData
    })
    console.log(this.state.user)
  }
  handleCreateUser() {
    let that = this
    $.ajax({
      method:'POST',
      data: {
        user: this.state.user
      },
      url: '/admin/users',
      success:(res) => {
        that.setState({

        })
      }
    })
  }
  render () {
    let grades = this.props.grades.map((grade) => {
      return (
        <option value={grade.id}>{grade.grade}</option>
      )
    })
    return (

      <div className='ui ten wide column centered grid'>
        <div className='ui form ten wide column'>
          <div className='field'>
            <label>Name</label>
            <input name='name' placeholder='Name' onChange={(e, prompt) => this.handleChange(e, 'name')} />
          </div>

          <div className='field'>
            <label>Email</label>
            <input name='email' type='email' placeholder='Email' onChange={(e, prompt) => this.handleChange(e, 'email')} />
          </div>

          <div className='field'>
            <label>User Type</label>
            <select multiple='' class='ui dropdown' onChange={(e, prompt) => this.handleChange(e, 'user_type')}>
              <option value='admin'>Admin</option>
              <option value='teacher'>Teacher</option>
              <option value='student'>Student</option>
            </select>
          </div>

          <div className='field'>
            <label>Grade</label>
            <select multiple='' class='ui dropdown' onChange={(e, prompt) => this.handleChange(e, 'grade_id')}>
              {grades}
            </select>
          </div>

          <button className='ui button primary' onClick={this.handleCreateUser.bind(this)}>Add User</button>
        </div>
      </div>
    )
  }
}
