/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
// @ts-nocheck

import React, { useState, useEffect, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Modal, Icon } from 'semantic-ui-react'
import { toast } from 'react-toastify'
import ProjectsStore from '../../../context/projects-context'

import {
  Container,
  Label,
  LabelWrapper,
  InputWrapper,
  Field,
  ErrorMessage,
} from './styles'

import 'react-datepicker/dist/react-datepicker.css'

function FormModal() {
  const {
    formModalOpen,
    setFormModalOpen,
    addItem,
    selectedItem,
    setSelectedItem,
    createProject,
  } = useContext(ProjectsStore)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    const employee = await createProject(data)
    addItem(employee)

    toast.success('Project created successfully!')
    reset()
    setSelectedItem(null)
    setFormModalOpen(false)
  }

  const handleClose = () => {
    reset()
    setFormModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <Container>
      <Modal open={formModalOpen} size='tiny' onClose={() => handleClose()}>
        <Modal.Header>Add Project</Modal.Header>
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
                        maxLength: 35,
                      })}
                    />

                    {errors.name?.type === 'required' && (
                      <ErrorMessage>First name is required</ErrorMessage>
                    )}
                  </InputWrapper>
                </Field>
              </div>
            </div>
          </form>
        </Modal.Content>
        <Modal.Actions>
          <Button primary onClick={handleSubmit(onSubmit)}>
            {selectedItem ? 'Edit' : 'Add'}
          </Button>
          <Button onClick={() => handleClose()}>Cancel</Button>
        </Modal.Actions>
      </Modal>
    </Container>
  )
}

export default FormModal
