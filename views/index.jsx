const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="Style Points">
        <h1 className="index-hello">Welcome to Style Points</h1>
        <h2 className="index-login">Login to get Steezy!</h2>
      </Layout>
    );
  }
}

module.exports = Index;
