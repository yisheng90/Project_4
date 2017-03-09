class AdminDashboardSidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: this.props.users,
      current_tab: 'all',
      current_page: this.props.current_page,
      usersList: this.props.users,
      style: {
        display: 'none',
        zIndex: 99999
      }
    }
  }
  handleChangeUserTab (e, prompt) {
    this.setState({
      current_tab: prompt
    })
  }
  handleChangeUserStatus (e, prompt) {
    let that = this

    console.log('that', that)
    console.log('this', this)
    let status = true
    if (prompt.status === true) {
      status = false
    }
    $.ajax({
      method: 'PATCH',
      data: {
        user: {
          status: status
        }
      },
      url: '/admin/users/' + prompt.id,
      success: (res) => {
        let newList = that.state.users
        let index = newList.indexOf(prompt)
        newList[index] = res
        this.setState({
          users: newList
        })
      }
    })
  }
  handleDashBoard () {
    let style = this.state.style
    if (style.display === 'none') {
      style.display = 'block'
    } else {
      style.display = 'none'
    }
    this.setState({
      style: style
    })
  }
  handleCloseDashBoard () {
    let style = this.state.style
    style.display = 'none'
    this.setState({
      style: style
    })
  }
  render () {
    let userPage = this.props.current_page
    let usersList = []
    if (this.state.current_tab === 'active') {
      usersList = this.state.users.filter((user) => {
        console.log(user.status === true)
        if (user.status === true) {
          return user
        }
      })
    } else if (this.state.current_tab === 'suspended') {
      usersList = this.state.users.filter((user) => {
        console.log(user.status === false)
        if (!user.status) {
          return user
        }
      })
    } else {
      usersList = this.state.users
    }
    console.log(usersList)
    return (
      <div>
        <div className='ui menu_toggle button black' onClick={this.handleDashBoard.bind(this)} >
          <h1><i className='user icon' /></h1>
        </div>
        <div className='ui vertical menu dashboard' style={this.state.style} >

          <div className='item'>
            <div className='header'>User</div>
            <div className='menu'>
              {this.state.current_page === 'user' && <a className='item active' href='/admin/users'>All User</a>}
              {this.state.current_page !== 'user' && <a className='item' href='/admin/users'>All User</a>}
              <a href='/admin/users/new' className='item'>New User</a>
            </div>
          </div>
          <div className='item'>
            <div className='header'>Category</div>
            <div className='menu'>
              <a className='item' href='/admin/categories'>All Category</a>
            </div>
          </div>
          <div className='item'>
            <div className='header'>Grade</div>
            <div className='menu'>
              <a className='item'>All Grades</a>
            </div>
          </div>
        </div>
        <div className='ui stackable container' onClick={this.handleCloseDashBoard.bind(this)}>
          { this.state.current_page === 'user' && <div className='ui secondary pointing menu'>
            {this.state.current_tab === 'all' && <a className='item active' onClick={(e, prompt) => this.handleChangeUserTab(e, 'all')}>All User</a>}
            {this.state.current_tab !== 'all' && <a className='item' onClick={(e, prompt) => this.handleChangeUserTab(e, 'all')}>All User</a>}
            {this.state.current_tab === 'active' && <a className='item active' onClick={(e, prompt) => this.handleChangeUserTab(e, 'active')}>Active</a>}
            {this.state.current_tab !== 'active' && <a className='item' onClick={(e, prompt) => this.handleChangeUserTab(e, 'active')}>Active</a>}
            {this.state.current_tab === 'suspended' && <a className='item active' onClick={(e, prompt) => this.handleChangeUserTab(e, 'suspended')}>Suspended</a>}
            {this.state.current_tab !== 'suspended' && <a className='item' onClick={(e, prompt) => this.handleChangeUserTab(e, 'suspended')}>Suspended</a>}

          </div>}
        </div>
        <div class='ui segment'>
          <p />
        </div>

        { this.state.current_page === 'user' && <AdminUserIndex users={usersList} handleChangeUserStatus={this.handleChangeUserStatus.bind(this)} />}
        { this.state.current_page === 'new' && <NewUser users={usersList} grades={this.props.grades} user_type={this.props.user_type} />}
        { this.state.current_page === 'cat' && <CategoryIndex categories={this.props.categories} />}
      </div>

    )
  }
}
