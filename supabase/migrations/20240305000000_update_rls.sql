-- Enable RLS
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON donations;
DROP POLICY IF EXISTS "Enable read access for authenticated users only" ON donations;
DROP POLICY IF EXISTS "Enable insert for everyone" ON donations;
DROP POLICY IF EXISTS "Enable read for admins" ON donations;

-- Create new policies
CREATE POLICY "Public insert access"
ON donations FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Admin read access"
ON donations FOR SELECT
USING (
  role = 'admin'
);

-- Grant necessary permissions
GRANT INSERT ON donations TO anon, authenticated;
GRANT SELECT ON donations TO authenticated;