/* Sentence Building belongs to the following sentence exercise (G2 student book).
 * The isolated frame retains each unit's original styles and audio handlers. */
(function(){
 const pairs=[["SB_G2_U1_P14_3.html","SB_G2_U1_P14_4.html"],["SB_G2_U2_P20_3.html","SB_G2_U2_P20_4.html"],["fillin_complete_word.html","match_text_vertical.html"],["fillin_complete_word.html","fillin_text.html"],["fillin_complete_word.html","fillin_text_p42.html"],["fillin_complete_word.html","fillin_text.html"],["multiple_word.html","add_the_apostrophes.html"],["fillin_complete_word.html","drag_drop_text_2.html"],["fillin_complete_word.html","match_img_horizantal.html"],["fillin_complete_word.html","click_commas_write.html"],["fillin_complete_word.html","slide_without_background.html"],["fillin_complete_word.html","fillin_text_2.html"],["fillin_complete_word.html","unscramble_circle.html"],["fillin_complete_word.html","match_img_horizantal.html"],["fillin_complete_word.html","UNDERLINE_CIRCLE.html"]];
 const unit=Number((location.pathname.match(/Playhouse_G2_U(\d+)\/views/)||[])[1]);
 if(!unit||!pairs[unit-1])return;
 const [source,target]=pairs[unit-1],page=decodeURIComponent(location.pathname.split('/').pop());
 const isolated=window.name==='sentence-building';
 if(page===source&&!isolated){
  const style=document.createElement('style');style.textContent='.SentenceBuilding_container{display:none!important}';document.head.append(style);return;
 }
 if(page!==target)return;
 if(unit===11){const style=document.createElement("style");style.textContent=".bee_drawing_activity{margin-top:20px!important}";document.head.append(style);}
 function mount(){
  const heading=document.querySelector('.activityHeading,.page_sub_title,.first_activity_section');
  if(!heading||document.querySelector('.sentence-building-frame'))return false;
  const frame=document.createElement('iframe');frame.className='sentence-building-frame';frame.title='Sentence Building';
  frame.style.cssText='display:block;width:100%;border:0;height:280px;margin:20px auto 24px;visibility:hidden;';
  frame.name='sentence-building';frame.src=source;

  frame.addEventListener('load',()=>{
   const doc=frame.contentDocument,win=frame.contentWindow;
   function isolate(){
    const box=doc.querySelector('.SentenceBuilding_container');if(!box){setTimeout(isolate,100);return;}
    // Keep the original page shell for legacy resize handlers (including mask_parent).
    const shell=doc.createElement('div'); shell.style.setProperty('display','none','important');
    shell.setAttribute('aria-hidden','true');
    while(doc.body.firstChild) shell.append(doc.body.firstChild);
    doc.body.append(shell,box);
    const style=doc.createElement('style');style.textContent='html,body{margin:0!important;padding:0!important;width:100%!important;height:auto!important;min-height:0!important;background:transparent!important;overflow:visible!important} .SentenceBuilding_container{display:block!important;position:relative!important;margin:0!important;padding:0!important;transform-origin:top left!important;top:28px!important}';doc.head.append(style);
    function fit(){
     box.style.transform='none';box.style.width='';
     const inner=box.querySelector('.cont_items')||box;
     const natural=Math.max(inner.scrollWidth,inner.getBoundingClientRect().width,box.scrollWidth);
     const width=frame.clientWidth,scale=Math.min(1,width/natural);
     box.style.width=natural+'px';
     const height=Math.max(box.scrollHeight,inner.offsetHeight+inner.offsetTop);
     box.style.transform='scale('+scale+')';
     box.style.marginLeft=Math.max(0,(width-natural*scale)/2)+'px';
     frame.style.height=Math.ceil(height*scale+40)+'px';
    }
    fit();frame.style.visibility='visible';doc.querySelectorAll('img').forEach(img=>img.addEventListener('load',fit));
    new ResizeObserver(fit).observe(frame);setTimeout(fit,350);
   }
   setTimeout(isolate,100);
  });heading.parentNode.insertBefore(frame,heading);return true;
 }
 if(!mount()){const observer=new MutationObserver(()=>{if(mount())observer.disconnect()});observer.observe(document.body,{childList:true,subtree:true});}
})();
