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
          <li>Close item</li>
          <li>Scroll position should be maintained</li>
        </ul>
        <div style={{ marginTop: 20 }}>
          This following APIs use Bearer authentication. Access Token to use:
          <p>
            <pre>
              <code
                style={{ whiteSpace: "break-spaces", wordBreak: "break-all" }}
              >
                eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoidGVzdGFkbWluIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9GQUNJTElUWV9BRE1JTiJdLCJqdGkiOiJiNDY0NWIzYi02ZjA5LTQ2YjYtOTAzMy0wOTRiMzU3YTc5MGMiLCJjbGllbnRfaWQiOiJ0ZXN0and0Y2xpZW50aWQiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXX0.Wuw785LT5wmoc5P7_pCQ8PSwPAPJCcKJ-WG2S6hqYdQ
              </code>
            </pre>
          </p>
        </div>
        <div>
          <strong>API to get a list of libraries:</strong>
          <pre>
            <code>
              GET
              https://preprodapi.mypatientspace.com/api/artifact/libraries?page=0&size=20
            </code>
          </pre>
        </div>
        <div style={{ marginTop: 20 }}>
          Response Sample:
          <p>
            <pre>
              <code>
                {`{
              "_embedded": {
                  "libraries": [
                          {
                            "id": "63feee5a38fd171d656d122f",
                            "createdOn": 1624490671561,
                            "lastUpdatedOn": 1688558492869,
                            "name": "Vulvovaginal Health",
                            "title": "Vulvovaginal Health",
                            "status": "ACTIVE"
                          },
                          {
                            "id": "64a2dd0b46d101338d31a4dd",
                            "createdOn": 1688395019035,
                            "lastUpdatedOn": 1688555751537,
                            "name": "Happy Stars Lottie",
                            "title": "Happy Stars Lottie",
                            "status": "ACTIVE"
                          }
                  ]
            }
            }`}
              </code>
            </pre>
          </p>
        </div>
        <hr />

        <div>
          <strong>API to get one library item:</strong>
          <pre>
            <code>
              GET
              https://preprodapi.mypatientspace.com/api/artifact/libraries/64a2dd0b46d101338d31a4dd
            </code>
          </pre>
        </div>
        <div style={{ marginTop: 20 }}>
          Response Sample:
          <p>
            <pre>
              <code>
                {`
                {
                  "id" : "64a2dd0b46d101338d31a4dd",
                  "createdOn" : 1688395019035,
                  "lastUpdatedOn" : 1688555751537,
                  "modifiedByUser" : "stjamesdoctor ",
                  "name" : "Happy Stars Lottie",
                  "title" : "Happy Stars Lottie",
                  "status" : "ACTIVE",
                }`}
              </code>
            </pre>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
