export const sideNavbarTheme = {
  root: {
    base: 'h-full',
    collapsed: {
      on: 'w-20',
      off: 'w-60',
    },
    inner:
      'h-full w-full overflow-y-auto overflow-x-hidden flex flex-col bg-sidebar-main pl-3 pt-4 text-white',
  },
  collapse: {
    button:
      'group flex w-full items-center rounded-lg p-2 text-base font-normal text-white transition duration-75 hover:bg-[#4b91a4]',
    icon: {
      base: 'h-5 w-5 flex-shrink-0 text-white transition duration-75',
      open: {
        off: '',
        on: '',
      },
    },
  },
  item: {
    base: 'flex items-start justify-center rounded-lg p-2 text-base text-white hover:bg-[#4b91a4] mr-4',
    active: 'text-white bg-gray-700',
    collapsed: {
      insideCollapse: 'group w-full pl-8 transition duration-75',
      noIcon: 'font-bold',
    },
    content: {
      base: 'flex-1 whitespace-nowrap px-3',
    },
    icon: {
      base: 'h-5 w-5 flex-shrink-0 text-white transition duration-75 group-hover:text-gray-900',
      active: 'text-white bg-gray-700',
    },
    label: '',
    listItem: '',
  },
};
