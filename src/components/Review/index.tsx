import React from 'react'
import styled from 'styled-components'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import { mediaQueries } from '../../mediaqueries'

const StyledReviewContainer = styled.div`
background-color: #383e59;
color:white;
display:flex;
flex-flow: row;
${mediaQueries("tablet")`
  margin:0;
  padding:0;
  width:33.3%;
`}
`

const StyledContent = styled.div`
display:flex;
flex-flow: column nowrap;
padding: 2rem 0;
`
const StyledFormatQuoteIcon = styled(FormatQuoteIcon)`
font-size: 3.5rem;
padding:2rem;
`

const StyledParagraph = styled.p`
margin-right:15%;
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
      <div>
        <StyledFormatQuoteIcon />
      </div>
      <div>
        <StyledContent>
          <StyledParagraph key={id}>{comment}</StyledParagraph>
          <StyledParagraph key={id}>{author}</StyledParagraph>
        </StyledContent>
      </div>
    </StyledReviewContainer>
  );
}

