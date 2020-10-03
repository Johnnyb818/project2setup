const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="New Item">
        <form action="/boards/" method="post">
          <div className="form-group">
            <input type="text" className="form-control-lg input-lg" placeholder="write board name here" name="board"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control-lg input-lg" placeholder="Image URL" name="img"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control-lg input-lg" placeholder="Details" name="details"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control-lg input-lg" placeholder="Price" name="price"/>
          </div>
          <input className="btn btn-primary btn-lg" type="submit" value="create item"/>          
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
