import React from 'react';

const CreateForm = ({setUser, setCount, count}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({name: "Uri", job: "dev"})
        setCount(count + 1);
    }
    const handleClick = (e) => {
        e.preventDefault();
        setUser({})
        setCount(1)
    }
    
    return (
        <div>
            <form action="" method="post" onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <input type="text" name="job" />
                <button type="submit">Enviar</button>
            </form>            
            <button onClick={handleClick}>Reset</button>
        </div>
    );
}

export default CreateForm;
