import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './CustomDatepicker.module.css';

interface DatepickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  minDate?: Date | undefined;
}

function CustomDatepicker({ selected, onChange, minDate }: DatepickerProps) {
  return (
    <div>
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="yyyy-MM-dd"
        minDate={minDate}
        filterDate={(date) => date.getDay() !== 0}
        dayClassName={(date) => (date.getDay() === 0 ? 'sunday-cell' : '')}
        calendarClassName="custom-datepicker"
        className={styles.input}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className={styles.headerWrapper}>
            <div className={styles.monthCtrl}>
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}></button>
              <span>{format(date, 'MMMM yyyy')}</span>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}></button>
            </div>
            <button
              className={styles.todayBtn}
              onClick={() => onChange(new Date())}>
              Today: {format(new Date(), 'EEEE, MMMM d, yyyy')}
            </button>
          </div>
        )}
      />
    </div>
  );
}

export default CustomDatepicker;
