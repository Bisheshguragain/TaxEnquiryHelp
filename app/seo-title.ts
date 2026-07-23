const MAX_SEARCH_TITLE_LENGTH=60;
const BRAND_SUFFIX=' | TaxEnquiryHelp';

export function makeSeoTitle(title:string,fallback?:string){
  const clean=title.replace(/\s+/g,' ').trim();
  const branded=`${clean}${BRAND_SUFFIX}`;
  if(branded.length<=MAX_SEARCH_TITLE_LENGTH)return branded;
  if(clean.length<=MAX_SEARCH_TITLE_LENGTH)return clean;
  const colonHeading=clean.split(':')[0].trim();
  if(colonHeading.length>=20&&`${colonHeading}${BRAND_SUFFIX}`.length<=MAX_SEARCH_TITLE_LENGTH){
    return `${colonHeading}${BRAND_SUFFIX}`;
  }
  if(fallback){
    const compact=fallback.replace(/\s+/g,' ').trim();
    if(`${compact}${BRAND_SUFFIX}`.length<=MAX_SEARCH_TITLE_LENGTH)return `${compact}${BRAND_SUFFIX}`;
    if(compact.length<=MAX_SEARCH_TITLE_LENGTH)return compact;
  }
  const candidate=clean.slice(0,MAX_SEARCH_TITLE_LENGTH+1);
  const boundary=candidate.lastIndexOf(' ');
  let result=candidate.slice(0,boundary>35?boundary:MAX_SEARCH_TITLE_LENGTH)
    .replace(/[\s:;,|–—-]+$/,'');
  const weakEnding=/\s+(?:a|an|and|for|how|in|of|or|the|to|with)$/i;
  while(weakEnding.test(result))result=result.replace(weakEnding,'');
  return result;
}
