-- 002_admin_user.sql
-- add isAdmin column if not exists (MySQL 8+ supports IF NOT EXISTS for ADD COLUMN? not always)
-- We'll use a safe dynamic check in migrate runner (JS) for this migration.

-- Create admin user (username: admin, password: admin)
-- Password hash will be inserted by seed script (because hashing in SQL is not standard).
