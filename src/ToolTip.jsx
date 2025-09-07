import React from 'react';
import styled from 'styled-components';

const Tooltip = () => {
  return (
    <StyledWrapper>
      <ul className="example-2">
        <li className="icon-content">
          <a href="https://www.linkedin.com/in/adeyanju-fuhad-206802320/" aria-label="LinkedIn" data-social="linkedin">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" fill="currentColor" />
            </svg>
          </a>
          <div className="tooltip">LinkedIn</div>
        </li>

        <li className="icon-content">
          <a href="https://github.com/Fuhad-adeyanju09" aria-label="GitHub" data-social="github">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" fill="currentColor" />
            </svg>
          </a>
          <div className="tooltip">GitHub</div>
        </li>

        {/* Changed Instagram → X (Twitter) */}
        <li className="icon-content">
          <a href="https://x.com/AdeyanjuFuhad" aria-label="X" data-social="x">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.653l-5.209-6.822-5.962 6.822H2.692l7.73-8.844L2.25 2.25h6.822l4.713 6.231 4.459-6.231z" />
            </svg>
          </a>
          <div className="tooltip">X</div>
        </li>

        <li className="icon-content">
          <a href="https://wa.me/2347049294736" aria-label="WhatsApp" data-social="whatsapp">
            <div className="filled" />
            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.932 7.932 0 0 0 8.003 0C3.582 0 .066 3.515.066 7.936c0 1.398.366 2.765 1.058 3.966L0 16l4.204-1.1a7.93 7.93 0 0 0 3.799.969h.001c4.421 0 7.937-3.515 7.937-7.936a7.92 7.92 0 0 0-2.34-5.607zM8.003 14.46a6.52 6.52 0 0 1-3.316-.898l-.237-.141-2.494.653.666-2.43-.154-.25a6.517 6.517 0 0 1-1.002-3.558c0-3.602 2.93-6.531 6.537-6.531a6.51 6.51 0 0 1 4.61 1.913 6.49 6.49 0 0 1 1.913 4.618c0 3.606-2.93 6.524-6.523 6.524zm3.58-4.892c-.195-.098-1.15-.568-1.328-.633-.178-.066-.308-.098-.437.097-.13.195-.503.633-.617.761-.114.13-.228.146-.423.049-.195-.098-.825-.304-1.572-.97-.581-.517-.974-1.157-1.088-1.352-.114-.195-.012-.3.086-.398.088-.088.195-.228.293-.342.098-.114.13-.195.195-.325.065-.13.033-.244-.016-.342-.049-.098-.437-1.05-.6-1.44-.158-.379-.32-.327-.437-.333-.114-.006-.244-.007-.374-.007s-.342.049-.52.244c-.178.195-.682.666-.682 1.63 0 .963.699 1.892.796 2.021.098.13 1.378 2.107 3.34 2.954.467.202.831.322 1.115.413.468.149.893.128 1.23.078.375-.056 1.15-.469 1.312-.922.162-.454.162-.844.114-.922-.049-.079-.178-.13-.374-.228z"/>
            </svg>
          </a>
          <div className="tooltip">WhatsApp</div>
        </li>
      </ul>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  ul {
    list-style: none;
  }

  .example-2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .example-2 .icon-content {
    margin: 0 10px;
    position: relative;
  }
  .example-2 .icon-content .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    padding: 6px 10px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  .example-2 .icon-content:hover .tooltip {
    opacity: 1;
    visibility: visible;
    top: -50px;
  }
  .example-2 .icon-content a {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #4d4d4d;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover {
    box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
  }
  .example-2 .icon-content a svg {
    position: relative;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  .example-2 .icon-content a:hover {
    color: white;
  }
  .example-2 .icon-content a .filled {
    position: absolute;
    top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #000;
    transition: all 0.3s ease-in-out;
  }
  .example-2 .icon-content a:hover .filled {
    height: 100%;
  }

  .example-2 .icon-content a[data-social="linkedin"] .filled,
  .example-2 .icon-content a[data-social="linkedin"] ~ .tooltip {
    background-color: #0274b3;
  }

  .example-2 .icon-content a[data-social="github"] .filled,
  .example-2 .icon-content a[data-social="github"] ~ .tooltip {
    background-color: #24262a;
  }

  /* X (Twitter) */
  .example-2 .icon-content a[data-social="x"] .filled,
  .example-2 .icon-content a[data-social="x"] ~ .tooltip {
    background-color: #000;
  }

  .example-2 .icon-content a[data-social="whatsapp"] .filled,
  .example-2 .icon-content a[data-social="whatsapp"] ~ .tooltip {
    background-color: #25d366;
  }
`;

export default Tooltip;
