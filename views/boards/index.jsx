const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {boards} = this.props
    return (
      <Layout title="JohnnyB's Boardshop">
        <h1> My Boards </h1>
        <a href="/boards/new"><button>New Board</button></a>
        {boards.map((board) => (
        <div>
          <h2>{board.board}</h2>
          <form action={`/boards/${board._id}?_method=DELETE`} method="POST">
            <input type="submit" value="delete"/>
          </form>
          <form action={`/boards/edit/${board._id}`} method="GET">
            <input type="submit" value="edit"/>
          </form>
        </div>
        ))}
      </Layout>
    );
  }
}

module.exports = Index;
