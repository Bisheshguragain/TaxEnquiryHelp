import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const clean = (value:unknown, max:number) => typeof value==='string'?value.trim().slice(0,max):'';
const escapeHtml = (value:string) => value.replace(/[&<>'"]/g, character=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[character]||character));

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
    const validEmail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!category||!subcategory||!name||!validEmail||!phone||!details||body.consent!==true){
      return NextResponse.json({error:'Please complete every field and confirm your consent.'},{status:400});
    }
    const apiKey=process.env.RESEND_API_KEY;
    const to=process.env.ENQUIRY_TO_EMAIL;
    const from=process.env.ENQUIRY_FROM_EMAIL;
    if(!apiKey||!to||!from){
      console.error('Enquiry email environment variables are not configured.');
      return NextResponse.json({error:'Email delivery is not configured yet. Please contact us directly.'},{status:503});
    }
    const safe={category:escapeHtml(category),subcategory:escapeHtml(subcategory),name:escapeHtml(name),email:escapeHtml(email),phone:escapeHtml(phone),details:escapeHtml(details).replace(/\n/g,'<br>')};
    const response=await fetch('https://api.resend.com/emails',{
      method:'POST',
      headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},
      body:JSON.stringify({
        from,to:[to],reply_to:email,
        subject:`New TaxEnquiryHelp enquiry: ${category}`,
        html:`<h1>New confidential enquiry</h1><p><strong>Step 1 — Category:</strong> ${safe.category}</p><p><strong>Step 2 — Subcategory:</strong> ${safe.subcategory}</p><hr><p><strong>Full name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Contact number:</strong> ${safe.phone}</p><p><strong>Details:</strong><br>${safe.details}</p><hr><p>Consent to contact: Yes</p>`,
        text:`New confidential enquiry\n\nStep 1 — Category: ${category}\nStep 2 — Subcategory: ${subcategory}\n\nFull name: ${name}\nEmail: ${email}\nContact number: ${phone}\n\nDetails:\n${details}\n\nConsent to contact: Yes`,
      }),
    });
    if(!response.ok){
      console.error('Email provider rejected an enquiry email.',response.status);
      return NextResponse.json({error:'We could not send your enquiry. Please try again.'},{status:502});
    }
    return NextResponse.json({ok:true});
  }catch{
    return NextResponse.json({error:'We could not process your enquiry. Please try again.'},{status:400});
  }
}
