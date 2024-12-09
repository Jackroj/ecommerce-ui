'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'
import OfferLabel from '../Component/OfferLabel'
import Logo from '../Component/Logo'
import PopoverMenu from '../Component/PopoverMenu'

const navigation = {
  categories: [
    {
      id: 'rings',
      name: 'Rings',
      featured: [
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://cdn.caratlane.com/media/static/images/V4/2024/CL/08-AUG/others/PostCard/RightSideBanner/RightSideBanner_Postcard.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        }
      ],
      sections: [
        {
          id: 'shop_by_style',
          name: 'SHOP BY STYLE',
          items: [
            { name: 'ENGAGEMENT', href: '#' },
            { name: 'SOLITAIRE', href: '#' },
            { name: 'DAILY WEAR', href: '#' },
            { name: 'PLATINUM', href: '#' },
            { name: 'COUPLE RINGS', href: '#' },
            { name: 'BANDS', href: '#' },
            { name: 'COCKTAIL', href: '#' },
            { name: 'PROMISE RINGS', href: '#' },
            { name: 'INFINITY', href: '#' },
            { name: 'ADJUSTABLE RINGS', href: '#' },
          ],
        },
        {
          id: 'shop_by_metal&stone',
          name: 'SHOP BY METAL & STONE',
          items: [
            { name: 'GOLD', href: '#' },
            { name: 'DIAMOND', href: '#' },
            { name: 'GEMSTONE', href: '#' },
            { name: 'NAVRATNA', href: '#' },
            { name: 'PEARL', href: '#' },
            { name: 'YELLOW GOLD', href: '#' },
            { name: 'ROSE GOLD', href: '#' },
            { name: 'WHITE GOLD', href: '#' },
            { name: 'SHOP BY', href: '#' },
          ],
        },
        {
          id: 'Under_10k',
          name: 'Under ₹ 10k',
          items: [
            { name: '₹ 10k to ₹ 20k', href: '#' },
            { name: '₹ 20k to ₹ 30k', href: '#' },
            { name: '₹ 30k to ₹ 50k', href: '#' },
            { name: '₹ 50k to ₹ 75k', href: '#' },
            { name: 'Above ₹ 75k', href: '#' },
            { name: 'FOR MEN', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'earrings',
      name: 'Earrings',
      featured: [
        {
          name: 'Diamond shop',
          href: '#',
          imageSrc: 'https://cdn.caratlane.com/media/static/images/V4/2023/CL/12_DEC/HP%20banner/Down_1/Stud.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        }
      ],
      sections: [
        {
          id: 'shop_by_style',
          name: 'SHOP BY STYLE',
          items: [
            { name: 'STUDS', href: '#' },
            { name: 'DROPS', href: '#' },
            { name: 'JHUMKAS', href: '#' },
            { name: 'HOOPS AND HUGGIES', href: '#' },
            { name: 'EARCUFFS', href: '#' },
            { name: 'SUIDHAGA', href: '#' },
            { name: 'PEARL EARRINGS', href: '#' },
            { name: 'GOLD EARRINGS', href: '#' },
            { name: 'CHANDBALI EARRINGS', href: '#' },
            { name: 'DAILYWEAR EARRINGS', href: '#' },
          ],
        },
        {
          id: 'shop_by_metal_stone',
          name: 'SHOP BY METAL & STONE',
          items: [
            { name: 'ROSE GOLD', href: '#' },
            { name: 'WHITE GOLD', href: '#' },
            { name: 'YELLOW GOLD', href: '#' },
            { name: '22KT GOLD', href: '#' },
            { name: 'DIAMOND', href: '#' },
            { name: 'SOLITAIRE', href: '#' },
            { name: 'GEMSTONE', href: '#' },
            { name: 'SILVER BY SHAYA', href: '#' },
          ],
        },
        {
          id: 'shop_by',
          name: 'SHOP BY',
          items: [
            { name: 'FOR MEN', href: '#' },
            { name: 'FOR KIDS', href: '#' },
            { name: 'Under ₹ 10k', href: '#' },
            { name: '₹ 10k to ₹ 15k', href: '#' },
            { name: '₹ 15k to ₹ 20k', href: '#' },
            { name: 'Above ₹ 20k', href: '#' },
            { name: 'FOR WOMEN', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Offer', href: '#' },
    { name: 'Gifts', href: '#' },
  ],
}

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category, index) => (
                  <TabPanel key={index} className="space-y-10 px-4 pb-8 pt-10">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
       <OfferLabel/>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <Logo/>
              {/* Flyout menus */}
              <PopoverMenu navigation={navigation}/>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </a>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                   🇮🇳
                    <span className="ml-3 block text-sm font-medium">IND</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
