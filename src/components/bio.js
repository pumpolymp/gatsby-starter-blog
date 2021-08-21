/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
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
                        <StaticImage
                            className="university-logo"
                            layout="fixed"
                            formats={["AUTO", "WEBP", "AVIF"]}
                            src="../images/harvard.png"
                            width={200}
                            height={50}
                            quality={95}
                            alt="Harvard"
                        />
                    </a>
                </div>
                <div style={{gridArea: 'cornell'}}>
                    <a href="/about/contactUs#media-about-us">
                        <StaticImage
                            className="university-logo"
                            layout="fixed"
                            formats={["AUTO", "WEBP", "AVIF"]}
                            src="../images/cornell.png"
                            width={200}
                            height={50}
                            quality={95}
                            alt="Cornell"
                        />
                    </a>
                </div>
                <div style={{gridArea: 'imperial'}}>
                    <a href="/about/contactUs#media-about-us">
                        <StaticImage
                            className="university-logo"
                            layout="fixed"
                            formats={["AUTO", "WEBP", "AVIF"]}
                            src="../images/imperial-college-london.png"
                            width={182}
                            height={50}
                            quality={95}
                            alt="Imperial College London"
                        />
                    </a>
                </div>
                <div style={{gridArea: 'ecole'}}>
                    <a href="/about/contactUs#media-about-us">
                        <StaticImage
                            className="university-logo"
                            layout="fixed"
                            formats={["AUTO", "WEBP", "AVIF"]}
                            src="../images/ecole-de-lausanne.png"
                            width={102}
                            height={50}
                            quality={95}
                            alt="Ecole de Lausanne"
                        />
                    </a>
                </div>
            </div>
        </p>
      )}
    </div>
  )
}

export default Bio
