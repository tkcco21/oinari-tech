import React from 'react'
import styled from 'styled-components'
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LineShareButton,
  LineIcon,
  PocketShareButton,
  PocketIcon,
} from 'react-share'

const StyledSns = styled.p`
  margin-left: ${props => props.theme.space._4px};
  &:first-child {
    margin-left: 0;
  }
`

export const SnsShare = props => {
  const { title, excerpt, baseUrl, pathname } = props
  const url = baseUrl + pathname
  const iconSize = 36

  return (
    <>
      <StyledSns>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
      </StyledSns>

      <StyledSns>
        <FacebookShareButton url={url} quote={excerpt}>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
      </StyledSns>

      <StyledSns>
        <LineShareButton url={url} quote={excerpt}>
          <LineIcon round size={iconSize} />
        </LineShareButton>
      </StyledSns>

      <StyledSns>
        <PocketShareButton url={url}>
          <PocketIcon round size={iconSize} />
        </PocketShareButton>
      </StyledSns>
    </>
  )
}
