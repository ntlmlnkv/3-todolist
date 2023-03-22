import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { FilterValuesType } from './App';
import { Button } from './components/Button';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {
    const [newTitle, setNewTitle] = useState('')
    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle('')
    }
    const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            addTaskHandler()
        }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.currentTarget.value)
    }
    const removeTaskHandler = (tID: string) => {
        props.removeTask(tID)
    }

    // const allChangeFilterHandler = () => {
    //     props.changeFilter("all")
    // }

    // const activeChangeFilterHandler = () => {
    //     props.changeFilter("active")
    // }

    // const completedChangeFilterHandler = () => {
    //     props.changeFilter("completed")
    // }

    const tsarFunction = (filterValue:FilterValuesType) => {
        props.changeFilter(filterValue)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={newTitle}
                onKeyDown={onKeyDownHandler}
                onChange={onChangeHandler} />
            <button onClick={addTaskHandler}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    return (<li key={t.id}>
                        <input type="checkbox" checked={t.isDone} />
                        <span>{t.title}</span>
                        <button onClick={() => removeTaskHandler(t.id)}>x</button>
                    </li>)
                })
            }
        </ul>
        <div>
           <Button name={'all'} callBack={()=>tsarFunction('all')} />
            {/* <button onClick={()=>tsarFunction('all')}> All </button> */}
            <button onClick={()=>tsarFunction('active')}> Active </button>
            <button onClick={()=>tsarFunction('completed')}> Completed</button>
        </div>
    </div>
}
