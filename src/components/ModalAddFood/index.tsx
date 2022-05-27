import { Component, createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import {FoodInterface} from '../../types';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';

interface ModalAddFoodProps{
  handleAddFood: (data: FoodInterface) => void;
  isOpen: boolean;
  setIsOpen: () => void;
}

export default function ({handleAddFood, isOpen, setIsOpen}: ModalAddFoodProps) {
  const formRef = createRef<FormHandles>();

  async function handleSubmit(data: FoodInterface) {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
