const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default.jsx')
class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">
      {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      <form action={`/users/${this.props.user._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.user.name}/><br/>
          email: <input type="email" name="email" defaultValue={this.props.user.email}/><br/>
          DOB: <input type="number" name="DOB"  defaultValue={this.props.user.DOB}/><br/>
          Is Ready To Read:
              { this.props.user.readyToRead? <input type="checkbox" name="readyToRead" defaultChecked />: <input type="checkbox" name="readyToRead"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;