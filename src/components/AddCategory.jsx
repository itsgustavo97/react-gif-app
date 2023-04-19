import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
    const [inputValor, setinputValor] = useState('');

    const onInputChange = ({ target }) => {
        setinputValor(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValor.trim().length <= 3) return;
        //setCategories(categories => [ inputValor, ...categories ]);
        onNewCategory(inputValor);
        setinputValor('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValor } 
        onChange={ onInputChange }></input>
    </form>
  )
}
