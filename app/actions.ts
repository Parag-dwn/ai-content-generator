// app/actions.ts
"use server";
import { Client, neon } from "@neondatabase/serverless";
import { NextApiRequest, NextApiResponse } from "next";

export async function getData() {
    try{
        const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);
        const result = await sql`SELECT Id,"formData","aiResponse","templateSlug","createdBy","createAt" FROM "aiOutput" LIMIT 10; `;
        return result

    } catch (error){
        console.error("Error fetching data: ",error);
        
    }
    
    
}