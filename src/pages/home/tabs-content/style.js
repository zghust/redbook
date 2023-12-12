import styled from 'styled-components'
export const TabsWrapper = styled.div`
  .tabscontent {
    padding-bottom: 50px;
    height: 95vh;

    .house {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
  .tabscontent::-webkit-scrollbar {
    width: 0;
  }
`
