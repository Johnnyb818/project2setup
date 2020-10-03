const React = require('react')
const Layout = require("../layout.jsx");

class Show extends React.Component {
    render(){
        const {board, index} = this.props
        return(
            <Layout>
            <h2 className="show-board-title">{board.board}</h2>
            <img src={board.img}/>
            <br/>
            <p className="details-font-color">{board.details}</p>
            <h3 className="price-color">${board.price}</h3>
                <form action={`/boards/${board._id}?_method=DELETE`} method="POST">
                    <input className="btn btn-danger btn-lg" type="submit" value="delete"/>
                </form>
                <form action={`/boards/edit/${board._id}`} method="GET">
                    <input className="btn btn-primary btn-lg" type="submit" value="edit"/>
                </form>
            </Layout>
        )
    }
}

module.exports = Show;