import React from 'react'
import styled from 'styled-components'
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';


const reviewsArray = [
  {
    id: 1,
    comment: '“PetBuddy are always available, even at short notice and Christmas. They take really great care of Lulu, giving lots of love and attention. Really pleased to have PetBuddy around”',
    name: '- Maila, London'
  },
  {
    id: 2,
    comment: '“We always return from holiday to find Boss as happy as when we look after him ourselves, PetBuddy only have the best sitters and we trust them 100%”',
    name: '- Margarita, London'
  },
  {
    id: 3,
    comment: '“George loves his walks with PetBuddy, they really treat him like he is their own, he comes back happy and having had the best playtime”',
    name: '- Annabelle, Nottingham'
  }
]

const StyledFormatQuoteIcon = styled(FormatQuoteIcon)`
&&{
  font-size: 3.5rem;
  padding-top:1rem;
}
`
const StyledTypography = styled(Typography)`
&&{
  line-height: 1.4em;
  font-weight: 700;
  font-style: italic;
  font-size:20px;
  padding-bottom: 1rem;
}`

const StyledCard = styled(Card)`
&&{
  background-color: #383e59;
  color:white;
}
`
const StyledCardContent = styled(CardContent)``

const StyledReviewContainer = styled.div`
&& {
  display: flex;
  flex-direction:row nowrap;
  padding: 2rem 0;
}
`
export default (props: any) => {
  const review = reviewsArray.map(review => {
    const { id, comment, name } = review;
    return (
      <Grid container direction="column">
        <StyledReviewContainer>
          <Grid item xs={2}>
            <StyledFormatQuoteIcon />
          </Grid>
          <Grid item xs={2} />
          <Grid item container direction="column">
            <Grid item xs={2} />
            <Grid item xs={10}>
              <StyledTypography key={review.id}>{comment}</StyledTypography>
              <Grid item xs={2} />
            </Grid>
            <Grid item xs={12}>
              <StyledTypography key={review.id}>{name}</StyledTypography>
            </Grid>
          </Grid>
        </StyledReviewContainer>
      </Grid >
    )
  })

  return (
    <StyledCard>
      <StyledCardContent>
        {review}
      </StyledCardContent>
    </StyledCard >
  );
}

