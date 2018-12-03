import styled from 'styled-components'

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  z-index: 9999;
`

export const Wrapper = styled.div`
  max-width: 960px;
  width: 50%;
  margin: 0 auto;
  align-self: center;

  @media (max-width: 980px) {
    width: 90%;  
  }
`

export const Content = styled.div`
  padding: 2rem;
  background: #fff;

  @media screen {
    padding: 1rem;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-top: 1px solid #eee;
  flex-direction: row-reverse;

  button:first-child {
    margin-left: 1rem;
  }
`
