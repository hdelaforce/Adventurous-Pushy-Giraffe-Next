import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Hero17 = (props) => {
  return (
    <>
      <div className="hero17-header78">
        <div className="hero17-column thq-section-padding thq-section-max-width">
          <div className="hero17-content">
            <h1 className="hero17-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero17-text5">
                    Welcome to the Explosive Website!
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero17-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero17-text7">
                    Click the button below to witness a mind-blowing explosion
                    right on your screen.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="hero17-actions">
            <a
              href="/explosion"
              className="hero17-button1 thq-button-filled"
            >
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero17-text8">Click Here to Explode</span>
                  </Fragment>
                )}
              </span>
            </a>
            <a
              href="/explosion"
              className="hero17-button2 thq-button-outline"
            >
              <span className="thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero17-text6">
                      Click here to NOT Explode
                    </span>
                  </Fragment>
                )}
              </span>
            </a>
          </div>
        </div>
        <div>
          <div className="hero17-container2">
            <Script
              html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
            ></Script>
          </div>
        </div>
        <img
          src={props.imageSrc1}
          alt={props.imageAlt1}
          className="hero17-image"
        />
      </div>
      <style jsx>
        {`
          .hero17-header78 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero17-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero17-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero17-text1 {
            text-align: center;
          }
          .hero17-text2 {
            text-align: center;
          }
          .hero17-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero17-button1 {
            text-decoration: none;
          }
          .hero17-button2 {
            text-decoration: none;
          }
          .hero17-container2 {
            display: contents;
          }
          .hero17-image {
            width: 200px;
            object-fit: cover;
          }
          .hero17-text5 {
            display: inline-block;
          }
          .hero17-text6 {
            display: inline-block;
          }
          .hero17-text7 {
            display: inline-block;
          }
          .hero17-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .hero17-image {
              width: 891px;
              height: 380px;
            }
          }
          @media (max-width: 479px) {
            .hero17-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero17-button1 {
              width: 100%;
            }
            .hero17-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero17.defaultProps = {
  heading1: undefined,
  action2: undefined,
  content1: undefined,
  action1: undefined,
  imageSrc1: '/jpeg%20to%20png%20explosion-900w.png',
  imageAlt1: 'image',
}

Hero17.propTypes = {
  heading1: PropTypes.element,
  action2: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
}

export default Hero17
