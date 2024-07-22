
## Overview

This is the storefront for my e-commerce project. Data is obtained by making API calls to the links shown on the dashboard pages. In the .env file of this project, you will need to save the base url of the dashboard followed by api/<store_id> so that the requests are made to the correct link.

You will want to launch the store first and save the link in the dashboard .env file in order for API calls to go through. 

I started this project to challenge myself and to learn by working with some of the newest technologies in web app development. A majority of the work is in the dashboard part of this app. The main purpose of the storefront is to display the data that is managed in the dashboard. Check out the README in the [dashboard](https://github.com/laurenc206/ecommerce_dashboard) for more information on all the technologies I used and project details.

<br/> 

Please feel free to reach out to me at laurencavdev.com!

<br/>

## Demo

Check-out is done using Stripe API. To do a dummy order, use the card 4242 4242 4242 4242, expiration 12/34 and cvs 123. If an order is cancelled (user backs out of stripe before completing transaction) the transaction is saved in orders as unpaid on the dashboard.

<br/>

## Future Versions
In the future updates I plan to add pagination to help with loading latency and customer accounts, which will include creating customer profiles, storring previous orders and customer reviews. In order to remain consistent, this data will be storred using the dashboard service and obtained through API calls made to the server running the dashboard.

I also plan to add inventory management and enable multiple color and sizing options be applied to a single item. These changes will be done on the dashboard, however, the storefront will also need to be updated to display product options and quantities. 

<br/>

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

<br/> 
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
