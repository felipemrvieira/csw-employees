/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
// @ts-nocheck
import React, { useState } from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import { useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

import {
  Container,
  Label,
  LabelWrapper,
  InputWrapper,
  Field,
  RadioItemsWrapper,
  RadioWrapper,
  RadioLabel,
} from './styles'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer }
    case 'CLOSE_MODAL':
      return { open: false }
    default:
      throw new Error()
  }
}

function ActionButtons() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = (data) => console.log(data)

  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    dimmer: undefined,
  })
  const { open, dimmer } = state

  const [startDate, setStartDate] = useState(new Date())

  return (
    <Container>
      <div>
        <Button
          content='Add'
          icon='add'
          labelPosition='left'
          onClick={() => dispatch({ type: 'OPEN_MODAL' })}
        />
        <Button content='Edit' icon='edit' labelPosition='left' />
        <Button content='Delete' icon='delete' labelPosition='left' />

        <Modal
          dimmer={dimmer}
          open={open}
          size='tiny'
          onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
        >
          <Modal.Header>Add Employee</Modal.Header>
          <Modal.Content>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form_content'>
                  <Field>
                    <LabelWrapper>
                      <Label>Name</Label>
                    </LabelWrapper>
                    <InputWrapper>
                      {errors.firstName?.type === 'required' &&
                        'First name is required'}

                      <input
                        {...register('firstName', {
                          required: true,
                          maxLength: 20,
                        })}
                      />
                    </InputWrapper>
                  </Field>

                  <Field>
                    <LabelWrapper>
                      <Label>Start Date</Label>
                    </LabelWrapper>
                    <InputWrapper>
                      {errors.firstName?.type === 'required' &&
                        'First name is required'}
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                      <Icon name='calendar alternate outline' />
                    </InputWrapper>
                  </Field>

                  <Field>
                    <LabelWrapper>
                      <Label>Role</Label>
                    </LabelWrapper>
                    <InputWrapper>
                      {errors.firstName?.type === 'required' &&
                        'First name is required'}
                      <RadioItemsWrapper>
                        <RadioWrapper>
                          <input
                            {...register('teste')}
                            type='radio'
                            value='(none selected)'
                          />
                          <RadioLabel>(none selected)</RadioLabel>
                        </RadioWrapper>
                        <RadioWrapper>
                          <input
                            {...register('teste')}
                            type='radio'
                            value='asd'
                          />
                          <RadioLabel>JE</RadioLabel>
                        </RadioWrapper>
                        <RadioWrapper>
                          <input
                            {...register('teste')}
                            type='radio'
                            value='asd'
                          />
                          <RadioLabel>PE</RadioLabel>
                        </RadioWrapper>
                        <RadioWrapper>
                          <input
                            {...register('teste')}
                            type='radio'
                            value='asd'
                          />
                          <RadioLabel>SE</RadioLabel>
                        </RadioWrapper>
                        <RadioWrapper>
                          <input
                            {...register('teste')}
                            type='radio'
                            value='asd'
                          />
                          <RadioLabel>TM</RadioLabel>
                        </RadioWrapper>
                      </RadioItemsWrapper>
                    </InputWrapper>
                  </Field>

                  <Field>
                    <LabelWrapper>
                      <Label>Platoon</Label>
                    </LabelWrapper>
                    <InputWrapper>
                      {errors.firstName?.type === 'required' &&
                        'First name is required'}
                      <select name='func'>
                        <option value='5'>Function 2</option>
                        <option value='6'>Function 3</option>
                      </select>
                    </InputWrapper>
                  </Field>

                  {/* <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
                <input
                  type='number'
                  {...register('age', { min: 18, max: 99 })}
                />
                <input type='submit' /> */}
                </div>
              </form>
            </div>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
              Add
            </Button>
            <Button onClick={() => dispatch({ type: 'CLOSE_MODAL' })}>
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </Container>
  )
}

export default ActionButtons
