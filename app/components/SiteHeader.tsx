'use client';

import { useEffect, useState } from 'react';

const Arrow = () => <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5" /></svg>;

const links=[['How we help','/#support'],['Knowledge Hub','/knowledge-base'],['HMRC Problems','/hmrc-problems'],['HMRC Questions','/hmrc-questions'],['Contact us','/contact']] as const;
const urgentEmail='mailto:Hello@TaxEnquiryHelp.co.uk?subject=Urgent%20HMRC%20enquiry%20%E2%80%93%20response%20deadline&body=Hello%20TaxEnquiryHelp%2C%0D%0A%0D%0APlease%20review%20my%20urgent%20HMRC%20enquiry.%0D%0A%0D%0AFull%20name%3A%20%0D%0AContact%20number%3A%20%0D%0AType%20of%20HMRC%20enquiry%3A%20%0D%0ADate%20of%20HMRC%20letter%3A%20%0D%0AResponse%20deadline%3A%20%0D%0ABrief%20summary%3A%20%0D%0A%0D%0APlease%20do%20not%20include%20your%20UTR%2C%20National%20Insurance%20number%20or%20sensitive%20documents%20in%20this%20initial%20email.';

export default function SiteHeader(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{
    document.body.classList.toggle('mobile-menu-open',open);
    const close=(event:KeyboardEvent)=>{if(event.key==='Escape')setOpen(false)};
    window.addEventListener('keydown',close);
    return()=>{document.body.classList.remove('mobile-menu-open');window.removeEventListener('keydown',close)};
  },[open]);
  return <>
    <header className="site-header">
      <a className="brand site-logo-link" href="/" aria-label="TaxEnquiryHelp home" onContextMenu={(event)=>event.preventDefault()}><img className="site-logo protected-logo" src="/tax-enquiry-help-logo.png" width="724" height="191" alt="Tax Enquiry Help — expert support, clear answers, peace of mind" draggable="false" /></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([label,href])=><a href={href} key={href}>{label}</a>)}</nav>
      <a className="header-cta desktop-cta" href="/#enquiry">Get help now <Arrow /></a>
      <button className={`menu-toggle${open?' active':''}`} type="button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(value=>!value)}><span/><span/><span/></button>
    </header>
    <div className={`mobile-menu-backdrop${open?' open':''}`} onClick={()=>setOpen(false)} aria-hidden="true" />
    <nav className={`mobile-navigation${open?' open':''}`} id="mobile-navigation" aria-label="Mobile navigation" aria-hidden={!open}>
      <div className="mobile-nav-head"><span>Menu</span><button type="button" onClick={()=>setOpen(false)} aria-label="Close menu">×</button></div>
      <div className="mobile-nav-links">{links.map(([label,href],index)=><a href={href} key={href} onClick={()=>setOpen(false)}><span>0{index+1}</span>{label}<b>→</b></a>)}</div>
      <div className="mobile-nav-help"><p>Received a letter from HMRC?</p><strong>Start with a confidential, no-obligation enquiry.</strong><a href="/#enquiry" onClick={()=>setOpen(false)}>Get specialist help <Arrow /></a><div className="mobile-urgent-email"><span>Urgent enquiry?</span><a href={urgentEmail}>Hello@TaxEnquiryHelp.co.uk</a></div></div>
    </nav>
  </>;
}
