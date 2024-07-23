"use client"
import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import db from '@/utils/db';
import OutputSection from '../_components/OutputSection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AiModel';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { useRouter } from 'next/navigation';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';

/**

*Used to Generate Content from AI
* @param formData
*@returns
*/

interface PROPS{
  params:{
      'template-slug':string
  }
}

function CreateNewContent(props:PROPS) {
const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug'])
const [loading, setLoading] = useState(false);
const [aiOutput, setAiOutput] = useState<string>();
const {user}=useUser();
const router=useRouter();
const[totalUsage,setTotalUsage]=useContext(TotalUsageContext)
const [updateCreditUsage,setUpdateCreditUsage]=useContext(UpdateCreditUsageContext)
const GenerateAIContent=async (formData:any)=>{
  if (totalUsage>=10000){
    console.log("PLease Upgrade your plan")
    router.push('dashboard/billing')
    return ;
  }
  setLoading(true);
  const SelectedPrompt=selectedTemplate?.aiPrompt;
  const finalAIPrompt=JSON.stringify(formData)+", "+SelectedPrompt;

  const result=await chatSession.sendMessage(finalAIPrompt);

  setAiOutput(result?.response.text());


  await SaveInDb(JSON.stringify(formData),selectedTemplate?.slug,result?.response.text())
  setLoading(false);
  setUpdateCreditUsage(Date.now())
} 
  const SaveInDb=async(formData:any,slug:any,aiResp:string)=>{
    const result=await db.insert(AIOutput).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiResp,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createAt: moment().format('DD/MM/YYYY'),
    });
    console.log(result);
  }
  return (
    <div className='p-10'>
      <Link href={"/dashboard"}>
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        {/* FormSection */}
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenerateAIContent(v)}
          loading={loading}
        />
        {/* OutputSection */}
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateNewContent
