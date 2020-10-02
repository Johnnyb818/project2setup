const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="New Board">
        <form action="/boards/" method="post">
          <input type="text" placeholder="write board name here" name="board"/>
          <input type="text" placeholder="Image URL" name="img"/>
          <input type="text" placeholder="Details" name="details"/>
          <input type="text" placeholder="Price" name="price"/>
          <input type="submit" value="create board"/>          
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
