import moment from "moment";

export const formatDate = (dateString: string) => {
    const date = moment(dateString);
    const now = moment();

    // Проверяем, было ли сообщение отправлено менее 24 часов назад
    const hoursAgo = now.diff(date, "hours");
    if (hoursAgo < 24) {
        // Определяем правильное склонение для "час" в зависимости от количества часов
        let hoursWord;
        if (hoursAgo === 1 || (hoursAgo > 20 && hoursAgo % 10 === 1)) {
            hoursWord = "час";
        } else if (
            (hoursAgo > 1 && hoursAgo < 5) ||
            (hoursAgo > 20 && hoursAgo % 10 > 1 && hoursAgo % 10 < 5)
        ) {
            hoursWord = "часа";
        } else {
            hoursWord = "часов";
        }

        return `${hoursAgo} ${hoursWord} назад`;
    }

    return date.format("DD.MM.YYYY, HH:mm:ss");
};
