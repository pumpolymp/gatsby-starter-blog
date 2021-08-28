/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {GithubImagesUrl} from "../constants";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
        <a href="https://pumpolymp.com">
            <img className="bio-avatar"
                 width="50px"
                 alt="Profile picture"
                 src={`${GithubImagesUrl}/profile-pic.png`}/>
        </a>
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {/*{` `}*/}
          {/*<a href={`https://twitter.com/${social?.twitter || ``}`}>*/}
          {/*  You should follow them on Twitter*/}
          {/*</a>*/}
            <div className="in-cooperation">
                In cooperation with
            </div>

            <div style={{
                display: 'grid',
                gridTemplateAreas: `"harvard cornell"
                                    "imperial ecole"`,
                gridGap: '5px',
                filter: 'saturate(0)',
                transform: 'scale(0.5) translate(-270px, 0px)'
            }}>
                <div style={{gridArea: 'harvard'}}>
                    <a href="/about/contactUs#media-about-us">
                        <img className="university-logo"
                             width="200px"
                             alt="Harvard"
                             src={`${GithubImagesUrl}/harvard.png`}/>
                    </a>
                </div>
                <div style={{gridArea: 'cornell'}}>
                    <a href="/about/contactUs#media-about-us">
                        <img className="university-logo"
                             width="200px"
                             alt="Cornell"
                             src={`${GithubImagesUrl}/cornell.png`}/>
                    </a>
                </div>
                <div style={{gridArea: 'imperial'}}>
                    <a href="/about/contactUs#media-about-us">
                        <img className="university-logo"
                             width="182px"
                             alt="Imperial College London"
                             src={`${GithubImagesUrl}/imperial-college-london.png`}/>
                    </a>
                </div>
                <div style={{gridArea: 'ecole'}}>
                    <a href="/about/contactUs#media-about-us">
                        <img className="university-logo"
                             width="102px"
                             alt="Ecole de Lausanne"
                             src={`${GithubImagesUrl}/ecole-de-lausanne.png`}/>
                    </a>
                </div>
            </div>
        </p>
      )}
    </div>
  )
}

export default Bio
