"use client"
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { Button } from '@/components/ui/button'
import db from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useContext, useEffect, useState } from 'react'


export interface HISTORY {
    id: number,
    formData: string,
    aiResponse: string,
    templateSlug: string,
    createdBy: string,
    createAt: string
  };
 function UsageTrack() {
    const {user}=useUser();
    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);
    const {updateCreditUsage,setUpdateCreditUsage}=useContext(UpdateCreditUsageContext);
    useEffect(() => {
        user&&getData();
        
      }, [user]);


      useEffect(()=>{
        user&&getData();

      },[updateCreditUsage&&user]);
    const getData=async()=>{
    {/*  @ts-ignore */}
    const result:HISTORY[]=await db.select().from(AIOutput).where(eq(AIOutput.createdBy,user?.primaryEmailAddress?.emailAddress))
    GetTotalUsage(result)
    
    }
    const GetTotalUsage=(result:HISTORY[])=>{
        let total:number=0;
        console.log(user?.emailAddresses)
        result.forEach(element=>{
            total=total+Number(element.aiResponse?.length);
            console.log('id:'+element.id);
        });
        setTotalUsage(total);
        console.log(total);
    }
    
  return (
    <div className='m-5'>
        <div className='bg-primary text-white p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full rounded-t-full'>
            <div className='h-2 bg-white rounded-full'
            style={{
                width:(totalUsage/10000)*100+"%"
            }
            }></div>
        </div>
        <h2 className='text-sm my-2'>{totalUsage}/10,000 Credit Used</h2>
        </div>
        <Button variant={'outline'}  className='w-full my-3'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack
