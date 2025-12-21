# CMS Project (Modular Express + MySQL)

این نسخه همان پروژه شماست، فقط **حرفه‌ای‌تر و ماژولار** شده:
- routes / controllers / services
- migration ساده (بدون ORM و بدون پیچیدگی)

## 1) تنظیم دیتابیس
1) در پوشه `backend` فایل `.env` بسازید (از `.env.example` کپی کنید) و اطلاعات MySQL را وارد کنید.
2) نصب پکیج‌ها:
```bash
cd backend
npm i
```

## 2) اجرای migration (ساخت جدول‌ها)
```bash
npm run migrate
```

## 3) اجرا
```bash
npm run dev
```

سپس:
- http://localhost:3000

## ساختار بک‌اند
- `src/app.js` تنظیمات اکسپرس + static + api
- `src/routes/*` مسیرها
- `src/controllers/*` کنترلرها
- `src/services/*` کوئری‌های دیتابیس (Data Access)
- `src/db/migrations/*` فایل‌های migration
- `src/db/migrate.js` اجراکننده migration
