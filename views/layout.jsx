const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
        <header>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand"><span className="logo-style">Style</span> <span className="logo-points">Points</span></a>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="/boards/">Home</a></li>              
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/auth/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="/auth/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
              <li><a href="/auth/logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
            </ul>
          </div>
        </nav>
        </header>
        <main>{this.props.children}</main>

        <footer>
        </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;