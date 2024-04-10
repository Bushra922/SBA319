const React = require('react');
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render () {
        return (
            <DefaultLayout title={'Add a New ChineseSigns '}>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action='/chineseSigns' method="POST">
                    Name: <input type="text" name="name" /><br />
                    Years: < input type="text" name="years"/> <br />
                    Is Ready to Read: <input type="checkbox" name="readyToRead"/> <br />
                    <input type="submit" name="" value="Create ChineseSigns"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New;