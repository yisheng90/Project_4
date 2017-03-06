var Users = React.createClass({
  render: function() {
    let users = this.props.users.map( (user) => {
     return  <h1> {user.name} </h1>
    })

    return (
      <div>
        {users}
      </div>
    )
  }
});
