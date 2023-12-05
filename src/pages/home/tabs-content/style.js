import styled from 'styled-components'
export const TabsWrapper = styled.div`
  img {
    width: 40vw;
  }
  .itemcontent {
    position: relative;
    width: 40vw;
    margin: 5px;
  }
  .tabscontent {
    height: 89vh;
    .house {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }

  .tabscontent::-webkit-scrollbar {
    width: 0;
  }
  .highimg {
    position: absolute;
    bottom: 0px;
    color: white;
  }
`
