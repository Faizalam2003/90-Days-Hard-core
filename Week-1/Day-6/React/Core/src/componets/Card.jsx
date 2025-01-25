import React from 'react';
import { MegaMenu } from 'primereact/megamenu';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Card = () => {
    const items = [
        {
            label: 'Men',
            icon: 'pi pi-user',
            items: [
                [
                    {
                        label: 'Clothing',
                        items: [
                            { label: 'T-Shirts' },
                            { label: 'Shirts' },
                            { label: 'Jeans' },
                            { label: 'Jackets' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Accessories',
                        items: [
                            { label: 'Watches' },
                            { label: 'Belts' },
                            { label: 'Wallets' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Footwear',
                        items: [
                            { label: 'Sports' },
                            { label: 'Casual' },
                            { label: 'Formal' }
                        ]
                    }
                ]
            ]
        },
        {
            label: 'Women',
            icon: 'pi pi-heart',
            items: [
                [
                    {
                        label: 'Clothing',
                        items: [
                            { label: 'Dresses' },
                            { label: 'Tops' },
                            { label: 'Jeans' },
                            { label: 'Skirts' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Accessories',
                        items: [
                            { label: 'Jewelry' },
                            { label: 'Bags' },
                            { label: 'Scarves' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Beauty',
                        items: [
                            { label: 'Makeup' },
                            { label: 'Skincare' },
                            { label: 'Fragrances' }
                        ]
                    }
                ]
            ]
        },
        {
            label: 'Kids',
            icon: 'pi pi-star',
            items: [
                [
                    {
                        label: 'Boys',
                        items: [
                            { label: 'T-Shirts' },
                            { label: 'Shirts' },
                            { label: 'Jeans' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Girls',
                        items: [
                            { label: 'Dresses' },
                            { label: 'Tops' },
                            { label: 'Skirts' }
                        ]
                    }
                ]
            ]
        },
        {
            label: 'Sale',
            icon: 'pi pi-tag',
            items: [
                [
                    {
                        label: 'Discounts',
                        items: [
                            { label: 'Up to 30% Off' },
                            { label: 'Up to 50% Off' },
                            { label: 'Clearance' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Special Offers',
                        items: [
                            { label: 'Bundle Deals' },
                            { label: 'Flash Sale' },
                            { label: 'Season Special' }
                        ]
                    }
                ]
            ]
        },
        {
            label: 'Gadget Accessories',
            icon: 'pi pi-cog',
            items: [
                [
                    {
                        label: 'Mobiles',
                        items: [
                            { label: 'Mobile Phones' },
                            { label: 'Smartphones' },
                            { label: 'Tablets' }
                        ]
                    }
                ],
                [
                    {
                        label: 'Computers',
                        items: [
                            { label: 'Laptops' },
                            { label: 'Desktops' },
                            { label: 'Monitors' }
                        ]
                    }
                ]
            ]
        },
        {label:"Reviews"},
        {label:"Track Order"}
    ];

    return (
        <div className="card w-full flex justify-center text-center">
            <MegaMenu 
                model={items} 
                orientation="horizontal" 
                breakpoint="960px"
                // className="bg-white shadow-md"
                style={{ 
                    borderRadius: '8px',
                }}
            />
        </div>
    );
};

export default Card;