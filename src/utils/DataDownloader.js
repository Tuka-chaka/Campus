import sortMonths from "./MonthsSorter"

function downloadData (data) {

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const fileData = ` ,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек,Янв\n
    Участники программы 'Кампус'${sortMonths(data.participants).reduce((result, item) => result += `,${item.amount}`, '')}\n
    Количество отличников${sortMonths(data.honours).reduce((result, item) => result += `,${item.amount}`, '')}\n
    Поданных заявлений${sortMonths(data.applications).reduce((result, item) => result += `,${item.amount}`, '')}\n
    Участников стипендиальной программы фонда${sortMonths(data.fundStipend).reduce((result, item) => result += `,${item.amount}`, '')}\n
    Участников бонусной программы${sortMonths(data.fundBonus).reduce((result, item) => result += `,${item.amount}`, '')}\n
    Оформили льготное кредитование${sortMonths(data.fundPrivilege).reduce((result, item) => result += `,${item.amount}`, '')}\n
    Уникальных посещений сайта${sortMonths(data.attendanceWeb).reduce((result, item) => result += `,${item.amount}`, '')}\n
    Уникальных посещений приложения${sortMonths(data.attendanceMobile).reduce((result, item) => result += `,${item.amount}`, '')}`;

    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `Отчёт ${day}-${month}-${year}.csv`;
    link.href = url;
    link.click();
}

export default downloadData