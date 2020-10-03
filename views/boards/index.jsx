const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {boards} = this.props
    return (
      <Layout title="Style Points">
        <h1 className="my-rip-list"> My Rip List </h1>
        <a href="/boards/new"><button type="button" class="btn btn-dark btn-lg">Add Something To Rip</button></a>
        {boards.map((board) => (
        <div className="d-flex flex-wrap flex-row justify-content-sm-between index-list">          
          <div className="board-title-div container"><h2 className="board-title">{board.board}</h2></div> 
           <br/>       
          <div><a href={`/boards/${board._id}`}><img src={board.img}/></a></div>
          <br/>
        </div>
        ))}
      </Layout>
    );
  }
}

module.exports = Index;
