import{r as l,u as x,a as g,j as e,_ as f,b as w,l as b,R as N,c as m,I as y,d as C,B as k}from"./DvPyt2eX-1713415679617.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();var L={VITE_APP_REACT_URL:"http://192.168.31.80:3939/api/v1",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_REACT_URL:h}=L;function S(o){const n=o+"=",a=decodeURIComponent(document.cookie).split(";");for(let t=0;t<a.length;t++){let s=a[t];for(;s.charAt(0)===" ";)s=s.substring(1);if(s.indexOf(n)===0)return JSON.parse(s.substring(n.length,s.length))}return""}function A(o,n){document.cookie=o+"="+JSON.stringify(n)+";path=/"}const O=()=>{l.useEffect(()=>{a()},[]);const[o,n]=l.useState([]),i=x(),a=async()=>{try{const r=await g.get(h+"/app");n(r.data.names)}catch(r){n(["Nagagold","GK"]),console.log(r)}},[t,s]=l.useState({title:"",isOpen:!1}),c=r=>{s({title:r,isOpen:!0})};return e.jsxs("div",{className:"flex flex-col gap-2 p-4",children:[e.jsx("h1",{children:" List App "}),e.jsx("input",{className:"outline-none border-2 p-1 rounded-full px-4 border-gray-300  focus:border-[#178DF9]",placeholder:"Cari App"}),e.jsx("div",{className:"flex flex-col gap-3 mt-4",children:o.map((r,d)=>e.jsx("div",{onClick:()=>c(r),className:"flex w-full border-2 rounded p-2 hover:border-[#178DF9] cursor-pointer",children:r},d))}),t.isOpen&&e.jsxs("div",{className:`fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-75 flex justify-center items-center ${t.isOpen?"":"hidden"}`,children:[e.jsxs("div",{className:"relative max-w-md p-8 m-4 bg-white rounded-md w-80",children:[e.jsxs("div",{className:"mb-4 text-xl font-bold",children:["Apakah anda yakin ingin update ",t.title," ?"]}),e.jsxs("div",{className:"flex justify-end",children:[e.jsx("button",{onClick:()=>s({title:"",isOpen:!1}),className:"px-4 py-2 mr-2 font-bold text-white bg-[#ee6e6e] rounded hover:bg-[#a53636]",children:"No"}),e.jsx("button",{onClick:()=>{i("/detail/"+t.title)},className:"px-4 py-2 font-bold text-white bg-[#78b7f1] rounded hover:bg-[#178DF9]",children:"Yes"})]})]}),e.jsx("button",{onClick:()=>{s({title:"",isOpen:!1})},className:"absolute top-0 right-0 p-2",children:e.jsx("svg",{className:"w-6 h-6 text-gray-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})]})]})},P="/assets/images/qILC5JLC-1713415679617.png",E=()=>{const[o,n]=l.useState({username:"",password:"",loading:!1}),i=x(),a=async()=>{if(!o.username)return f.error("Username is required"),!1;if(!o.password)return f.error("Password is required"),!1;try{n({...o,loading:!0}),await f.promise(t(o),{loading:"Checking...",success:e.jsx("b",{children:"Login Success!"}),error:e.jsx("b",{children:"Username and Password wrong."})}),n({...o,loading:!1}),i("/home"),A("datalogin",o)}catch{n({...o,loading:!1})}},t=s=>new Promise((c,r)=>{setTimeout(()=>{s.username==="nsi"&&s.password==="developer"?c(!0):r(!1)},2e3)});return l.useEffect(()=>{S("datalogin").username&&i("/home")},[i]),e.jsx("div",{className:"flex items-center align-middle h-full p-5",children:e.jsxs("div",{className:"flex flex-col w-full gap-2",children:[e.jsx("div",{className:"flex justify-center mb-5",children:e.jsx("img",{src:P,className:"w-52"})}),e.jsx("input",{value:o.username,className:"outline-none border-2 p-2  focus:border-[#178DF9]",placeholder:"Please Input Username",onChange:s=>n({...o,username:s.target.value})}),e.jsx("input",{value:o.password,type:"password",className:"outline-none border-2 p-2  focus:border-[#178DF9]",placeholder:"Please Input Password",onChange:s=>n({...o,password:s.target.value})}),e.jsxs("button",{onClick:()=>a(),className:"bg-[#178DF9] w-full rounded text-white p-2 outline-none",children:[" ",o.loading?e.jsxs("div",{children:[e.jsx("i",{className:"fa-solid fa-spinner fa-spin mr-2"}),"Checking Data"]}):"Login"]})]})})},j=l.createContext(void 0),I=({children:o})=>{const[n,i]=l.useState(!1),[a,t]=l.useState(!1);return e.jsx(j.Provider,{value:{fullScreen:n,setFullScreen:i,isLoading:a,setIsLoading:t},children:o})},v=()=>{const o=l.useContext(j);if(!o)throw new Error("useActiveChat must be used within a HookProvider");return o},R=()=>{const o=w(),n=x(),{fullScreen:i,setFullScreen:a,setIsLoading:t,isLoading:s}=v();l.useEffect(()=>{c()},[]);const c=()=>{const r=b(h.replace("/api/v1",""));r.connect(),r.on("connect",async()=>{r.emit("join-room",o.id);const d=[];r.on("update-progress",p=>{const u=document.getElementById("logConsole");p.status==="PROGRESS"?(d.push(p.message),u.value=d.join(`
`),u.scrollTop=u.scrollHeight,t(!0)):p.status==="FINISH"&&(t(!1),f.success("Update Finish"),d.push(`
`),d.push("Update Finish"),d.push(`
`),u.value=d.join(`
`),u.scrollTop=u.scrollHeight+400)});try{await g.post(h+"/app/update",{name:o.id,socketId:r.id})}catch(p){p.response.data.message.includes("processed")&&(f("Sedang dalam proses update, silahkan tunggu!",{icon:"🧘🏾"}),t(!0))}})};return e.jsxs("div",{className:"terminal-container w-full h-full rounded-lg border border-gray-700 overflow-hidden",children:[e.jsxs("div",{className:"terminal-header bg-gray-800 flex items-center justify-between px-4 py-2",children:[e.jsx("div",{className:"flex items-center space-x-2",onClick:()=>n("/home"),children:e.jsx("i",{className:"fa-solid fa-chevron-left text-white cursor-pointer"})}),e.jsxs("div",{className:"text-sm text-white justify-center",children:["Terminal App ",o.id," ",s&&e.jsx("i",{className:"fa-solid fa-spinner fa-spin text-white absolute ml-2"})]}),e.jsx("div",{className:"flex items-center space-x-2 cursor-pointer",onClick:()=>a(!i),children:e.jsx("i",{className:"fa-solid fa-maximize text-white"})})]}),e.jsx("div",{className:"terminal-body",children:e.jsx("div",{className:"terminal-line",children:e.jsx("textarea",{readOnly:!0,id:"logConsole",className:"p-2 terminal-input bg-black text-white focus:outline-none resize-none w-full h-screen overflow-y-auto"})})})]})},D=()=>{const{fullScreen:o}=v();return e.jsxs("div",{className:"flex justify-center",children:[e.jsx("div",{className:`${o?"w-full":"xxl:w-[25rem] w-full overflow-y-auto no-scrollbar h-screen rounded-md shadow-md md:w-[60%] lg:w-1/3 xl:w-[30%]"} `,children:e.jsxs(N,{children:[e.jsx(m,{index:!0,element:e.jsx(E,{})}),e.jsx(m,{path:"home",element:e.jsx(O,{})}),e.jsx(m,{path:"detail/:id",element:e.jsx(R,{})})]})}),e.jsx(y,{position:"bottom-center",reverseOrder:!1})]})};C.createRoot(document.getElementById("root")).render(e.jsx(k,{children:e.jsx(I,{children:e.jsx(D,{})})}));
