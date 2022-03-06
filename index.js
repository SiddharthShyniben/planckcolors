let p=['black','red','green','yellow','blue','magenta','cyan','white'],x={},s=(S='',A=30,B='')=>p.map((a,i)=>x[a+S]=t=>`\x1b[${i+A}${B}m${t}\x1b[0m`)&&s,$='Bright',_='Bg',L=';1';s()($,30,L)(_,40)(_+$,40,L);
export x;
