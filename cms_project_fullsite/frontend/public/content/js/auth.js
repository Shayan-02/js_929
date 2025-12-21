function getToken(){
  return localStorage.getItem("token");
}

async function apiGetAuth(url){
  const token = getToken();
  const res = await fetch(url, { headers: token ? { Authorization: `Bearer ${token}` } : {} });
  const txt = await res.text();
  if(!res.ok) throw new Error(txt || "Request failed");
  try { return JSON.parse(txt); } catch { return txt; }
}

async function apiSendAuth(url, method, payload){
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

async function requireAdminUI(){
  const token = getToken();
  if(!token){
    location.href = "/"; 
    return;
  }
  try{
    const me = await apiGetAuth("/api/auth/me");
    if(!me.user?.isAdmin){
      location.href = "/";
    }
  }catch(e){
    location.href = "/";
  }
}
