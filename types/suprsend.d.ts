interface ISuprSendInbox {
    themeType?: 'light' | 'dark'
    hideInbox?: boolean
    hideToast?: boolean
    hideAvatar?: boolean
    noNotificationsComponent?: () => JSX.Element
    notificationComponent?: ({notificationData}: {notificationData: any}) => JSX.Element
    bellComponent?: () => JSX.Element
    badgeComponent?: ({ count }: { count: number | null }) => JSX.Element
    loaderComponent?: () => JSX.Element
    tabBadgeComponent?: ({ count }: { count: number }) => JSX.Element
    notificationClickHandler?: (notificationData: any) => void
    toastProps?: IToastProps
    theme?: Dictionary
    popperPosition?: 'top' | 'bottom' | 'left' | 'right'
    showUnreadCountOnTabs?: boolean
  }
  
  interface IStore {
    name: string;
  }
  