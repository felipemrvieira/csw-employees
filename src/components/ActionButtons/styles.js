import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 18px 0px 18px;
  .form_content {
    display: flex;
  }
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
  margin-right: 12px;
`
export const Label = styled.label`
  width: 100%;
  text-align: right;
`

export const InputWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  /* input {
    width: 100%;
  } */
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
