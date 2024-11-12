-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert for everyone" ON donations;
DROP POLICY IF EXISTS "Enable read for admins" ON donations;

-- Create new policies with correct permissions
CREATE POLICY "Allow public donations insert"
ON donations FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow public donations select"
ON donations FOR SELECT
TO public
USING (true);

-- Enable RLS on the donations table
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;