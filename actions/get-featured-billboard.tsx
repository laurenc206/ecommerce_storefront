import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getFeaturedBillboard = async (): Promise<Billboard[]> => {

    const res = await fetch(`${URL}?isFeatured=true`);
    return res.json();

};

export default getFeaturedBillboard;