
render();
document.addEventListener('click',e=>{if(S.dd&&!e.target.closest('.dd,.bellb')){S.dd=0;S.na=1;render()}});
setInterval(()=>{ENV.t=21.5+(Math.random()-.5)*.2;ENV.co2=800+Math.round((Math.random()-.5)*20);ENV.l=420+Math.round((Math.random()-.5)*8);ENV.n=42+Math.round((Math.random()-.5)*4);document.querySelectorAll('[data-k]').forEach(e=>{const k=e.dataset.k;e.textContent=k=='t'?ENV.t.toFixed(1):k=='r'?ENV.r.toFixed(2):ENV[k]})},3000);
