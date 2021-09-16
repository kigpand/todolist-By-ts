import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListArray } from '../recoil/recoil';

const SubStyled = styled.div`
    width : 400px;
    height : 600px;
    z-index : 1;
    position : relative;

    .addCalendar{
        border-radius : 4px;
        background-color : white;
    }

    .calendar{
        position : absolute;
    }
`;
const TodoListSub = () =>{

    const [onCalendar, setOnCalendar] = useState<boolean>(false);
    const [todoList, setTodoList] = useRecoilState(todoListArray);

    const onToggleCalendar = () =>{
        setOnCalendar(!onCalendar);
    }

    const onChangeDate = (e: Date) =>{
        setTodoList({ date : e, item : []})
    }

    return(
        <SubStyled>
            <div className="addCalendar" onClick={onToggleCalendar}>달력 보기</div>
            { onCalendar && <div className="calendar">
                <Calendar onChange={onChangeDate} value={todoList.date}/>
            </div>}
            <div>테스트</div>
        </SubStyled>
    )
}

export default TodoListSub;