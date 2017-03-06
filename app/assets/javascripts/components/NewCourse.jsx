class NewCourse extends React.Component {
  render () {
    return (
      <div className='eight wide column'>
        <form className='ui form'>
          <div className='field'>
            <label>Title</label>
            <input type='text' name='title' placeholder='Title' onChange={this.props.handleTitleChange} />
          </div>
          <div className='field'>
            <label>Description</label>
            <textarea rows='3' type='text' name='description' placeholder='Description' onChange={this.props.handleDescriptionChange} />
          </div>

          <div className='field'>
            <label>Grade</label>
            <input type='text' name='grade_id' placeholder='Grade' onChange={this.props.handleGradeChange} />
          </div>

          <button className='ui button' type='submit' onClick={this.props.handleSubmit}>Submit</button>
        </form>
      </div>

    )
  }
}
