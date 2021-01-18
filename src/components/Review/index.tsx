import React from 'react'
import styled from 'styled-components'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { mediaQueries } from '../../mediaqueries'

const StyledReviewContainer = styled.div`
background-color: #383e59;
color:white;
padding:1rem;
border-bottom:1px solid lightgrey;
${mediaQueries("tablet")`
  flex-direction:column;
 `}
`
const StyledContent = styled.div`
display:flex;
flex-flow:row wrap;
`
const StyledFormatQuoteIcon = styled(FormatQuoteIcon)`
font-size: 2.5rem;
`
const StyledParagraph = styled.p`
line-height: 1.4em;
font-weight: 700;
font-style: italic;
font-size:20px;
padding-bottom: 1rem;
`

export default (props: any) => {
  const { id, comment, author } = props;
  return (
    <StyledReviewContainer className="review-container">
      <StyledFormatQuoteIcon />
      <StyledContent>
        <StyledParagraph key={id}>{comment}</StyledParagraph>
        <StyledParagraph key={id}>{author}</StyledParagraph>
      </StyledContent>
    </StyledReviewContainer>
  );
}

