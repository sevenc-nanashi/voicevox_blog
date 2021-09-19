import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import ModalMarkdown from "./modalMarkdown"

export default (props: {
  isActive: boolean
  title: string
  hide: () => {}
}) => {
  const html = useStaticQuery(graphql`
    query {
      markdownRemark(fileAbsolutePath: { regex: "/softwareReadme/" }) {
        html
      }
    }
  `).markdownRemark.html
  return (
    <ModalMarkdown
      title="ソフトウェア利用規約"
      html={html}
      isActive={props.isActive}
      hide={props.hide}
    />
  )
}
