import * as Style from "./styles"
import { formatCurrentMonth } from "../../helpers/dateFilter"

type BananaProps = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void
}

export const InfoArea = ({ currentMonth, onMonthChange }: BananaProps) => {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split("-")
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth( currentDate.getMonth() -1 )
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split("-")
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1);
        currentDate.setMonth( currentDate.getMonth() +1 )
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1}`)
    }

    return(
        <Style.Container>
            <Style.MonthArea>
                <Style.MonthArrow onClick={handlePrevMonth}>⬅️</Style.MonthArrow>
                <Style.MonthTitle>{formatCurrentMonth(currentMonth)}</Style.MonthTitle>
                <Style.MonthArrow onClick={handleNextMonth}>➡️</Style.MonthArrow>
            </Style.MonthArea>
            <Style.ResumeArea>
                
            </Style.ResumeArea>
        </Style.Container>
    );
};