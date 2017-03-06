class NavBar extends React.Component {
  render () {
    return (

      <div className='ui top attached menu'>
        <div className='ui dropdown icon item'>
          <i className='wrench icon' />
          <div className='menu'>
            <div className='item'>
              <i className='dropdown icon' />

              <div className='menu'>
                <div className='item'>Document</div>
                <div className='item'>Image</div>
              </div>
            </div>
            <div className='item'>
              <a href={this.props.login_path}>Login</a>
            </div>
            <div className='item'>
              <a href={this.props.logout_path} >Logout</a>
      </div>
            <div className='item'>Edit Permissions</div>
            <div className='divider' />
            <div className='header'>
        Export
      </div>
            <div className='item'>
        Share...
      </div>
          </div>
        </div>
        <div className='right menu'>
          <div className='ui right aligned category search item'>
            <div className='ui transparent icon input'>
              <input className='prompt' type='text' placeholder='Search animals...' />
              <i className='search link icon' />
            </div>
            <div className='results' />
          </div>
        </div>
      </div>

    )
  }
}
