import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <h4>React Task</h4>
        <p>Create a react app that calls an API and renders a list of items.</p>
      </div>
      <div style={{ margin: "50px 100px" }}>
        <ul>
          <li>Render a list, scrollable/infinite scroll with paging</li>
          <li>Click item in list, show detail in new screen</li>
          <li>Return to list after viewing item</li>
        </ul>

        <div>
          API to use: GET:
          `https://preprodapi.mypatientspace.com/api/artifact/libraries?page=0&size=20`
        </div>
        <div style={{marginTop:20}}>
          Access Token to use: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoidGVzdGFkbWluIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9GQUNJTElUWV9BRE1JTiJdLCJqdGkiOiJiNDY0NWIzYi02ZjA5LTQ2YjYtOTAzMy0wOTRiMzU3YTc5MGMiLCJjbGllbnRfaWQiOiJ0ZXN0and0Y2xpZW50aWQiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.Wuw785LT5wmoc5P7_pCQ8PSwPAPJCcKJ-WG2S6hqYdQ
        </div>
      </div>
    </div>
  );
}

export default App;
