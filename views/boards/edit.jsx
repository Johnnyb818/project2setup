const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {board} = this.props
    return (
      <Layout title="Edit Item">
        <div className="edit-form">
          <form action={`/boards/edit/${board._id}?_method=PUT`} method="post">
            <div className="form-group">           
                <input type="text" className="form-control-lg input-lg" value={board.board} placeholder="write board name here" name="board"/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control-lg input-lg" name="img" value={board.img}/>
            </div>
            <div className="form-group">
              <input type="text" className="form-control-lg input-lg" name="details" value={board.details}/>
            </div>
            <div className="form-group"> 
              <input type="text" className="form-control-lg input-lg" name="price" value={board.price}/>
            </div>
            <input className="btn btn-primary btn-lg" type="submit" value="edit item"/>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
