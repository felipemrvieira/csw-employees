/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
// @ts-nocheck

import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import { Button, Modal, Icon } from 'semantic-ui-react'

import {
  Container,
  Label,
  LabelWrapper,
  InputWrapper,
  InputDateWrapper,
  Field,
  RadioItemsWrapper,
  RadioWrapper,
  RadioLabel,
  ErrorMessage,
} from './styles'

import 'react-datepicker/dist/react-datepicker.css'

function FormModal({ formModalOpen, setFormModalOpen, addItem }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    addItem(data)
    reset()
    setFormModalOpen(false)
  }

  const [startDate, setStartDate] = useState(new Date())

  const validateYear = (value) => {
    const year = value.getFullYear()
    if (year >= 2050) {
      return false
    }
    return true
  }

  const handleClose = () => {
    reset()
    setFormModalOpen(false)
  }

  return (
    <Container>
      <Modal open={formModalOpen} size='tiny' onClose={() => handleClose()}>
        <Modal.Header>Add Employee</Modal.Header>
        <Modal.Content>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className='form_content'>
                <Field>
                  <LabelWrapper>
                    <Label className='required'>Name</Label>
                  </LabelWrapper>
                  <InputWrapper>
                    <input
                      {...register('name', {
                        required: true,
                        maxLength: 20,
                      })}
                    />

                    {errors.name?.type === 'required' && (
                      <ErrorMessage>First name is required</ErrorMessage>
                    )}
                  </InputWrapper>
                </Field>

                <Field>
                  <LabelWrapper>
                    <Label className='required'>Start Date</Label>
                  </LabelWrapper>
                  <InputWrapper>
                    <InputDateWrapper>
                      <Controller
                        control={control}
                        name='startDate'
                        rules={{
                          validate: (value) => !value || validateYear(value),
                        }}
                        render={({ field }) => (
                          <DatePicker
                            placeholderText='Select date'
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                          />
                        )}
                      />
                      <Icon name='calendar alternate outline' />
                    </InputDateWrapper>
                    {errors.startDate && (
                      <ErrorMessage>
                        {errors.startDate.type === 'required'
                          ? 'Start date is required'
                          : 'Start year should be less than 2050'}
                      </ErrorMessage>
                    )}
                  </InputWrapper>
                </Field>

                <Field>
                  <LabelWrapper>
                    <Label>Role</Label>
                  </LabelWrapper>
                  <InputWrapper>
                    <RadioItemsWrapper>
                      <RadioWrapper>
                        <input
                          {...register('role')}
                          type='radio'
                          value='(none selected)'
                          checked
                        />
                        <RadioLabel>(none selected)</RadioLabel>
                      </RadioWrapper>
                      <RadioWrapper>
                        <input {...register('role')} type='radio' value='JE' />
                        <RadioLabel>JE</RadioLabel>
                      </RadioWrapper>
                      <RadioWrapper>
                        <input {...register('role')} type='radio' value='PE' />
                        <RadioLabel>PE</RadioLabel>
                      </RadioWrapper>
                      <RadioWrapper>
                        <input {...register('role')} type='radio' value='SE' />
                        <RadioLabel>SE</RadioLabel>
                      </RadioWrapper>
                      <RadioWrapper>
                        <input {...register('role')} type='radio' value='TM' />
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
                    <select name='platoon' {...register('platoon')}>
                      <option value=''>select</option>
                      <option value='Spartans'>Spartans</option>
                      <option value='BigBang'>BigBang</option>
                    </select>
                  </InputWrapper>
                </Field>
              </div>
            </div>
          </form>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={handleSubmit(onSubmit)}>
            Add
          </Button>
          <Button onClick={() => setFormModalOpen(false)}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    </Container>
  )
}

export default FormModal
