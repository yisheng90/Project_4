
class App extends React.Component {
  render () {
    return (
      <Router history={History}>
        <Route path='/' component={CourseDetails}>
          <IndexRoute component={Question} />
        </Route>
      </Router>
    )
  }
}
