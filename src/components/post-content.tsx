import styled from "styled-components";

export const PostContent = styled.div`
  kbd {
    box-sizing: content-box;
    padding: 2px 4px;
    border: 1px solid var(--color-dark);
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 3px 0 var(--color-dark);
    font-family: var(--font-mono);
  }  

  pre {
    padding: 15px;
    width: 100%;
  }

  pre,
  code {
    font-family: var(--font-mono);
  }
`