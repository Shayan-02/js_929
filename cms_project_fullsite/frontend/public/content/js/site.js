function getToken(){ return localStorage.getItem("token"); }

async function apiGet(url){
  const token = getToken();
  const res = await fetch(url, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
  const txt = await res.text();
  if(!res.ok) throw new Error(txt || "Request failed");
  try { return JSON.parse(txt); } catch { return txt; }
}

async function apiSend(url, method, payload){
  const token = getToken();
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type":"application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: payload ? JSON.stringify(payload) : undefined
  });
  const txt = await res.text();
  if(!res.ok) throw new Error(txt || "Request failed");
  try { return JSON.parse(txt); } catch { return txt; }
}

async function refreshHeader(){
  const cmsBtn = document.getElementById("cmsBtn");
  const token = getToken();
  if(!token){
    if(cmsBtn) cmsBtn.style.display="none";
    return;
  }
  try{
    const me = await apiGet("/api/auth/me");
    if(me.user?.isAdmin){
      cmsBtn.style.display="inline-flex";
    }else{
      cmsBtn.style.display="none";
    }
  }catch(e){
    if(cmsBtn) cmsBtn.style.display="none";
  }
}
