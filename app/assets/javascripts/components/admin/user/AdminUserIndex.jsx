class AdminUserIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: this.props.users
    }
  }
  handleDelete (e, prompt) {
    let that = this
    $.ajax({
      method: 'DELETE',
      url: '/admin/users/' + prompt.id,
      success: (res) => {
        let newList = this.state.users
        let index = newList.indexOf(prompt)
        newList.splice(index, 1)
        that.setState({
          users: newList
        })
      }
    })
  }

  render () {
    console.log('usersList', this.props.users)
    let showItem = this.props.users.map((user) => {
      return (
        <tr>
          <td className='collapsing'>
            <div className='ui fitted slider checkbox'>
              { (user.status === true) && <input type='checkbox' checked onClick={(e, prompt) => this.props.handleChangeUserStatus(e, user)} />}
              { (user.status === false) && <input type='checkbox' onClick={(e, prompt) => this.props.handleChangeUserStatus(e, user)} /> }
              <label />
            </div>
          </td>
          <td> {user.name} </td>
          <td>{user.created_at}</td>
          <td>{user.email}</td>
          <td>{user.user_type}</td>
          {user.status === true && <td className='positive'>Active</td>}
          {user.status === false && <td className='error'><i className='attention icon' />Suspended</td>}
          <td><i className='trash icon' onClick={(e, prompt) => this.handleDelete(e, user)} /></td>
        </tr>
      )
    })
    return (
      <div className='ui container'>
        <div className='row'>
          <div className='ui breadcrumb row'>
            Profile
            <span className='divider'>/</span>
            <div className='active section'>Courses</div>
          </div>
          <table className='ui compact celled definition table'>
            <thead>
              <tr>
                <th />
                <th>Name</th>
                <th>Registration Date</th>
                <th>E-mail address</th>
                <th>User Type</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>

              {showItem}

            </tbody>
            <tfoot className='full-width'>
              <tr>
                <th />
                <th colSpan='5' />
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  }
}
