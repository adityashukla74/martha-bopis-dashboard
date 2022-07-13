import { useState, useEffect } from "react";
import Image from "next/image";
import { NavLink } from ".";
import { userService } from "services";
import { Dropdown } from "semantic-ui-react";

export { Nav };



function Nav() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe((x) => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  if (!user) return null;

  return (
    <div className="firstHalfBodyStyling">
      <nav
        className="navbar"
        style={{
          marginLeft: "40px",
          marginRight: "40px",
          width: "100%",
          height: "48px",
          paddingLeft: '0% !important',
        }}
      >
        <div
          className="container-fluid"
          style={{
            display: "flext",
            flexFlow: "nowrap",
            justifyContent: "space-between",
            height: '120px',
            paddingTop: '36px',
            paddingBottom: '36px',
            marginRight: '40px !important'
          }}
        >
          <div style={{ float: "left" }}>
            <span style={{
              fontFamily: 'Lato !important',
              fontWeight: '400',
              fontSize: '31px',
              lineHeight: '37.2px'
            }}
            >
              DASHBOARD
            </span>
          </div>
          <div style={{ float: "center" }}>
            <Image alt="logo" src="/logo.svg" width={138} height={32} />
          </div>
          <div className= "nav-logo-styling">
            <div className="row">
              <div className="col" style={{ paddingRight: "16px" }}>
                <div style={{ height: "19px", width: "73px", width: 'max-content' }}>
                  <span
                    style={{
                      fontWeight: "700",
                      fontSize: "14px",
                      fontFamily: "Lato",
                      LineHeight: "16.8px",
                      float: 'right'
                    }}
                  >
                    Martha W
                  </span>
                </div>
                <div className="col" style={{width: 'max-content'}}>
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "14px",
                      fontFamily: "Lato",
                      LineHeight: "16.8px",
                      color: '#545454',
                      textAlign: 'right !important',
                      float: 'right !important'
                    }}
                  >
                    SA #701
                  </span>
                </div>
              </div>
              <div className="col">
                <Dropdown icon={
                  <Image
                    alt="martha-logo"
                    src="/martha-logo.png"
                    width={48}
                    height={48}
                  />
                }>
                  <Dropdown.Menu style={{right: '0', left: 'auto'}}>
                    <Dropdown.Item
                      onClick={logout}
                      style={{
                        fontWeight: "700",
                        fontSize: "16px",
                        fontFamily: "Lato",
                        LineHeight: "19.2px",
                      }}
                      text='Logout' />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
 