const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('../layout/Default.jsx')
class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">
      {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
      <form action={`/westernSigns/${this.props.westernSigns._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.westernSigns.name}/><br/>
          Dates: <input type="text" name="dates"  defaultValue={this.props.westernSigns.dates}/><br/>
          Is Ready To Read:
              { this.props.westernSigns.readyToRead? <input type="checkbox" name="readyToRead" defaultChecked />: <input type="checkbox" name="readyToRead"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;