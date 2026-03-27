-- Add password_hash column for user authentication
ALTER TABLE w260327a_users
ADD COLUMN IF NOT EXISTS password_hash TEXT;

-- Ensure public insert policy exists for user registration
DROP POLICY IF EXISTS "Public can insert users" ON w260327a_users;

CREATE POLICY "Public can insert users"
ON w260327a_users FOR INSERT
WITH CHECK (true);

-- Ensure public select policy exists for login
DROP POLICY IF EXISTS "Public can select users" ON w260327a_users;

CREATE POLICY "Public can select users"
ON w260327a_users FOR SELECT
USING (true);