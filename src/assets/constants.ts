import type {Menu} from '@type'

export const menus: Menu[] = [
    {
        title: "GM管理",
        path:"/gm/",
        index:"1",
        menus: [
            {
                title: "GM指令",
                path:'/gm/cmd',
                index:"1-1",
                menus: []
            },
            {
                title: "GM流水日志",
                path:"/gm/log",
                index:"1-2",
                menus: []
            }
        ]
    },
    {
        title: "运营",
        path:"/yunying/",
        index:"2",
        menus: [
            {
                title: "多语言配置",
                path:"/yunying/lan",
                index:"2-1",
                menus: []
            },
            {
                title: "活动管理",
                path:"/yunying/activity",
                index:"2-2",
                menus: []
            }
        ]
    },
]