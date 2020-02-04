import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import { Base } from '../components/layouts/Base'

const StyledTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.heading.primary};
`
const StyledTitleSecondary = styled.h2`
  margin-top: ${props => props.theme.space._24px};
  font-size: ${props => props.theme.fontSize.heading.secondary};
`
const StyledText = styled.p`
  margin-top: ${props => props.theme.space._16px};
  font-size: ${props => props.theme.fontSize.text.secondary};
`
const StyledTextStrong = styled.span`
  color: ${props => props.theme.color.accent.main};
  font-weight: bold;
  text-decoration: underline;
`
const StyledList = styled.ul`
  list-style: circle;
  margin-top: ${props => props.theme.space._12px};
  padding-left: ${props => props.theme.space._32px};
`
const StyledListItem = styled.li`
  font-size: ${props => props.theme.fontSize.text.secondary};
`

// eslint-disable-next-line react/display-name
export default ({ location }) => {
  return (
    <>
      <Helmet title="このサイトについて" />
      <Base pathname={location.pathname}>
        <StyledTitle>このサイトについて</StyledTitle>
        <StyledText>
          このサイトは、タイトル部分にもあるように
          <br />「
          <StyledTextStrong>
            プログラミングや日々の技術的アウトプットをするためのブログ
          </StyledTextStrong>
          」として作りました。
        </StyledText>
        <StyledText>記事内容としては下記の3つになります。</StyledText>
        <StyledList>
          <StyledListItem>単純なアウトプット記事（Home）</StyledListItem>
          <StyledListItem>
            週ごとの出来事・やったこと・学んだことの概要（Weekly Report）
          </StyledListItem>
          <StyledListItem>個人での制作物の更新情報（Update Information）</StyledListItem>
        </StyledList>

        <StyledTitleSecondary>簡単な自己紹介</StyledTitleSecondary>
        <StyledText>
          いわゆるフロントエンドエンジニアとして都内で働いています。
          <br />
          ついに5年目。
          <br />
          フロントエンドはいい感じに理解してるつもりです。
          <br />
          バックエンドもちょろっと。
        </StyledText>
        <StyledText>よろしくお願いします。</StyledText>
      </Base>
    </>
  )
}
