const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="New Board">
        <form action="/boards/" method="post">
          <input type="text" placeholder="write board name here" name="board"/>
          <input type="submit" value="create board"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
