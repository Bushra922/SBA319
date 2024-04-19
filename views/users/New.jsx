const React = require('react');
const DefaultLayout = require('../layout/Default')
class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New User'}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/users' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Email: <input type="email" name="email" /><br />
                    DOB: < input type="number" name="DOB"/> <br />
                    Is Ready to Read: <input type="checkbox" name="readyToRead"/> <br />
                    <input type="submit" name="" value="Create Users"/>
                </form>
            </DefaultLayout>
        )
    }
}
module.exports = New;