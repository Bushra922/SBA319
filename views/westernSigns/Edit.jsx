const React = require('react');
const DefaultLayout = require('../layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Page">      
      {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
          {/* form is not complete we will do that below*/}
        <form action={`/westernSigns/${this.props.westernSign._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={this.props.westernSign.name}/><br/>
          Dates: <input type="number" name="dates"  defaultValue={this.props.westernSign.dates}/><br/>
          Is Ready To Read:
              { this.props.westernSign.readyToRead? <input type="checkbox" name="readyToRead" defaultChecked />: <input type="checkbox" name="readyToRead"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports= Edit;