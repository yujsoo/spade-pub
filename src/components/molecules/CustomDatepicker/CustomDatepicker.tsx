import { format } from 'date-fns';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div>
            <div>
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}></button>
              <span>{format(date, 'MMMM yyyy')}</span>
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}></button>
            </div>
            <button onClick={() => onChange(new Date())}>
              Today: {format(new Date(), 'EEEE, MMMM d, yyyy')}
            </button>
          </div>
        )}
      />
    </div>
  );
}

export default CustomDatepicker;
