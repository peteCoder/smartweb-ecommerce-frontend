import { allProductsType, allProducts } from "@/data";
import { NextApiRequest, NextApiResponse } from "next";
import {  NextRequest, NextResponse } from "next/server"






// API endpoint functions

export const GET = async(request: NextRequest) => {
    try {
        
        const { searchParams } = new URL(request.url);
        const search = searchParams.get("search");
        const pagesNum = Number(searchParams.get("page"));



        const products: allProductsType[] = allProducts;

        const dataDerivedFromPages = (data: allProductsType[], start: number, end: number) => {
            const result = data.filter((product, index) => {
                if (index >= start && index < end) return product
                else return;
            });
            return result;
        }

        const getDataForEachPage = (data: allProductsType[]) => {
            let start;
            let end;
            if (pagesNum === 1) {
                start = 0;
                end = 10;
            } else {
                start = (pagesNum - 1) * 10;
                end = start + 10;
            }
            return dataDerivedFromPages(data, start, end);
            

        };


        return new NextResponse(JSON.stringify(getDataForEachPage(products)), { status: 200 });
        
    } catch (error) {
        return new NextResponse("Error Occurred", { status: 500 });
    }
    
}
export const POST = async (request: Request, response: Response) => {
    const query = request.json();
    console.log(query);

    try {
       
        
        const posts: allProductsType[] = allProducts;       

        return new NextResponse(JSON.stringify({}), { status: 200 });
        
    } catch (error) {
        return new NextResponse("Error Occurred", { status: 500 });
        
    }
    
}