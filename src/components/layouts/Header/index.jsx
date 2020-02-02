import React from 'react'
import { Link } from 'gatsby'
import styled, { withTheme } from 'styled-components'

import { routes } from '../../../route'
import { useSiteMetadata } from '../../../hooks/useSiteMetadata'

const StyledHeader = styled.header``

const StyledHeaderInner = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.space._24px};
  padding-top: ${props => props.theme.space._32px};
  padding-bottom: ${props => props.theme.space._8px};
  max-width: ${props => props.theme.width.max};
  width: ${props => props.theme.width.normal};
  border-bottom: 1px solid ${props => props.theme.color.border.light};
`

const StyledHeaderTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.heading.primary};
`
const StyledHeaderText = styled.p`
  color: ${props => props.theme.color.font.light};
  font-size: ${props => props.theme.fontSize.text.quaternary};
`
const StyledHeaderNavi = styled.nav`
  margin-top: ${props => props.theme.space._24px};
`
const StyledHeaderNaviList = styled.ul`
  display: flex;
`
const StyledHeaderNaviListItem = styled.li`
  margin-left: ${props => props.theme.space._12px};
  &:first-child {
    margin-left: 0;
  }
`
const StyledHeaderNaviListLink = styled(Link)`
  color: ${props => props.theme.color.font.light};
  font-size: ${props => props.theme.fontSize.text.tertiary};
  transition: color 0.7s;
  &:hover {
    color: ${props => props.theme.color.font.default};
  }
`
const activeLinkStyle = props => ({
  color: `${props.theme.color.font.default}`,
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
