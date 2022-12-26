import './ExpenseDate.css';

const ExpenseDate = (props) => {
    let month = props.date.toLocaleString('ru-RU', {month: 'long'});
    let day = props.date.toLocaleString('ru-RU', {day: '2-digit'});
    let year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;