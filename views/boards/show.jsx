const React = require('react')
const Layout = require("../layout.jsx");

class Show extends React.Component {
    render(){
        const {board, index} = this.props
        return(
            <Layout>
            <h2>{board.board}</h2>
            <img src={board.img}/>
            <p>{board.details}</p>
            <h3>${board.price}</h3>
            <form action={`/boards/${board._id}?_method=DELETE`} method="POST">
            <input type="submit" value="delete"/>
            </form>
            <form action={`/boards/edit/${board._id}`} method="GET">
                <input type="submit" value="edit"/>
            </form>
            </Layout>
        )
    }
}

module.exports = Show;