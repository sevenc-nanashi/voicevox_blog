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
      markdownRemark(fileAbsolutePath: { regex: "/libraryReadme/" }) {
        html
      }
    }
  `).markdownRemark.html

  return (
    <ModalMarkdown
      title="四国めたん・ずんだもん 利用規約"
      html={html}
      isActive={props.isActive}
      hide={props.hide}
    />
  )
}
