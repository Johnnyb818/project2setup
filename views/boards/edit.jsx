const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {board} = this.props
    return (
      <Layout title="Edit Board">
        <form action={`/boards/edit/${board._id}?_method=PUT`} method="post">
          <input type="text" vaule={board.board} placeholder="write board name here" name="board"/>
          <input type="submit" value="edit board"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
