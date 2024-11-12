-- Enable RLS
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Public insert access" ON donations;
DROP POLICY IF EXISTS "Admin read access" ON donations;

-- Create new policy for public inserts
CREATE POLICY "Allow public inserts"
ON donations FOR INSERT
TO public
WITH CHECK (true);

-- Create new policy for public reads
CREATE POLICY "Allow public reads"
ON donations FOR SELECT
TO public
USING (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON donations TO anon, authenticated;
GRANT ALL ON donations_id_seq TO anon, authenticated;