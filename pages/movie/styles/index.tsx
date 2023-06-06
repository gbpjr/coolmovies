import styled from 'styled-components'
import { Rating } from '@mui/material';

export const Header = styled.div`
  width: 100%;
  min-height: 350px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  background-image: url(https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6762_AL_.jpg);
  background-size: cover;
  background-position: 50% 60%;
  border-radius: 0 0 0 0;
  box-shadow: inset 0px -100px 150px #000000;
`

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: #ffffff;
  padding-left: 16px;
  gap: 0px;
`

export const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#FCBC1D',
  },
  '& .MuiRating-iconHover': {
    color: '#FCBC1D',
  },
});

export const RatingDiv = styled.div`
  display: flex;
  flex-direction: start;
  align-items: center;
  gap: 4px;
`

export const RatingValue = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: rgba(0.0, 0.0, 0.0, 0.5);
`