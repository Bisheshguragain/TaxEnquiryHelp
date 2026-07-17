import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const clean = (value:unknown, max:number) => typeof value==='string'?value.trim().slice(0,max):'';

export async function POST(request:Request){
  try{
    const body=await request.json();
    if(clean(body.website,100))return NextResponse.json({ok:true});
    const category=clean(body.category,100);
    const subcategory=clean(body.subcategory,160);
    const name=clean(body.name,120);
    const email=clean(body.email,254).toLowerCase();
    const phone=clean(body.phone,40);
    const details=clean(body.details,4000);
    const source=clean(body.source,80)||'Homepage guided enquiry';
    const validEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!category||!subcategory||!name||!validEmail||!phone||!details||body.consent!==true){
      return NextResponse.json({error:'Please complete every field and confirm your consent.'},{status:400});
    }
    const serviceId=process.env.EMAILJS_SERVICE_ID;
    const templateId=process.env.EMAILJS_TEMPLATE_ID;
    const publicKey=process.env.EMAILJS_PUBLIC_KEY;
    const privateKey=process.env.EMAILJS_PRIVATE_KEY;
    if(!serviceId||!templateId||!publicKey||!privateKey){
      console.error('Enquiry email environment variables are not configured.');
      return NextResponse.json({error:'Email delivery is not configured yet. Please contact us directly.'},{status:503});
    }
    const response=await fetch('https://api.emailjs.com/api/v1.0/email/send',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        service_id:serviceId,
        template_id:templateId,
        user_id:publicKey,
        accessToken:privateKey,
        template_params:{
          subject:`New TaxEnquiryHelp enquiry: ${category}`,
          from_name:name,
          reply_to:email,
          contact_number:phone,
          source,
          category,
          subcategory,
          message:details,
          consent:'Yes',
          submitted_at:new Date().toLocaleString('en-GB',{timeZone:'Europe/London'}),
        },
      }),
    });
    if(!response.ok){
      const providerMessage=clean(await response.text().catch(()=>''),300);
      console.error('EmailJS rejected an enquiry email.',response.status,providerMessage);
      return NextResponse.json({error:'We could not send your enquiry. Please try again.'},{status:502});
    }
    return NextResponse.json({ok:true});
  }catch{
    return NextResponse.json({error:'We could not process your enquiry. Please try again.'},{status:400});
  }
}
