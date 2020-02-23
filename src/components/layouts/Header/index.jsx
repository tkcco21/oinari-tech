import React from 'react'
import { Link } from 'gatsby'
import styled, { withTheme } from 'styled-components'

import { routes } from '../../../route'
import { useSiteMetadata } from '../../../hooks/useSiteMetadata'
import { customMedia } from '../../../media'

const StyledHeader = styled.header``

const StyledHeaderInner = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.space._24px};
  padding-top: ${props => props.theme.space._32px};
  max-width: ${props => props.theme.width.max};
  width: ${props => props.theme.width.normal};
  border-bottom: 2px solid ${props => props.theme.color.border.light};
  ${customMedia.lessThan('m')`
    padding: 0;
    padding-top: ${props => props.theme.space._24px};
    width: ${props => props.theme.width.wide};
  `};
`

const StyledHeaderTitle = styled.h1`
  font-size: ${props => props.theme.font.size.heading.primary};
  font-weight: ${props => props.theme.font.weight.bold};
  letter-spacing: ${props => props.theme.font.space.little};
`
const StyledHeaderText = styled.p`
  margin-top: ${props => props.theme.space._8px};
  color: ${props => props.theme.color.font.light};
  font-size: ${props => props.theme.font.size.text.tertiary};
  letter-spacing: ${props => props.theme.font.space.little};
`
const StyledHeaderNavi = styled.nav`
  margin-top: ${props => props.theme.space._24px};
  ${customMedia.lessThan('m')`
    margin-top: ${props => props.theme.space._20px};
  `};
`
const StyledHeaderNaviList = styled.ul`
  display: flex;
  margin-bottom: -2px;
`
const StyledHeaderNaviListItem = styled.li`
  margin-left: ${props => props.theme.space._12px};
  &:first-child {
    margin-left: 0;
  }
  ${customMedia.lessThan('m')`
    margin-left: ${props => props.theme.space._4px};
  `};
`
const StyledHeaderNaviListLink = styled(Link)`
  padding: ${props => props.theme.space._4px} ${props => props.theme.space._8px};
  color: ${props => props.theme.color.font.light};
  font-size: ${props => props.theme.font.size.text.tertiary};
  border-bottom: 2px solid transparent;
  transition: color 0.7s;
  &:hover {
    color: ${props => props.theme.color.font.default};
  }
  ${customMedia.lessThan('m')`
    padding: ${props => props.theme.space._4px};
    font-size: ${props => props.theme.font.size.text.quaternary};
  `};
`
const activeLinkStyle = props => ({
  color: `${props.theme.color.font.default}`,
  borderBottom: `2px solid ${props.theme.color.accent.main}`,
})

const HeaderBody = props => {
  const meta = useSiteMetadata()
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <div>
          <StyledHeaderTitle>{meta.title}</StyledHeaderTitle>
          <StyledHeaderText>{meta.description}</StyledHeaderText>
        </div>

        <StyledHeaderNavi>
          <StyledHeaderNaviList>
            {routes.map(link => (
              <StyledHeaderNaviListItem key={link.id}>
                <StyledHeaderNaviListLink
                  to={link.path}
                  activeStyle={activeLinkStyle(props)}
                  partiallyActive={link.path !== '/' || props.pathname.includes('/blog/')}
                >
                  {link.label}
                </StyledHeaderNaviListLink>
              </StyledHeaderNaviListItem>
            ))}
          </StyledHeaderNaviList>
        </StyledHeaderNavi>
      </StyledHeaderInner>
    </StyledHeader>
  )
}

export const Header = withTheme(HeaderBody)
