import styled from 'styled-components'


const StyledNew = () => {

const Title = styled.h1 `
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`


  return (
    
    <Wrapper>
      <Title>
        Olá Mundo!
      </Title>
    </Wrapper>
    
  )
}

export default StyledNew