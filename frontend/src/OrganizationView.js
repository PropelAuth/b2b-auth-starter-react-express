import {useRedirectFunctions, withAuthInfo} from "@propelauth/react";

function OrganizationView(props) {
  const {redirectToCreateOrgPage} = useRedirectFunctions()

  if (!props.isLoggedIn) {
    return <div>Login to view organizations</div>
  }

  // Get user's orgs and display them in a bulleted list
  const orgs = props.orgHelper.getOrgs();
  return <div>Your Orgs:
    <ul>{orgs.map(org =>
            <li key={org.orgId}>
              <Org org={org} />
            </li>
    )}</ul>
    <button onClick={redirectToCreateOrgPage}>Create Org</button>
  </div>
}

// Display an individual org
// Clicking on it redirects to the org management page
function Org({org}) {
  const {redirectToOrgPage} = useRedirectFunctions()

  // Clicking will direct you to the hosted org management page
  return <a href="#" onClick={() => redirectToOrgPage(org.orgId)}>
    {JSON.stringify(org)}
  </a>
}

export default withAuthInfo(OrganizationView);

