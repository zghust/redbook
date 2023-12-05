import styled from 'styled-components'
const BottomWrapper = styled.div`
  .bottom {
    margin: 4vw 2vw;
    width: 90vw;
    display: flex;
    flex-shrink: 0;
    flex-wrap: nowrap;
    overflow-x: auto;
    white-space: nowrap;
  }
  .bottom::-webkit-scrollbar {
    width: 0;
  }
  .bottomItem {
    margin-right: 2vw;
    padding: 0;
  }
  .contenttop {
    position: relative;
  }
  .titleinner {
    position: absolute;
    bottom: 6px;
    color: white;
  }
`
export default BottomWrapper
