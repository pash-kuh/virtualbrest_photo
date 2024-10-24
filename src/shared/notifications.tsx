import { NotificationMessagesType } from "@/shared/types"
import { allLinks } from "@/shared/constants"

export const notificationMessages: NotificationMessagesType = {
    archive: [],
    current: [
        {
            id: 1,
            title: `Работать и еще раз работать...`,
            description: `
            Мы продолжаем переписывать/развивать/дополнять наши сервисы необходимыми изменениями и исправлениями.
             Будьте снисходительны и терпимы к возникащим ошибкам =)
             `
        },
        {
            id: 0,
            title: `Что это? Куда это? Чье это?`,
            description: (
                <>
                    <span>Этот небольшой ресурс основного приложения </span>
                    <a
                        style={{ color: "#55b3c3" }}
                        href={allLinks.oldServiceVB}
                    >
                        Virtualbrest
                    </a>
                    <span> созданное в помощь администратору и разработчикам.</span>
                </>

            )
        }
    ]
}
