import styled from 'styled-components'
export const HomeWrapper = styled.div`
  .home {
    height: 106vh;
  }

  .searchbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px auto;
    width: 90vw;
    font-size: 20px;
  }
  .searchs {
    position: relative;
  }
  .search {
    position: absolute;
    right: 20px;
    top: 5px;
    font-size: 16px;
    font-family: '宋体';
    color: red;
  }
  .adm-search-bar {
    width: 80vw;

    --border-radius: 16px;
  }
`
