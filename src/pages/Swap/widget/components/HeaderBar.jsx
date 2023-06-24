import React, { useState, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Text } from "react-native";
import { AppContext } from "./WebContextProvider.js";
import Logo from "./openexamainlogo.png";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container} from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css" from "react-bootstrap";

export const mainTextColor = {
  color: "#9B9EA3",
};

// Function to search in Explore dropdown
function searchExplore() {
  var input, search, doc, e, i, exploreVal;
  input = document.getElementById("exploreSearch");
  search = input.value.toUpperCase();
  doc = document.getElementById("explore-id");
  e = doc.getElementsByClassName("explore-item");
  for (i = 0; i < e.length; i++) {
    exploreVal = e[i].textContent || e[i].innerText;
    if (exploreVal.toUpperCase().indexOf(search) > -1) {
      e[i].style.display = "";
    } else {
      e[i].style.display = "none";
    }
  }
}

function handleHover(e) {
  e.target.display = "block";
}

// Function to refresh page
function refreshHome() {
  window.location.reload(); 
}

function HeaderBar() {
  const { isFormSubmitted, unameHome, setIsFormSubmitted, setUnameHome, identity, setIdentity } =
    useContext(AppContext);

  let initialSubheaderFontSize;
  if (window.innerWidth > 568) {
    initialSubheaderFontSize = 37;
  } else {
    initialSubheaderFontSize = 31;
  }

  const [subheaderFontSize, setSubheaderFontSize] = useState(
    initialSubheaderFontSize
  );

  // const { data } = this.props.location

  function handleClick() {
    // window.location.reload(); 
    setIdentity(false);
    setIsFormSubmitted("false");
    sessionStorage.setItem("isFormSubmitted", "false");
  }

  return (
    <div className="headerbar">
      <div className="menu_logo">
        <div className="hamburgerMenu">
      {/* Browse and Explore Dropdowns */}
          <Dropdown>
            <Dropdown.Toggle align="end" id="user" size="lg">
              <span
                class="material-icons"
                style={{
                  fontSize: "24px",
                  opacity: "0.6",
                  color: "rgba(255, 255, 255, 1);",
                }}
              >
                menu
              </span>
            </Dropdown.Toggle>
            
            {/* Browse Dropdown */}
            <Dropdown.Menu className="hamburgerOpen">
              <Dropdown>
                  <Dropdown.Toggle align="start" id="browse" size="sm">
                    <Text
                      backgroundColor="#131722"
                      style={{
                        fontSize: "0.875rem",
                        color: "rgb(193, 198, 204)",
                        fontWeight: "bold",
                      }}
                      color={mainTextColor}
                      fontSize={subheaderFontSize}
                    >
                      Browse
                    </Text>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="browse-menu">
                    <Dropdown.Item className="item">
                      <span class="material-icons browse-explore">
                        history
                      </span>
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Recently viewed
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span class="material-icons browse-explore">
                        favorite
                      </span>
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Favourites
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span class="material-icons browse-explore">
                        trending_up
                      </span>
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Popular
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "bold",
                          opacity: "0.4",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Boards
                      </Text>
                      <span
                        class="material-icons"
                        style={{
                          float: "right",
                          position: "relative",
                          top: "5px",
                          fontSize: "20px",
                          opacity: "1",
                        }}
                      >
                        add_circle_outline
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Bond Intelligence Webpage
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Data Dictionary
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Data Dictionary Dark
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Data Dictionary Light
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <span class="material-icons browse-explore">
                        folder
                      </span>
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Shared folders
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span class="material-icons browse-explore">
                        folder
                      </span>
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        {unameHome}'s folders
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span class="material-icons browse-explore">
                        folder
                      </span>
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        All folders
                      </Text>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              {/* Explore Dropdown */}
                <Dropdown>
                  <Dropdown.Toggle align="start" id="explore" size="sm">
                    <Text
                      backgroundColor="#131722"
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "rgb(193, 198, 204)",
                        fontWeight: "bold",
                      }}
                      color={mainTextColor}
                      fontSize={subheaderFontSize}
                    >
                      Explore
                    </Text>
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="explore-menu" id="explore-id">
                    {/* Search bar */}
                    <div>
                      <input
                        type="search"
                        id="exploreSearch"
                        name="q"
                        placeholder="Explore"
                        onKeyUp={searchExplore}
                      ></input>
                    </div>

                    <div className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "27px",
                          fontWeight: "bold",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Fixed Income
                      </Text>
                    </div>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Bloomberg
                      </Text>
                      <span class="tooltip material-icons browse-explore">
                        error_outline
                        <span
                          class="tooltiptext info"
                          style={{
                            width: "260px",
                            height: "365px",
                            top: "-130px",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              color: "white",
                              lineHeight: "2px",
                            }}
                          >
                            Bloomberg’s corporate action data contains more
                            than 50 action types across capital changes,
                            distributions, corporate events, and fixed
                            income-specific actions. By leveraging the same
                            identifiers as our instrument and legal entities,
                            our corporate actions data content is linked
                            seamlessly to instrument and legal entities for
                            custodians, asset servicers, and other industry
                            participants. Bloomberg’s Muni Fundamentals
                            dataset is the largest and most comprehensive
                            database of municipal issuer financial and
                            operational information in the industry — allowing
                            users to spend less time compiling data and more
                            time on analysis.Bloomberg provides financials,
                            operational, and reference data for 50,000+
                            issuers (about 120,000 funds) of municipal debt,
                            covering 99 percent of outstanding general
                            obligation debt and 94 percent of revenue debt.
                            The dataset includes history going back to 2003.
                          </Text>
                        </span>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Board EX
                      </Text>
                      <span class="tooltip material-icons browse-explore">
                        error_outline
                        <span
                          class="tooltiptext info"
                          style={{
                            width: "260px",
                            height: "170px",
                            top: "-75px",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              color: "white",
                              lineHeight: "2px",
                            }}
                          >
                            BoardEx data consists of compensation, employment,
                            and relationship data for 20,000+ companies from
                            1999-present. Access educational background, prior
                            employment, and connections of directors and
                            executives. Analyze the proportion of politically
                            connected directors,using CEO-level controls such
                            as age, gender, and experience. Extract executive
                            stock option holdings.
                          </Text>
                        </span>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Financial Fundamental
                      </Text>
                      <span class="tooltip material-icons browse-explore">
                        error_outline
                        <span
                          class="tooltiptext info"
                          style={{
                            width: "260px",
                            height: "325px",
                            top: "-150px",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              color: "white",
                              lineHeight: "2px",
                            }}
                          >
                            Standard & Poor's (S&P) Capital IQ is a leading
                            provider in financial market intelligence.
                            Standard & Poor’s is the world’s foremost provider
                            of independent credit ratings, risk evaluation,
                            investment research, indices, data and valuations.
                            Compustat provides more than 500 company-level
                            fundamentals, including items such as Income
                            Statements, Balance Sheets, and Flow of Funds. It
                            also offers an even larger number of supplemental
                            data items for more than 47,000 active and 37,000
                            inactive companies. Compustat primarily draws its
                            data from SEC filings, which it standardizes to
                            allow for better comparisons. It is supplemented
                            with additional data sources as needed. For a
                            North American company to be added to the
                            database, it must file distinct 10K's or 10Q's
                            with the SEC.
                          </Text>
                        </span>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        FINRA_CRSP
                      </Text>
                      <span class="tooltip material-icons browse-explore">
                        error_outline
                        <span
                          class="tooltiptext info"
                          style={{
                            width: "260px",
                            height: "330px",
                            top: "-150px",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              color: "white",
                              lineHeight: "2px",
                            }}
                          >
                            The WRDS Bond Database is a novel and unique
                            corporate bond database compiled by WRDS
                            Researchers using the best standards in recent
                            fixed income research. The WRDS Bond Database
                            allows researchers to easily and effectively
                            access cleaned datasets of corporate bond
                            transactions, sourced from TRACE Standard and
                            TRACE Enhanced datasets, along with a separate
                            dataset for monthly price, return, coupon and
                            yield information for all corporate bonds traded
                            since July 2002. The chart illustrates the
                            comprehensive database coverage of all traded
                            corporate bond issues over time. Additionally, the
                            WRDS Bond Database includes a unique and essential
                            mapping table that links all bond and equity
                            issues for every firm and at each point time using
                            information in TRACE and CRSP databases.
                          </Text>
                        </span>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        MSRB_EMMA
                      </Text>
                      <span class="tooltip material-icons browse-explore">
                        error_outline
                        <span
                          class="tooltiptext info"
                          style={{
                            width: "260px",
                            height: "190px",
                            top: "-85px",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              color: "white",
                              lineHeight: "2px",
                            }}
                          >
                            Municipal Securities Rulemaking Board is the
                            primary regulator of the $3.7 trillion municipal
                            security market, the MSRB collects and makes
                            publicly available through its Electronic
                            Municipal Market Access (EMMA). The trades
                            represent transactions by investors and dealers in
                            the over-the-counter market for municipal
                            securities issued by municipal entities, including
                            states, counties, cities and special tax
                            districts.
                          </Text>
                        </span>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Mergent FISD
                      </Text>
                      <span class="tooltip material-icons browse-explore">
                        error_outline
                        <span
                          class="tooltiptext info"
                          style={{
                            width: "260px",
                            height: "220px",
                            top: "-95px",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              color: "white",
                              lineHeight: "2px",
                            }}
                          >
                            Mergent Fixed Income Securities Database (FISD) is
                            a comprehensive database of publicly offered U.S.
                            bonds. FISD contains issue details on over 140,000
                            corporate, corporate MTN (medium-term note),
                            supranational, U.S. Agency, and U.S. Treasury debt
                            securities and includes more than 550 data items.
                            FISD provides details on debt issues and the
                            issuers, as well as transactions by insurance
                            companies. It is used to research market trends,
                            deal structures, issuer capital structures, and
                            other areas of fixed income debt research.
                          </Text>
                        </span>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Quantstats Cusips
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Ravent Pack Sentiment
                      </Text>
                      <span class="tooltip material-icons browse-explore">
                        error_outline
                        <span
                          class="tooltiptext info"
                          style={{
                            width: "260px",
                            height: "365px",
                            top: "-150px",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              color: "white",
                              lineHeight: "2px",
                            }}
                          >
                            RavenPack News Analytics is a unique source of
                            explanatory and predictive inputs derived from
                            news. The product includes a data set rich with
                            structured information and potential signals and
                            creates new trading opportunities on both
                            scheduled and unscheduled news events. This data
                            is used to power a number of applications ranging
                            from high frequency trading systems requiring low
                            latency inputs to risk and asset management models
                            requiring factors whose time resolution may be
                            daily, weekly, and monthly.RavenPack automatically
                            tracks and monitors relevant information on nearly
                            200,000 companies, government organizations,
                            influential people, key geographical locations,
                            and all major currencies and traded commodities.
                            Among the many benefits, RavenPack delivers
                            sentiment analysis and event data most likely to
                            impact financial markets and trading around the
                            world.
                          </Text>
                        </span>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Rel Val Corp
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Rel Val Muni
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Trace Enhanced
                      </Text>
                      <span class="tooltip material-icons browse-explore">
                        error_outline
                        <span
                          class="tooltiptext info"
                          style={{
                            width: "260px",
                            height: "285px",
                            top: "-130px",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 12,
                              color: "white",
                              lineHeight: "2px",
                            }}
                          >
                            FINRA is the Financial Industry Regulatory
                            Authority, a non-governmental regulator of the
                            entire securities industry. All broker-dealers who
                            are FINRA member firms have an obligation to
                            report transactions in TRACE-eligible securities.
                            TRACE stands for Trade Reporting and Compliance
                            Engine. It is operated by FINRA, the Financial
                            Industry Regulatory Authority. This program
                            reports over the counter (OTC) sales of certain
                            fixed-income securities. The buyer or seller (or
                            both) must be brokers listed with FINRA. The data
                            is intended to give a historical perspective of
                            the over-the-counter (OTC) U.S. corporate bond,
                            agency debenture, asset-backed and mortgage backed
                            security markets.
                          </Text>
                        </span>
                      </span>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <div className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "27px",
                          fontWeight: "bold",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Models
                      </Text>
                    </div>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Corporate Forecast
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Municipal Forecast
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Price Prediction Corp
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Price Prediction Muni
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Recommendation Engine
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Risk Prediction Corp
                      </Text>
                    </Dropdown.Item>
                    <Dropdown.Item className="explore-item">
                      <Text
                        backgroundColor="#131722"
                        style={{
                          fontSize: 14,
                          color: "black",
                          marginLeft: "3px",
                          fontWeight: "450",
                        }}
                        color={mainTextColor}
                        fontSize={subheaderFontSize}
                      >
                        Risk Prediction Muni
                      </Text>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Dropdown.Menu>
            </Dropdown>
        </div>
        <div className="newnew" onClick={refreshHome}>
              {/*/ This is where the logo will go */}
              <img
                className="headBar-logo"
                src={Logo}
              />
        </div>
      </div>
      
      {/* Launch AUT Swap Button */}
      <center>
        <a className="launchApp-link" href="https://openexa.to" target="_blank"> 
          <button 
              className="button-launchApp"
            >
              <Text
                style={{
                  fontSize: 17, 
                  color: "white",
                  display: "block",
                  lineHeight: "20px", 
                }}
                >
                  Launch Credit Swap
              </Text>
          </button> 
        </a>
      </center>
     
      {/* Dropdown Buttons on Right Side of Header Bar */}
      <div className="user-info">
        {/* Search */}
        <Dropdown>
          <Dropdown.Toggle align="end" id="search" size="lg">
            <span
              class="material-icons"
              style={{
                fontSize: "24px",
                opacity: "0.6",
              }}
            >
              search
            </span>
          </Dropdown.Toggle>
        </Dropdown>
       
       {/* Data Dictionary */}
        <Dropdown>
          <Dropdown.Toggle align="end" id="search" size="lg">
            <Link exact to="/datadictionary">
              <span
                class="material-icons"
                style={{
                  fontSize: "24px",
                  opacity: "0.6",
                }}
              >
                menu_book
              </span>
            </Link>
          </Dropdown.Toggle>
        </Dropdown>
        
        {/* Tutorial */}
        <Dropdown>
          <Dropdown.Toggle align="end" id="search" size="lg">
            <Link exact to="/tutorials">
              <span
                class="material-icons"
                style={{
                  fontSize: "24px",
                  opacity: "0.6",
                }}
              >
                school
              </span>
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
        
        {/* UserInfo */}
        <Dropdown>
          <Dropdown.Toggle align="end" id="user" size="lg">
            <span
              class="material-icons"
              style={{
                fontSize: "24px",
                opacity: "0.6",
                color: "rgba(255, 255, 255, 1);",
              }}
            >
              account_circle
            </span>
          </Dropdown.Toggle>

          <Dropdown.Menu className="user-menu">
            <Dropdown.Item>
              <Text
                backgroundColor="#131722"
                style={{
                  fontSize: 14,
                  color: "black",
                  marginLeft: "3px",
                  fontWeight: "bold",
                }}
                color={mainTextColor}
                fontSize={subheaderFontSize}
              >
                {unameHome}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item>
              <Text
                backgroundColor="#131722"
                style={{
                  fontSize: 14,
                  color: "black",
                  marginLeft: "3px",
                  fontWeight: "450",
                }}
                color={mainTextColor}
                fontSize={subheaderFontSize}
              >
                Account
              </Text>
            </Dropdown.Item>
            <Dropdown.Item>
              <Text
                backgroundColor="#131722"
                style={{
                  fontSize: 14,
                  color: "black",
                  marginLeft: "3px",
                  fontWeight: "450",
                }}
                color={mainTextColor}
                fontSize={subheaderFontSize}
              >
                History
              </Text>
            </Dropdown.Item>
            <Dropdown.Item>
              <Text
                backgroundColor="#131722"
                style={{
                  fontSize: 14,
                  color: "black",
                  marginLeft: "3px",
                  fontWeight: "450",
                }}
                color={mainTextColor}
                fontSize={subheaderFontSize}
              >
                Schedules
              </Text>
            </Dropdown.Item>
            <Dropdown.Item>
              <Text
                backgroundColor="#131722"
                style={{
                  fontSize: 14,
                  color: "black",
                  marginLeft: "3px",
                  fontWeight: "450",
                }}
                color={mainTextColor}
                fontSize={subheaderFontSize}
              >
                Sessions
              </Text>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleClick}>
              <Text
                backgroundColor="#131722"
                style={{
                  fontSize: 14,
                  color: "black",
                  marginLeft: "3px",
                  fontWeight: "450",
                }}
                color={mainTextColor}
                fontSize={subheaderFontSize}
              >
                Log Out
              </Text>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default HeaderBar;