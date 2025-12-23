'use client';

const days = [
  { day: '01', name: 'sat' },
  { day: '02', name: 'sun' },
  { day: '03', name: 'mon' },
  { day: '04', name: 'tus' },
  { day: '05', name: 'wed' },
  { day: '06', name: 'thu' },
  { day: '07', name: 'fri' },
  { day: '08', name: 'sat' },
  { day: '09', name: 'sun' },
  { day: '10', name: 'mon' },
  { day: '11', name: 'tus' },
  { day: '12', name: 'wed' },
  { day: '13', name: 'thu' },
  { day: '14', name: 'fri' },
  { day: '15', name: 'sat', isToday: true },
  { day: '16', name: 'sun' },
  { day: '17', name: 'mon' },
  { day: '18', name: 'tus' },
  { day: '19', name: 'wed' },
  { day: '20', name: 'thu' },
  { day: '21', name: 'fri' },
  { day: '22', name: 'sat' },
  { day: '23', name: 'sun' },
  { day: '24', name: 'mon' },
  { day: '25', name: 'tus' },
  { day: '26', name: 'wed' },
  { day: '27', name: 'thu' },
  { day: '28', name: 'fri' },
  { day: '29', name: 'sat' },
  { day: '30', name: 'sun' },
];

export function CalendarHeader() {
  return (
    <div className="grid grid-cols-30 border-b border-border bg-muted/30">
      {days.map((day, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center py-2 border-r border-border last:border-r-0 ${
            day.isToday ? 'bg-[#C4956C]/10' : ''
          }`}
        >
          <span className="text-[17px] font-normal">{day.day}</span>
          <span className="text-[15px] text-muted-foreground">{day.name}</span>
          {day.isToday && (
            <span className="text-[10px] text-[#C4956C] font-medium mt-0.5">Today</span>
          )}
        </div>
      ))}
    </div>
  );
}
