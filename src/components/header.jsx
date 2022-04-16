import { useSelector } from "react-redux"

export default function Header() {
    const ui = useSelector(state => state.ui)
    console.log(ui);
    return(
        <header>
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">CRUD Redux</span>
                {
                  ui.alert ? (
                    <div className={`alert alert-${ui.status}`} role="alert">
                      {ui.message}
                    </div>                    
                  ) : ''
                }

              </div>
            </nav>
        </header>
    )
}