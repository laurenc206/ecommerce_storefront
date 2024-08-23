
## Overview

This is the storefront for my e-commerce project. Data is obtained by making API calls to the links shown on the dashboard pages. 

A majority of the work for this project is done in the dashboard which is responsible for performing CRUD operations on the inventory displayed in the storefront. The main purpose of the storefront is to simply display the data that is managed in the dashboard and for users to place orders. Check out the README in the [dashboard](https://github.com/laurenc206/ecommerce_dashboard) for full project details and more information on the technologies used.

Please feel free to reach out to me at laurencav.info!


## Demo
To properly demo this project in it's entirity, I suggest you log-in to the dashboard using the account associated with this storefront. If you would like those credentials, contact me at laurencav.info. After logging into the dashboard, you will see all the inventory managed in the dashboard is displayed on the storefront at the link. All changes made in the dashboard will immediately be shown on the storefront as the storefront makes REST API calls to the dashboard links to retrieve current product information.


You can also demo placing an order on the storefront. Once check-out is complete, the order details will be avaliable in the dashboard.  
Check-out is done using Stripe API. To do a dummy order, use the card 4242 4242 4242 4242, expiration 12/34 and cvs 123. If an order is cancelled (user backs out of stripe before completing transaction) the transaction is saved in orders as unpaid on the dashboard.


## Future Versions
In the future updates I plan to add pagination to help with loading latency and customer accounts, which will include creating customer profiles, storring previous orders and customer reviews. In order to remain consistent, this data will be storred using the dashboard service and obtained through API calls made to the server running the dashboard.

I also plan to add inventory management and enable multiple color and sizing options be applied to a single item. These changes will be done on the dashboard, however, the storefront will also need to be updated to display product options and quantities. 


## Getting Started
In the .env file of this project, you will need to save the base url of the dashboard followed by api/<store_id> so that the requests are made to the correct link to retrieve product information.

You will want to launch the storefront first and save the link in the [dashboard](https://github.com/laurenc206/ecommerce_dashboard) .env file to avoid CORS errors and allow the API calls to go through.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
<br/>


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
