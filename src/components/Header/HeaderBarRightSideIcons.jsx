import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HeaderBarRightSideIcons() {
  return (
    <div>
      <div className="user-info">
        {/* Search */}
        <Dropdown>
          <Dropdown.Toggle align="end" id="search" size="lg" className="custom-dropdown">
            {/*<span
              className="material-icons"
              style={{
                fontSize: '24px',
                opacity: '0.6',
              }}
            >
              search
            </span>*/}
          </Dropdown.Toggle>
        </Dropdown>

        {/* Data Dictionary */}
        <Dropdown>
          <Dropdown.Toggle align="end" id="search" size="lg" className="custom-dropdown">
            {/*<Link exact to="/datadictionary">
              <span
                className="material-icons"
                style={{
                  fontSize: '24px',
                  opacity: '0.6',
                }}
              >
                menu_book
              </span>
            </Link>*/}
          </Dropdown.Toggle>
        </Dropdown>

        {/* Tutorial */}
        <Dropdown>
          <Dropdown.Toggle align="end" id="search" size="lg" className="custom-dropdown">
            <Link exact to="/tutorials">
              {/*<span
                className="material-icons"
                style={{
                  fontSize: '24px',
                  opacity: '0.6',
                }}
              >
                school
              </span>*/}
            </Link>
          </Dropdown.Toggle>
        </Dropdown>

        {/* Marketplace */}
        {/* <Dropdown>
          <Dropdown.Toggle align="end" id="search" size="lg">
            <span
              class="material-icons"
              style={{
                fontSize: "24px",
                opacity: "0.6",
              }}
            >
              storefront
            </span>
          </Dropdown.Toggle>
        </Dropdown> */}
      </div>
    </div>
  )
}

export default HeaderBarRightSideIcons
