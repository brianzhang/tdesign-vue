/* eslint-disable */
export default {
  docs: [
    {
      title: '开始',
      type: 'doc', // 普通文档
      children: [
        {
          title: '快速开始',
          name: 'getting-started',
          meta: {
            docType: 'explain', // 头图配置相关
          },
          path: '/vue/components/getting-started',
          component: () => import('@/site/docs/getting-started.md'),
        },
        {
          title: '最佳实践',
          name: 'quick-start',
          meta: {
            docType: 'explain',
          },
          path: '/vue/components/quick-start',
          component: () => import('@/site/docs/starter.md'),
        },
        {
          title: '更新日志',
          name: 'changelog',
          meta: {
            docType: 'explain',
          },
          path: '/vue/components/changelog',
          component: () => import('@/CHANGELOG.md'),
        },
      ],
    },
    {
      title: '全局配置',
      name: 'configs',
      children: [
        {
          title: '全局特性配置',
          name: 'config',
          meta: {
            docType: 'explain',
          },
          path: '/vue/components/config',
          component: () => import('@/examples/config-provider/config-provider.md'),
        },
        {
          title: '自定义主题',
          name: 'custom-theme',
          meta: {
            docType: 'explain',
          },
          path: '/vue/components/custom-theme',
          component: () => import('@common/theme.md'),
        },
        {
          title: '暗黑模式',
          name: 'dark-mode',
          meta: {
            docType: 'explain',
          },
          path: '/vue/components/dark-mode',
          component: () => import('@common/dark-mode.md'),
        },
      ],
    },
    {
      title: '组件概览',
      name: 'overview',
      meta: {
        docType: 'explain',
      },
      path: '/vue/components/overview',
      component: () => import('@common/docs/web/overview.md'),
    },
    {
      title: '基础',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Button 按钮',
          name: 'button',
          meta: {
            docType: 'base',
          },
          path: '/vue/components/button',
          component: () => import('@/examples/button/button.md'),
        },
        {
          title: 'Divider 分割线',
          name: 'divider',
          meta: {
            docType: 'base',
          },
          path: '/vue/components/divider',
          component: () => import('@/examples/divider/divider.md'),
        },
        {
          title: 'Icon 图标',
          name: 'icon',
          meta: {
            docType: 'base',
          },
          path: '/vue/components/icon',
          component: () => import('@/examples/icon/icon.md'),
        },
      ],
    },
    {
      title: '布局',
      type: 'component',
      children: [
        {
          title: 'Grid 栅格',
          name: 'grid',
          meta: {
            docType: 'layout',
          },
          path: '/vue/components/grid',
          component: () => import('@/examples/grid/grid.md'),
        },
        {
          title: 'Layout 布局',
          name: 'layout',
          meta: {
            docType: 'layout',
          },
          path: '/vue/components/layout',
          component: () => import('@/examples/layout/layout.md'),
        },
      ],
    },
    {
      title: '导航',
      type: 'component',
      children: [
        {
          title: 'Affix 固钉',
          name: 'affix',
          meta: {
            docType: 'navigation',
          },
          path: '/vue/components/affix',
          component: () => import('@/examples/affix/affix.md'),
        },
        {
          title: 'Anchor 锚点',
          name: 'anchor',
          meta: {
            docType: 'navigation',
          },
          path: '/vue/components/anchor',
          component: () => import('@/examples/anchor/anchor.md'),
        },
        {
          title: 'Breadcrumb 面包屑',
          name: 'breadcrumb',
          meta: {
            docType: 'navigation',
          },
          path: '/vue/components/breadcrumb',
          component: () => import('@/examples/breadcrumb/breadcrumb.md'),
        },
        {
          title: 'Dropdown 下拉菜单',
          name: 'dropdown',
          meta: {
            docType: 'navigation',
          },
          path: '/vue/components/dropdown',
          component: () => import('@/examples/dropdown/dropdown.md'),
        },
        {
          title: 'Menu 导航菜单',
          name: 'menu',
          meta: {
            docType: 'navigation',
          },
          path: '/vue/components/menu',
          component: () => import('@/examples/menu/menu.md'),
        },
        {
          title: 'Pagination 分页',
          name: 'pagination',
          meta: {
            docType: 'navigation',
          },
          path: '/vue/components/pagination',
          component: () => import('@/examples/pagination/pagination.md'),
        },
        {
          title: 'Steps 步骤条',
          name: 'steps',
          meta: {
            docType: 'navigation',
          },
          path: '/vue/components/steps',
          component: () => import('@/examples/steps/steps.md'),
        },
        {
          title: 'Tabs 选项卡',
          name: 'tabs',
          meta: {
            docType: 'navigation',
          },
          path: '/vue/components/tabs',
          component: () => import('@/examples/tabs/tabs.md'),
        },
      ],
    },
    {
      title: '输入',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Cascader 级联组件',
          name: 'cascader',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/cascader',
          component: () => import('@/examples/cascader/cascader.md'),
        },
        {
          title: 'Checkbox 多选框',
          name: 'checkbox',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/checkbox',
          component: () => import('@/examples/checkbox/checkbox.md'),
        },
        {
          title: 'DatePicker 日期选择器',
          name: 'date-picker',
          path: '/vue/components/date-picker',
          component: () => import('@/examples/date-picker/date-picker.md'),
        },
        {
          title: 'Form 表单',
          name: 'form',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/form',
          component: () => import('@/examples/form/form.md'),
        },
        {
          title: 'Input 输入框',
          name: 'input',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/input',
          component: () => import('@/examples/input/input.md'),
        },
        {
          title: 'InputNumber 数字输入框',
          name: 'input-number',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/input-number',
          component: () => import('@/examples/input-number/input-number.md'),
        },
        {
          title: 'Radio 单选框',
          name: 'radio',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/radio',
          component: () => import('@/examples/radio/radio.md'),
        },
        {
          title: 'Select 选择器',
          name: 'select',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/select',
          component: () => import('@/examples/select/select.md'),
        },
        {
          title: 'Slider 滑块',
          name: 'slider',
          path: '/vue/components/slider',
          component: () => import('@/examples/slider/slider.md'),
        },
        {
          title: 'Switch 开关',
          name: 'switch',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/switch',
          component: () => import('@/examples/switch/switch.md'),
        },
        {
          title: 'Textarea 多行文本框',
          name: 'textarea',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/textarea',
          component: () => import('@/examples/textarea/textarea.md'),
        },
        {
          title: 'Transfer 穿梭框',
          name: 'transfer',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/transfer',
          component: () => import('@/examples/transfer/transfer.md'),
        },
        {
          title: 'TimePicker 时间选择器',
          name: 'time-picker',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/time-picker',
          component: () => import('@/examples/time-picker/time-picker.md'),
        },
        {
          title: 'TreeSelect 树选择',
          name: 'tree-select',
          meta: {
            docType: 'form',
          },
          path: '/vue/components/tree-select',
          component: () => import('@/examples/tree-select/tree-select.md'),
        },
        {
          title: 'Upload 上传',
          name: 'upload',
          path: '/vue/components/upload',
          component: () => import('@/examples/upload/upload.md'),
        },
      ],
    },
    {
      title: '数据展示',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Avatar 头像',
          name: 'avatar',
          meta: {
            docType: 'data',
          },
          path: '/vue/components/avatar',
          component: () => import('@/examples/avatar/avatar.md'),
        },
        {
          title: 'Badge 徽标',
          name: 'badge',
          meta: {
            docType: 'data',
          },
          path: '/vue/components/badge',
          component: () => import('@/examples/badge/badge.md'),
        },
        {
          title: 'Calendar 日历',
          name: 'calendar',
          meta: {
            docType: 'data',
          },
          path: '/vue/components/calendar',
          component: () => import('@/examples/calendar/calendar.md'),
        },
        {
          title: 'Comment 评论',
          name: 'comment',
          meta: {
            docType: 'data',
          },
          path: '/vue/components/comment',
          component: () => import('@/examples/comment/comment.md'),
        },
        {
          title: 'List 列表',
          name: 'list',
          meta: {
            docType: 'data',
          },
          path: '/vue/components/list',
          component: () => import('@/examples/list/list.md'),
        },
        {
          title: 'Progress 进度条',
          name: 'progress',
          meta: {
            docType: 'data',
          },
          path: '/vue/components/progress',
          component: () => import('@/examples/progress/progress.md'),
        },
        {
          title: 'Table 表格',
          name: 'table',
          meta: {
            docType: 'data',
          },
          path: '/vue/components/table',
          component: () => import('@/examples/table/table.md'),
        },
        {
          title: 'Tag 标签',
          name: 'tag',
          meta: {
            docType: 'data',
          },
          path: '/vue/components/tag',
          component: () => import('@/examples/tag/tag.md'),
        },
        {
          title: 'Tooltip 文字提示',
          name: 'tooltip',
          meta: {
            docType: 'data',
          },
          path: '/vue/components/tooltip',
          component: () => import('@/examples/tooltip/tooltip.md'),
        },
        {
          title: 'Tree 树',
          name: 'tree',
          meta: {
            docType: 'data',
          },
          path: '/vue/components/tree',
          component: () => import('@/examples/tree/tree.md'),
        },
      ],
    },
    {
      title: '消息提醒',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Alert 警告提醒',
          name: 'alert',
          meta: {
            docType: 'message',
          },
          path: '/vue/components/alert',
          component: () => import('@/examples/alert/alert.md'),
        },
        {
          title: 'Dialog 对话框',
          name: 'dialog',
          meta: {
            docType: 'message',
          },
          path: '/vue/components/dialog',
          component: () => import('@/examples/dialog/dialog.md'),
        },
        {
          title: 'Drawer 模态抽屉',
          name: 'drawer',
          meta: {
            docType: 'message',
          },
          path: '/vue/components/drawer',
          component: () => import('@/examples/drawer/drawer.md'),
        },
        {
          title: 'Loading 加载',
          name: 'loading',
          meta: {
            docType: 'message',
          },
          path: '/vue/components/loading',
          component: () => import('@/examples/loading/loading.md'),
        },
        {
          title: 'Message 全局提示',
          name: 'message',
          meta: {
            docType: 'message',
          },
          path: '/vue/components/message',
          component: () => import('@/examples/message/message.md'),
        },
        {
          title: 'Notification 消息通知',
          name: 'notification',
          meta: {
            docType: 'message',
          },
          path: '/vue/components/notification',
          component: () => import('@/examples/notification/notification.md'),
        },
        {
          title: 'Popconfirm 气泡确认框',
          name: 'popconfirm',
          meta: {
            docType: 'message',
          },
          path: '/vue/components/popconfirm',
          component: () => import('@/examples/popconfirm/popconfirm.md'),
        },
        {
          title: 'Popup 弹出层',
          name: 'popup',
          meta: {
            docType: 'message',
          },
          path: '/vue/components/popup',
          component: () => import('@/examples/popup/popup.md'),
        },
        {
          title: 'Swiper 轮播框',
          name: 'swiper',
          path: '/vue/components/swiper',
          component: () => import('@/examples/swiper/swiper.md'),
        },
      ],
    },
  ],
};