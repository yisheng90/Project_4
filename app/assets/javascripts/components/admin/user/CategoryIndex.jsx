class CategoryIndex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      categories: this.props.categories,
      newInput: null,
      editInput: null,
      editElement: null

    }
  }
  handleDelete(e, prompt) {
    alert(this.state.newInput)
    let that = this

    $.ajax({
      method: 'DELETE',
      url: '/admin/categories/'+prompt.id,
      success: (res) => {
        let newList = this.state.categories
        let index = newList.indexOf(prompt)
        newList.splice(index, 1)
        that.setState({
          categories: newList
        })
      }
    })
  }
  handleClick (e, prompt) {
      this.setState({
        editInput: prompt.category,
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
        category: {
          category: this.state.newInput
        }
      },
      url: '/admin/categories',
      success: (res) => {
        let newList = this.state.categories
        newList.push(res)
        that.setState({
          newInput: null,
          categories: newList
        })
      }
    })
  }
  render () {
    let showItem = this.state.categories.map((cat) => {
      return (
        <tr>
          {cat.category !== this.state.editInput && <td onClick={(e, prompt) => this.handleClick(e, cat)}>{cat.category}</td>}
          {cat.category === this.state.editInput && <td>
            <div className='ui form'>
              <input name='category' value={this.state.editInput} onChange={() => this.handleEdit()} />
            </div>
            </td>}
          <td onClick={(e, prompt)=>handleClick(e, cat)}>{cat.courses.length}</td>
          <td><i className='trash icon' onClick={(e, prompt) => this.handleDelete(e, cat)} /></td>
        </tr>
      )
    })
    return (
      <div className='ui container' >
        <div className='row'>
          <div className='ui breadcrumb row'>
            Profile
            <span className='divider'>/</span>
            <div className='active section'>Categories</div>
          </div>
          <table className='ui celled table'>
            <thead>
              <tr>

                <th>Category</th>
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
                    <input name='category' placeholder='New Category' className='ui form' onChange={(e) => this.handleCreateInputChange(e)} />
                  </div>
                </th>
                <th colSpan='2'>
                  <div className='ui right floated small green icon button' onClick={() => this.handleSubmit()}>New Category</div>
                </th>

              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    )
  }
}
