'use client';

import {useMemo,useState} from 'react';

type Mode='add'|'remove';

const money=new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP',minimumFractionDigits:2,maximumFractionDigits:2});

function parseAmount(value:string){
  const cleaned=value.replace(/[^0-9.]/g,'');
  const parsed=Number(cleaned);
  return Number.isFinite(parsed)&&parsed>=0?parsed:0;
}

export default function VatCalculator(){
  const[mode,setMode]=useState<Mode>('add');
  const[amount,setAmount]=useState('100.00');
  const[rate,setRate]=useState('20');
  const[customRate,setCustomRate]=useState('');
  const activeRate=rate==='custom'?Math.max(0,parseAmount(customRate)):Number(rate);
  const value=parseAmount(amount);
  const result=useMemo(()=>{
    if(mode==='add'){
      const net=value;
      const vat=net*activeRate/100;
      return{net,vat,gross:net+vat};
    }
    const gross=value;
    const net=activeRate===0?gross:gross/(1+activeRate/100);
    return{net,vat:gross-net,gross};
  },[value,activeRate,mode]);

  const reset=()=>{setAmount('100.00');setRate('20');setCustomRate('');setMode('add')};

  return <section className="vat-tool" aria-labelledby="vat-tool-title">
    <div className="vat-tool-head">
      <p>UK VAT calculator</p>
      <h2 id="vat-tool-title">Calculate VAT instantly</h2>
      <span>Enter an amount, choose the VAT rate and select whether VAT should be added or removed.</span>
    </div>

    <div className="vat-mode" role="group" aria-label="VAT calculation type">
      <button type="button" className={mode==='add'?'active':''} aria-pressed={mode==='add'} onClick={()=>setMode('add')}>
        Add VAT <small>Amount excludes VAT</small>
      </button>
      <button type="button" className={mode==='remove'?'active':''} aria-pressed={mode==='remove'} onClick={()=>setMode('remove')}>
        Remove VAT <small>Amount includes VAT</small>
      </button>
    </div>

    <div className="vat-fields">
      <label className="vat-amount">
        <span>{mode==='add'?'Amount excluding VAT':'Amount including VAT'}</span>
        <div><b aria-hidden="true">£</b><input inputMode="decimal" autoComplete="off" value={amount} onChange={event=>setAmount(event.target.value)} aria-describedby="amount-help"/></div>
        <small id="amount-help">Use pounds and pence, for example 1250.50</small>
      </label>

      <fieldset>
        <legend>VAT rate</legend>
        <div className="vat-rates">
          {[['20','20%','Standard'],['5','5%','Reduced'],['0','0%','Zero rate'],['custom','Other','Custom']].map(([value,label,description])=>
            <label className={rate===value?'active':''} key={value}>
              <input type="radio" name="vat-rate" value={value} checked={rate===value} onChange={()=>setRate(value)}/>
              <strong>{label}</strong><small>{description}</small>
            </label>
          )}
        </div>
        {rate==='custom'&&<label className="vat-custom"><span>Custom VAT rate</span><div><input inputMode="decimal" value={customRate} onChange={event=>setCustomRate(event.target.value)} aria-label="Custom VAT rate percentage"/><b>%</b></div></label>}
      </fieldset>
    </div>

    <div className="vat-results" aria-live="polite">
      <div><span>Net amount</span><strong>{money.format(result.net)}</strong><small>Excluding VAT</small></div>
      <div className="vat-highlight"><span>VAT at {activeRate}%</span><strong>{money.format(result.vat)}</strong><small>VAT amount</small></div>
      <div><span>Gross amount</span><strong>{money.format(result.gross)}</strong><small>Including VAT</small></div>
    </div>

    <div className="vat-summary">
      <p>{mode==='add'
        ?<>Adding <strong>{activeRate}% VAT</strong> to <strong>{money.format(result.net)}</strong> gives a total of <strong>{money.format(result.gross)}</strong>.</>
        :<>Removing <strong>{activeRate}% VAT</strong> from <strong>{money.format(result.gross)}</strong> gives a net amount of <strong>{money.format(result.net)}</strong>.</>}
      </p>
      <button type="button" onClick={reset}>Reset calculator</button>
    </div>
  </section>
}
