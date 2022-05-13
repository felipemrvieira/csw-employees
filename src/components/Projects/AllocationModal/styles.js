import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 18px;
`
export const Field = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 8px;
`
export const LabelWrapper = styled.div`
  width: 33%;
  display: flex;
  align-items: flex-start;
  justify-content: end;
  margin-right: 12px;
`
export const Label = styled.label`
  /* width: 100%; */
  text-align: right;
`
export const ErrorMessage = styled.p`
  color: red;
`

export const InputWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* input {
    width: 100%;
  } */
`
export const InputDateWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  input {
    border-width: 1px;
    border-style: solid;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
    border-radius: 2px;
    margin-right: 3px;
    padding: 1px 2px;
  }
`

export const RadioItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const RadioLabel = styled.label`
  margin-left: 3px;
`
