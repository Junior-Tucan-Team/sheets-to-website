import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeMode } from '../../redux/actions/editorActions';
import './output.css';

const Header = () => {
  // const [toggleValue, setToggleValue] = useState('off');
  const dispatch = useDispatch();
  const handleToggle = (e) => {
    // const primary = document.getElementsByClassName('primaryHeader');    // Commented lines can
    // if (toggleValue === 'on') {                                          // be used for hiding
    //   primary[0].setAttribute('style', 'display: ;');                    // primary header
    //   setToggleValue('off');
    // } else {
    //   primary[0].setAttribute('style', 'display: none;');
    //   setToggleValue('on');
    // }
    dispatch(changeMode());
  };
  return (
    <div className="header">
      <div className="primaryHeader">
        <div className="jNewHeader isSheets isDark forShare branding21">
          <div className="jNewHeader-col jNewHeader-navigationWrapper">
            <a
              className="jNewHeader-logo iBlock"
              href="/myforms"
              title="My Forms"
            >
              <img
                className="jfLogo"
                src="https://cdn.jotfor.ms/assets/img/logo2021/jotform-logo.svg"
                alt="JotForm Logo"
              />
            </a>
            <div className="jNewHeader-appSelector iBlock">
              <button
                type="button"
                className="jNewHeader-buttonNew appSelectorTrigger-button"
                aria-haspopup="true"
              >
                <span className="currentApp iBlock">Website Editor</span>
                <span
                  aria-label="App selector"
                  className="
                    jNewHeader-icon jNewHeader-selectorIcon
                    iBlock
                    appSelectorTrigger
                  "
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5">
                    <path
                      d="M4 3.066L1.302.235a.738.738 0 00-1.079 0 .83.83 0 000 1.132L3.46 4.765a.738.738 0 001.08 0l3.237-3.398a.83.83 0 000-1.132.738.738 0 00-1.08 0L4 3.066z"
                    />
                  </svg>
                </span>
                <div className="jNewHeader-appBoxArrow" />
              </button>
            </div>
          </div>
          <div className="jNewHeader-col jNewHeader-titleWrapper alignCenter">
            <div>
              <h1
                className="jSheetEditable jNewHeader-title iBlock"
                contentEditable="false"
                placeholder=""
              >
                Menu Website
              </h1>
              <div className="jNewHeader-appMenu">
                <div
                  className="jNewHeader-icon jNewHeader-titleIcon iBlock"
                  aria-label="App menu"
                  role="button"
                  aria-haspopup="menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5">
                    <path
                      d="M4 3.066L1.302.235a.738.738 0 00-1.079 0 .83.83 0 000 1.132L3.46 4.765a.738.738 0 001.08 0l3.237-3.398a.83.83 0 000-1.132.738.738 0 00-1.08 0L4 3.066z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <span className="jNewHeader-revisionDate">
              <a
                className="jSheetHeader-titleLink"
                target="_blank"
                rel="noopener noreferrer"
                href="https://giray.jotform.pro/210072384349050"
              >
                <span>Last updated yesterday</span>
                <span
                  role="button"
                  aria-haspopup="dialog"
                  aria-label="Revision history"
                >
                  <svg
                    viewBox="0 0 16 18"
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                    className="jSheetSVG w-12 h-12 fixedLastUpdatedIconSVG"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.107 8.67c.16.961.324 1.901.08 2.86-.24.939-.598 1.803-1.225 2.546-.623.738-1.353 1.312-2.24 1.672-2.588 1.053-5.235.098-6.72-1.853-1.564-2.055-1.643-4.934-.186-7.041C4.24 4.796 6.622 4.117 8.152 4.429l.041 2.907 3.539-3.626L8.113 0l-.012 2.535C4.01 2.232.957 5.242.215 8.383c-.776 3.28.593 6.713 3.42 8.488 2.772 1.738 6.379 1.448 8.807-.71 2.533-2.249 3.117-5.425 2.285-8.136l-1.62.646z"
                    />
                  </svg>
                </span>
              </a>
            </span>
          </div>
          <div className="jNewHeader-col jNewHeader-rightWrapper alignRight">
            <div className="jSheetCollabs isRightAlign" />
            <button
              aria-label="Share"
              type="button"
              className="sc-geBBMl cqKOgq headerButton"
              aria-haspopup="dialog"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 11"
                className="jSheetSVG jSheetSVG-share w-16 h-17"
              >
                <path
                  fill="currentColor"
                  d="M9.08.18V2.6c0 .12-.03.16-.16.16-.95.01-1.88.12-2.8.37a7.94 7.94 0 00-3.86 2.33 9.2 9.2 0 00-2.09 4c-.07.26-.11.54-.17.8.04 0 .05-.02.06-.03.24-.53.6-.95 1.04-1.3a7.7 7.7 0 012.92-1.4c1.61-.43 3.26-.55 4.92-.57.12 0 .15.03.14.15v2.61l4.86-4.86L9.08 0v.18z"
                />
              </svg>
              <span
                className="jSheetButton-text"
                style={{ textTransform: 'none' }}
              >
                Share
              </span>
            </button>
            <div className="u-relative">
              <button
                aria-haspopup="menu"
                className="headerButton headerButton-light"
              >
                <svg
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  role="presentation"
                  className="jSheetSVG jSheetSVG jSheetSVG-help w-18 h-18 mr-10"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 9A9 9 0 110 9a9 9 0 0118 0zM7.391 6.787H5.906c-.034-2.122 1.609-2.85 3.1-2.85 1.572 0 3.008.822 3.008 2.52 0 1.215-.714 1.794-1.4 2.315-.829.628-1.136.864-1.136 1.671v.4H8.007l-.008-.521c-.043-1.043.557-1.685 1.314-2.235.663-.5 1.085-.829 1.085-1.543 0-.928-.706-1.314-1.478-1.314-1.014 0-1.528.678-1.528 1.557zM8.8 14.036c-.657 0-1.135-.444-1.135-1.043 0-.621.478-1.058 1.136-1.058.685 0 1.156.437 1.156 1.058 0 .6-.472 1.043-1.157 1.043z"
                    fill="#fff"
                  />
                </svg
                ><span className="jSheetButton-text">Help</span>
              </button>
            </div>
            <div className="jNewHeader-avatar">
              <div className="jNewHeader-avatarContainer">
                <div
                  className="jNewHeader-profile"
                  role="button"
                  aria-haspopup="true"
                  aria-label="User profile"
                  style={{ backgroundImage: '//www.gravatar.com/avatar/f561502e8451d956bbf1e50fb2a9e9dd?s=50&amp;d=https://cdn.jotfor.ms/assets/img/v4/avatar/Podo-Avatar2-05.png',
                    borderColor: 'rgb(255, 97, 0)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
      <div className="secondaryHeader">
        <button>BUILD</button>
        <button>SETTINGS</button>
        <button>PUBLISH</button>
        <div className="flex items-center justify-end absolute mr-6 mt-1 right-0 emre-update">
          <label htmlFor="toogleA" className="flex items-center">
            <div className="text-gray-700 font-medium mr-4 emre-update2" style={{ color: '#FFFFFF;' }}>
              Preview Form
            </div>
            <div className="relative cursor-pointer">
              <input id="toogleA" type="checkbox" className="sr-only" onChange={handleToggle}/>
              <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner" />
              <div className="toggle-dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Header;
