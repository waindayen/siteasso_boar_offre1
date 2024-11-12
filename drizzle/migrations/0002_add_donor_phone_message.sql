-- Add donor_phone and message columns to donations table
ALTER TABLE donations 
ADD COLUMN donor_phone TEXT,
ADD COLUMN message TEXT;