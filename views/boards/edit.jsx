const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {board} = this.props
    return (
      <Layout title="Edit Board">
        <form action={`/boards/edit/${board._id}?_method=PUT`} method="post">
          <input type="text" value={board.board} placeholder="write board name here" name="board"/>
          <input type="text" name="img" value={board.img}/>
          <input type="text" name="details" value={board.details}/>
          <input type="text" name="price" value={board.price}/>
          <input type="submit" value="edit board"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
