import AuthenticationButtons from "./AuthenticationButtons";
import ComponentThatCallsAnApi from "./ComponentThatCallsAnApi";
import OrganizationView from "./OrganizationView";

export default function App() {
  return <div>
    <AuthenticationButtons/><hr/>
    <ComponentThatCallsAnApi/><hr/>
    <OrganizationView/>
  </div>
}

